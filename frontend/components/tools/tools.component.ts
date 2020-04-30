// @ts-ignore
import { Component, OnInit, Injector, ViewChild, ViewContainerRef } from '@angular/core';
// @ts-ignore
import { ActivatedRoute } from "@angular/router";
import {ToolLoaderService} from "../../services/tool-loader/tool-loader.service";
import {ToolConfigProvider} from "../../services/tool-config.provider";

@Component({
    selector: 'nc-devices',
    templateUrl: './tools.component.html',
    styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

    @ViewChild('targetRef', { read: ViewContainerRef }) vcRef: ViewContainerRef;
    config: any;
    activeTool: string;
    error: string = "";

    constructor(
        private injector: Injector,
        private toolLoader: ToolLoaderService,
        private configProvider: ToolConfigProvider,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.config = this.configProvider.config;
        // @ts-ignore
        this.route.paramMap.subscribe(
            params => {
            this.activeTool = params.get("tool");
            if(this.activeTool) {
                this.loadTool(this.activeTool)
            }
        });
    }

    loadTool(toolName: string) {
        try {
            this.toolLoader.load(toolName).then(moduleFactory => {
                try {
                    const moduleRef = moduleFactory.create(this.injector);
                    const entryComponent = (moduleFactory.moduleType as any).entry;
                    const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(
                        entryComponent
                    );
                    this.vcRef.createComponent(compFactory);
                    this.error = '';
                }
                catch(e) {
                    this.error = 'Selected tool could not be loaded. Check the console for more details.';
                    console.log(e);
                    console.error(e.message);
                    this.activeTool = null;
                }}
            );
        }
        catch(e) {
            this.error = "Selected tool does not exist or crashed during launch.";
            this.activeTool = null;
        }
    }

}

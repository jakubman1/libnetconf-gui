import { Component, OnInit, Input } from '@angular/core';
import {NodeControlService} from "../../services/node-control.service";

@Component({
  selector: 'nct-yang-schema-node',
  templateUrl: './yang-schema-node.component.html',
  styleUrls: ['./yang-schema-node.component.scss']
})
export class YangSchemaNodeComponent implements OnInit {

  constructor(public nodeControlService: NodeControlService) { }

  @Input() node: object;
  @Input() showChildren = false;
  //showChildren = false;
  showAllChildrenOnOpen = false;
  showHelp = false;

  ngOnInit() {
    //this.showChildren = this.showChildrenOnInit;
    this.nodeControlService.performNodeAction.subscribe(
      action => {
        this.performGlobalAction(action);
      }
    );
  }

  toggleChildren() {
    this.showAllChildrenOnOpen = false;
    this.showChildren = !this.showChildren;
  }

  toggleAllChildren() {
    this.showAllChildrenOnOpen = true;
    this.showChildren = !this.showChildren;
  }

  performGlobalAction(action: string) {
    switch(action) {
      case "hideHelp":
        this.showHelp = false;
        break;
      case "showHelp":
        this.showHelp = true;
        break;
      case "close":
        this.showChildren = false;
        this.showAllChildrenOnOpen = false;
        break;
    }
  }

}

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Injectable, Component, Input, Output, EventEmitter, NgModule, defineInjectable, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/configuration.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConfigurationService {
    /**
     * @param {?} device
     * @param {?} target
     * @param {?} config
     * @return {?}
     */
    editConfig(device, target, config) {
        return;
    }
    /**
     * @param {?} device
     * @return {?}
     */
    commitChanges(device) {
        return;
    }
}
ConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ ConfigurationService.ngInjectableDef = defineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(); }, token: ConfigurationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/netconf-lib.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// export * from './services/device.service';
// export * from './services/session.service';
class NetconfLibService {
    constructor() {
    }
    /**
     * @return {?}
     */
    provideExample() {
        return 'Example service works!';
    }
}
NetconfLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NetconfLibService.ctorParameters = () => [];
/** @nocollapse */ NetconfLibService.ngInjectableDef = defineInjectable({ factory: function NetconfLibService_Factory() { return new NetconfLibService(); }, token: NetconfLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/netconf-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NetconfLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NetconfLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-nc',
                template: `
    <p>
      netconf-lib works!
    </p>
  `
            }] }
];
NetconfLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/device.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DeviceService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this._connectedDevices = [];
        this.connectedDevicesChanged = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get connectedDevices() {
        return this._connectedDevices;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set connectedDevices(value) {
        this._connectedDevices = value;
        this.connectedDevicesChanged.emit(value);
    }
    /**
     * @return {?}
     */
    getConnectedDevices() {
        return this.connectedDevices;
    }
    /**
     * @return {?}
     */
    getSavedDevices() {
        return this.http.get('/netconf/devices');
    }
    /**
     * @param {?} hostname
     * @param {?} port
     * @param {?} username
     * @param {?=} deviceName
     * @param {?=} password
     * @param {?=} connect
     * @return {?}
     */
    saveDevice(hostname, port, username, deviceName = '', password = '', connect = false) {
        /** @type {?} */
        const dev = {
            fingerprint: '',
            id: '',
            name: deviceName,
            hostname,
            port,
            username,
            password
        };
        if (connect) {
            this.connectToDevice(dev).subscribe(); // TODO: Show 'now connecting' modal window
        }
        return this.http.post('/netconf/device', { device: dev });
    }
    /**
     * @param {?} device
     * @return {?}
     */
    connectToDevice(device) {
        /** @type {?} */
        const body = {
            'name': device.name,
            'hostname': device.hostname,
            'port': device.port,
            'username': device.username,
            'password': device.password
        };
        return this.http.post('/netconf/connect', body);
    }
    /**
     * Filter is xpath (?)
     * @param {?} filter
     * @return {?}
     */
    getCompatibleDevices(filter) {
        return this.connectedDevices;
    }
}
DeviceService.decorators = [
    { type: Injectable }
];
DeviceService.ctorParameters = () => [
    { type: HttpClient }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/device-quickswitch.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DeviceQuickswitchComponent {
    /**
     * @param {?} deviceService
     */
    constructor(deviceService) {
        this.deviceService = deviceService;
        this.schemaFilter = '';
        this.vertical = false;
        this.compatibleDevices = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DeviceQuickswitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-device-quickswitch',
                template: `
    <p>
      tbd
    </p>
  `
            }] }
];
DeviceQuickswitchComponent.ctorParameters = () => [
    { type: DeviceService }
];
DeviceQuickswitchComponent.propDecorators = {
    schemaFilter: [{ type: Input }],
    vertical: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/session.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SessionService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this._sessions = [];
        this.sessionsChanged = new EventEmitter();
        console.log('CONSTRUCTOR OF SESSION SERVICE CALLED');
    }
    /**
     * @return {?}
     */
    get sessions() {
        console.log('Getting sessions');
        console.log(this._sessions);
        return this._sessions;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set sessions(value) {
        console.log('Setting sessions');
        console.log(value);
        this._sessions = value;
        this.sessionsChanged.emit(value);
    }
    /**
     * @param {?} key
     * @param {?} device
     * @return {?}
     */
    addSession(key, device) {
        if (!this.doesSessionExists(key)) {
            /** @type {?} */
            const sessions = this.sessions;
            sessions.push({
                key, device
            });
            this.sessions = sessions;
        }
        else {
            /** @type {?} */
            const idx = this.findSessionIndex(key);
            this._sessions[idx].device = device;
            this.sessionsChanged.emit(this.sessions);
        }
    }
    /**
     * @param {?} key
     * @return {?}
     */
    destroySession(key) {
        /** @type {?} */
        const idx = this.findSessionIndex(key);
        return this.http.delete('/netconf/session/' + key)
            .pipe(tap((/**
         * @param {?} next
         * @return {?}
         */
        next => {
            this._sessions.splice(idx, 1);
            this.sessionsChanged.emit(this.sessions);
        })));
    }
    /**
     * @return {?}
     */
    loadOpenSessions() {
        return this.http.get('/netconf/sessions');
    }
    /**
     * @return {?}
     */
    destroyAllSessions() {
        return this.http.delete('/netconf/sessions');
    }
    /**
     *  Check if session exists on the server.
     * @param {?} key
     * @return {?}
     */
    sessionAlive(key) {
        /*const params = new HttpParams()
          .append('key', key);*/
        return this.http.get('/netconf/session/alive/' + key);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    doesSessionExists(key) {
        for (const session of this._sessions) {
            if (session.key === key) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    findSessionIndex(key) {
        return this._sessions.findIndex((/**
         * @param {?} s
         * @return {?}
         */
        s => s.key === key));
    }
    /**
     * Filter is xpath (?)
     * @param {?} filter
     * @return {?}
     */
    getCompatibleDeviceSessions(filter) {
        // TODO: Filter
        console.log('Getting compatible sessions');
        console.log(this.sessions);
        return this.sessions;
    }
}
SessionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SessionService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ SessionService.ngInjectableDef = defineInjectable({ factory: function SessionService_Factory() { return new SessionService(inject(HttpClient)); }, token: SessionService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/device-selection.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DeviceSelectionComponent {
    /**
     * @param {?} sessionService
     */
    constructor(sessionService) {
        this.sessionService = sessionService;
        this.schemaFilter = '';
        this.devicesSelected = new EventEmitter();
        this.compatibleDevices = [];
        this.errorMessage = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.reload();
    }
    /**
     * Returns true, if there is at least one device selected. Returns false otherwise.
     * @return {?}
     */
    areDevicesSelected() {
        for (const d of this.compatibleDevices) {
            if (d.selected) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    setAllSelectionsTo(val) {
        for (const d of this.compatibleDevices) {
            d.selected = val;
        }
    }
    /**
     * @return {?}
     */
    submit() {
        if (this.areDevicesSelected()) {
            /** @type {?} */
            const selectedDevices = [];
            for (const d of this.compatibleDevices) {
                if (d.selected) {
                    selectedDevices.push(d.session);
                }
            }
            this.devicesSelected.emit(selectedDevices);
            this.errorMessage = '';
        }
        else {
            this.errorMessage = 'No devices selected';
        }
    }
    /**
     * @return {?}
     */
    reload() {
        // const sessions = this.sessionService.getCompatibleDeviceSessions('');
        /** @type {?} */
        const sessions = this.sessionService.sessions;
        this.sessionService.sessionsChanged.subscribe((/**
         * @param {?} ses
         * @return {?}
         */
        ses => {
            for (const s of ses) {
                this.compatibleDevices.push({ session: s, selected: true });
            }
        }));
        for (const s of sessions) {
            this.compatibleDevices.push({ session: s, selected: true });
        }
    }
}
DeviceSelectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-device-selection',
                template: "<lib-content-box [title]=\"'Select devices to configure'\" [limitWidth]=\"true\">\r\n  <div class=\"toolbox mb-3\">\r\n    <button class=\"btn btn-secondary\" (click)=\"setAllSelectionsTo(true)\">Select all</button>\r\n    <button class=\"btn btn-secondary\" (click)=\"setAllSelectionsTo(false)\">Unselect all</button>\r\n    <button class=\"btn btn-secondary\" (click)=\"reload()\">Reload device list</button>\r\n    <button class=\"btn btn-primary right\">Connect a new device</button>\r\n  </div>\r\n  <div *ngIf=\"compatibleDevices.length > 0\" class=\"row\">\r\n    <div class=\"col-sm-12 col-md-4 pl-3 pr-3 p-2\" *ngFor=\"let session of compatibleDevices\">\r\n      <lib-device-selection-item [device]=\"session.session.device\"\r\n                                 [(selected)]=\"session.selected\"\r\n      ></lib-device-selection-item>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"compatibleDevices.length === 0\">\r\n    <h2 class=\"text-center\">No compatible devices connected.</h2>\r\n  </div>\r\n  <div class=\"toolbox mt-3\">\r\n    <a routerLink=\"/netconf/tools\" class=\"btn btn-danger\">Cancel</a>\r\n    <button class=\"btn btn-primary right\" (click)=\"submit()\">Configure</button>\r\n  </div>\r\n  <p class=\"error-text text-right\">{{errorMessage}}</p>\r\n</lib-content-box>\r\n<!--<div class=\"box\">\r\n  <div class=\"box-header\">\r\n    Select devices to configure\r\n  </div>\r\n  <div class=\"box-content box-content-limited\">\r\n\r\n  </div>\r\n</div>\r\n-->\r\n",
                styles: [".btn{margin-right:5px}.box{margin-bottom:10px;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.box-header{background:#008545;width:100%;font-size:1.5rem;border-radius:5px 5px 0 0;color:#fff;padding:5px 10px;text-align:center}.box-content{padding:5px 10px}.box-content-limited{max-width:1200px;margin-left:auto;margin-right:auto}.clickable{cursor:pointer}.clickable::-moz-selection{background:0 0;color:#231f20}.clickable::-moz-selection,.clickable::selection{background:0 0;color:#231f20}.error-text{color:#ee1d23}.checkbox-container{display:block;position:relative;padding-left:35px;margin-bottom:32px;cursor:pointer;font-size:22px;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:150ms ease-in-out}.checkbox-container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkbox-container:hover input~.checkmark{background-color:#00b55d}.checkbox-container input:checked~.checkmark{background-color:#231f20}.checkbox-container input:checked~.checkmark:after{display:block}.checkbox-container .checkmark:after{left:7px;top:-1px;width:12px;height:22px;border:solid #fff;border-width:0 4px 4px 0;border-radius:2px;transform:rotate(45deg)}.checkmark{position:absolute;top:0;left:0;height:32px;width:32px;background-color:#fff;border:3px solid #231f20;border-radius:5px;transition:150ms ease-in-out}.checkmark:after{content:\"\";position:absolute;display:none}.device-selection-title{font-size:1.2em;margin-bottom:0}.device-name{font-weight:700;margin-right:.5rem}.device-item{cursor:pointer;border:2px solid #016d39;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);margin-bottom:0}.hostname{font-size:.8em;white-space:nowrap;display:inline-block;color:rgba(35,31,32,.7)}.toolbox{width:100%}@media only screen and (min-width:600px){.toolbox{display:flex}}.toolbox .right{margin-left:auto}"]
            }] }
];
DeviceSelectionComponent.ctorParameters = () => [
    { type: SessionService }
];
DeviceSelectionComponent.propDecorators = {
    schemaFilter: [{ type: Input }],
    devicesSelected: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/classes/device.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/subcomponents/device-selection-item.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DeviceSelectionItemComponent {
    constructor() {
        this.selectedChange = new EventEmitter();
        this.compatibleDevices = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    changeSelection() {
        this.selectedChange.emit(!this.selected);
    }
}
DeviceSelectionItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-device-selection-item',
                template: "<div class=\"container-fluid device-item clickable\" (click)=\"changeSelection()\">\r\n  <div class=\"row p-2\">\r\n    <div class=\"col-sm-9 col-md-10\">\r\n      <p class=\"device-selection-title\">\r\n        <span class=\"device-name\"> {{device.hostname}}:{{device.port}}</span>\r\n        <span class=\"hostname\" *ngIf=\"device.name\">{{device.name}}</span>\r\n      </p>\r\n      <p class=\"mb-0\">{{device.username}}</p>\r\n    </div>\r\n    <div class=\"col-sm-3 col-md-2\">\r\n      <label class=\"checkbox-container\">\r\n        <input type=\"checkbox\" [checked]=\"selected\" (change)=\"changeSelection(); $event.stopPropagation()\">\r\n        <span class=\"checkmark\"></span>\r\n      </label>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n",
                styles: [".btn{margin-right:5px}.box{margin-bottom:10px;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.box-header{background:#008545;width:100%;font-size:1.5rem;border-radius:5px 5px 0 0;color:#fff;padding:5px 10px;text-align:center}.box-content{padding:5px 10px}.box-content-limited{max-width:1200px;margin-left:auto;margin-right:auto}.clickable{cursor:pointer}.clickable::-moz-selection{background:0 0;color:#231f20}.clickable::-moz-selection,.clickable::selection{background:0 0;color:#231f20}.error-text{color:#ee1d23}.checkbox-container{display:block;position:relative;padding-left:35px;margin-bottom:32px;cursor:pointer;font-size:22px;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:150ms ease-in-out}.checkbox-container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkbox-container:hover input~.checkmark{background-color:#00b55d}.checkbox-container input:checked~.checkmark{background-color:#231f20}.checkbox-container input:checked~.checkmark:after{display:block}.checkbox-container .checkmark:after{left:7px;top:-1px;width:12px;height:22px;border:solid #fff;border-width:0 4px 4px 0;border-radius:2px;transform:rotate(45deg)}.checkmark{position:absolute;top:0;left:0;height:32px;width:32px;background-color:#fff;border:3px solid #231f20;border-radius:5px;transition:150ms ease-in-out}.checkmark:after{content:\"\";position:absolute;display:none}.device-selection-title{font-size:1.2em;margin-bottom:0}.device-name{font-weight:700;margin-right:.5rem}.device-item{cursor:pointer;border:2px solid #016d39;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);margin-bottom:0}.hostname{font-size:.8em;white-space:nowrap;display:inline-block;color:rgba(35,31,32,.7)}.toolbox{width:100%}@media only screen and (min-width:600px){.toolbox{display:flex}}.toolbox .right{margin-left:auto}"]
            }] }
];
DeviceSelectionItemComponent.ctorParameters = () => [];
DeviceSelectionItemComponent.propDecorators = {
    device: [{ type: Input }],
    selected: [{ type: Input }],
    selectedChange: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/content-box.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ContentBoxComponent {
    constructor() {
        this.title = '';
        this.limitWidth = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ContentBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-content-box',
                template: `
    <div class="content-box">
      <div class="box-header" *ngIf="title">{{title}}</div>
      <div class="box-content" [class.box-content-limited]="limitWidth">
          <ng-content></ng-content>
      </div>
    </div>
  `,
                styles: [".content-box{margin-bottom:10px;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.box-header{background:#008545;width:100%;font-size:1.5rem;border-radius:5px 5px 0 0;color:#fff;padding:5px 10px;text-align:center}.box-content{padding:5px 10px}.box-content-limited{max-width:1200px;margin-left:auto;margin-right:auto}"]
            }] }
];
ContentBoxComponent.ctorParameters = () => [];
ContentBoxComponent.propDecorators = {
    title: [{ type: Input }],
    limitWidth: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/popup.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PopupComponent {
    constructor() {
        this.title = '';
        this.toolbox = true;
        this.submitBtnText = 'Submit';
        this.canceled = new EventEmitter();
        this.submitted = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    cancel() {
        this.canceled.emit(true);
    }
    /**
     * @return {?}
     */
    submit() {
        this.submitted.emit(true);
    }
}
PopupComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-nc-popup',
                template: `
    <div class="popup-wrapper">
      <div class="popup-content">
        <div *ngIf="title !== ''" class="popup-header">{{title}}</div>
        <ng-content></ng-content>
        <div class="popup-toolbox" *ngIf="toolbox">
          <button class="btn btn-danger" (click)="cancel()">Cancel</button>
          <button class="btn btn-primary float-right" (click)="submit()">{{submitBtnText}}</button>
        </div>
      </div>
    </div>
  `,
                styles: [".popup-wrapper{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.7);z-index:9999}.popup-content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:100vw;max-height:100vh;overflow:auto;padding:10px;background:#fff;border:3px solid #fff;border-radius:5px}.popup-header{width:calc(100% + 20px);margin:-10px -10px 10px;background:#008545;color:#fff;border-radius:5px 5px 0 0;padding:5px;font-size:1.3rem;text-align:center}.popup-toolbox{background:#fafafa;width:calc(100% + 20px);margin:10px -10px -20px;padding:10px}"]
            }] }
];
PopupComponent.ctorParameters = () => [];
PopupComponent.propDecorators = {
    title: [{ type: Input }],
    toolbox: [{ type: Input }],
    submitBtnText: [{ type: Input }],
    canceled: [{ type: Output }],
    submitted: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/netconf-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const sharedComponents = [
    NetconfLibComponent,
    DeviceQuickswitchComponent,
    DeviceSelectionComponent,
    DeviceSelectionItemComponent,
    ContentBoxComponent,
    PopupComponent
];
class NetconfLibModule {
}
NetconfLibModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    RouterModule,
                    HttpClientModule
                ],
                declarations: [...sharedComponents],
                exports: [...sharedComponents],
                providers: [
                    DeviceService
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: netconf-lib.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NetconfLibService, ConfigurationService, NetconfLibModule, SessionService, DeviceService, ContentBoxComponent as ɵe, DeviceQuickswitchComponent as ɵb, DeviceSelectionComponent as ɵc, PopupComponent as ɵf, DeviceSelectionItemComponent as ɵd, NetconfLibComponent as ɵa };

//# sourceMappingURL=netconf-lib.js.map
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { __values, __spread } from 'tslib';
import { Injectable, Component, Input, Output, EventEmitter, defineInjectable, NgModule, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/configuration.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService() {
    }
    /**
     * @param {?} device
     * @param {?} target
     * @param {?} config
     * @return {?}
     */
    ConfigurationService.prototype.editConfig = /**
     * @param {?} device
     * @param {?} target
     * @param {?} config
     * @return {?}
     */
    function (device, target, config) {
        return;
    };
    /**
     * @param {?} device
     * @return {?}
     */
    ConfigurationService.prototype.commitChanges = /**
     * @param {?} device
     * @return {?}
     */
    function (device) {
        return;
    };
    ConfigurationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ ConfigurationService.ngInjectableDef = defineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(); }, token: ConfigurationService, providedIn: "root" });
    return ConfigurationService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/device.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DeviceService = /** @class */ (function () {
    function DeviceService(http) {
        this.http = http;
        this._connectedDevices = [];
        this.connectedDevicesChanged = new EventEmitter();
    }
    Object.defineProperty(DeviceService.prototype, "connectedDevices", {
        get: /**
         * @return {?}
         */
        function () {
            return this._connectedDevices;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._connectedDevices = value;
            this.connectedDevicesChanged.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DeviceService.prototype.getConnectedDevices = /**
     * @return {?}
     */
    function () {
        return this.connectedDevices;
    };
    /**
     * @return {?}
     */
    DeviceService.prototype.getSavedDevices = /**
     * @return {?}
     */
    function () {
        return this.http.get('/netconf/devices');
    };
    /**
     * @param {?} hostname
     * @param {?} port
     * @param {?} username
     * @param {?=} deviceName
     * @param {?=} password
     * @param {?=} connect
     * @return {?}
     */
    DeviceService.prototype.saveDevice = /**
     * @param {?} hostname
     * @param {?} port
     * @param {?} username
     * @param {?=} deviceName
     * @param {?=} password
     * @param {?=} connect
     * @return {?}
     */
    function (hostname, port, username, deviceName, password, connect) {
        if (deviceName === void 0) { deviceName = ''; }
        if (password === void 0) { password = ''; }
        if (connect === void 0) { connect = false; }
        /** @type {?} */
        var dev = {
            fingerprint: '',
            id: '',
            name: deviceName,
            hostname: hostname,
            port: port,
            username: username,
            password: password
        };
        if (connect) {
            this.connectToDevice(dev).subscribe();
        }
        return this.http.post('/netconf/device', { device: dev });
    };
    /**
     * @param {?} device
     * @return {?}
     */
    DeviceService.prototype.connectToDevice = /**
     * @param {?} device
     * @return {?}
     */
    function (device) {
        // this.connectedDevices.push(device);
        /** @type {?} */
        var body = {
            'name': device.name,
            'hostname': device.hostname,
            'port': device.port,
            'username': device.username,
            'password': device.password
        };
        return this.http.post('/netconf/connect', body);
    };
    /**
     * Filter is xpath (?)
     */
    /**
     * Filter is xpath (?)
     * @param {?} filter
     * @return {?}
     */
    DeviceService.prototype.getCompatibleDevices = /**
     * Filter is xpath (?)
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        return this.connectedDevices;
    };
    /**
     * @param {?} device
     * @return {?}
     */
    DeviceService.prototype.disconnectDevice = /**
     * @param {?} device
     * @return {?}
     */
    function (device) {
        return of(null);
    };
    DeviceService.decorators = [
        { type: Injectable }
    ];
    DeviceService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    return DeviceService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/session.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var SessionService = /** @class */ (function () {
    function SessionService(http, deviceService) {
        this.http = http;
        this.deviceService = deviceService;
        this.sessions = [];
    }
    /**
     * @param {?} key
     * @param {?} device
     * @return {?}
     */
    SessionService.prototype.addSession = /**
     * @param {?} key
     * @param {?} device
     * @return {?}
     */
    function (key, device) {
        if (!this.doesSessionExists(key)) {
            this.sessions.push({
                key: key, device: device
            });
        }
        else {
            /** @type {?} */
            var idx = this.findSessionIndex(key);
            this.sessions[idx].device = device;
        }
    };
    /**
     * @param {?} key
     * @return {?}
     */
    SessionService.prototype.destroySession = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var _this = this;
        /** @type {?} */
        var idx = this.findSessionIndex(key);
        this.deviceService.disconnectDevice(this.sessions[idx].device).subscribe((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this.sessions.splice(idx, 1);
        }));
    };
    /**
     *  Check if session exists.
     */
    /**
     *  Check if session exists.
     * @param {?} key
     * @return {?}
     */
    SessionService.prototype.sessionAlive = /**
     *  Check if session exists.
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /*const params = new HttpParams()
          .append('key', key);*/
        return this.http.get('/netconf/session/alive/' + key);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    SessionService.prototype.doesSessionExists = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var e_1, _a;
        try {
            for (var _b = __values(this.sessions), _c = _b.next(); !_c.done; _c = _b.next()) {
                var session = _c.value;
                if (session.key === key) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    SessionService.prototype.findSessionIndex = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.sessions.findIndex((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.key === key; }));
    };
    SessionService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    SessionService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: DeviceService }
    ]; };
    /** @nocollapse */ SessionService.ngInjectableDef = defineInjectable({ factory: function SessionService_Factory() { return new SessionService(inject(HttpClient), inject(DeviceService)); }, token: SessionService, providedIn: "root" });
    return SessionService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/netconf-lib.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NetconfLibService = /** @class */ (function () {
    function NetconfLibService() {
    }
    /**
     * @return {?}
     */
    NetconfLibService.prototype.provideExample = /**
     * @return {?}
     */
    function () {
        return 'Example service works!';
    };
    NetconfLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    NetconfLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ NetconfLibService.ngInjectableDef = defineInjectable({ factory: function NetconfLibService_Factory() { return new NetconfLibService(); }, token: NetconfLibService, providedIn: "root" });
    return NetconfLibService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/netconf-lib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NetconfLibComponent = /** @class */ (function () {
    function NetconfLibComponent() {
    }
    /**
     * @return {?}
     */
    NetconfLibComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    NetconfLibComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-nc',
                    template: "\n    <p>\n      netconf-lib works!\n    </p>\n  "
                }] }
    ];
    NetconfLibComponent.ctorParameters = function () { return []; };
    return NetconfLibComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/device-quickswitch.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DeviceQuickswitchComponent = /** @class */ (function () {
    function DeviceQuickswitchComponent(deviceService) {
        this.deviceService = deviceService;
        this.schemaFilter = '';
        this.vertical = false;
        this.compatibleDevices = [];
    }
    /**
     * @return {?}
     */
    DeviceQuickswitchComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DeviceQuickswitchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-device-quickswitch',
                    template: "\n    <p>\n      tbd\n    </p>\n  "
                }] }
    ];
    DeviceQuickswitchComponent.ctorParameters = function () { return [
        { type: DeviceService }
    ]; };
    DeviceQuickswitchComponent.propDecorators = {
        schemaFilter: [{ type: Input }],
        vertical: [{ type: Input }]
    };
    return DeviceQuickswitchComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/device-selection.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DeviceSelectionComponent = /** @class */ (function () {
    function DeviceSelectionComponent(deviceService) {
        this.deviceService = deviceService;
        this.schemaFilter = '';
        this.devicesSelected = new EventEmitter();
        this.compatibleDevices = [];
        this.errorMessage = '';
    }
    /**
     * @return {?}
     */
    DeviceSelectionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var devices = this.deviceService.getCompatibleDevices(this.schemaFilter);
        try {
            for (var devices_1 = __values(devices), devices_1_1 = devices_1.next(); !devices_1_1.done; devices_1_1 = devices_1.next()) {
                var d = devices_1_1.value;
                this.compatibleDevices.push({ device: d, selected: true });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (devices_1_1 && !devices_1_1.done && (_a = devices_1.return)) _a.call(devices_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Returns true, if there is at least one device selected. Returns false otherwise.
     */
    /**
     * Returns true, if there is at least one device selected. Returns false otherwise.
     * @return {?}
     */
    DeviceSelectionComponent.prototype.areDevicesSelected = /**
     * Returns true, if there is at least one device selected. Returns false otherwise.
     * @return {?}
     */
    function () {
        var e_2, _a;
        try {
            for (var _b = __values(this.compatibleDevices), _c = _b.next(); !_c.done; _c = _b.next()) {
                var d = _c.value;
                if (d.selected) {
                    return true;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return false;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    DeviceSelectionComponent.prototype.setAllSelectionsTo = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var e_3, _a;
        try {
            for (var _b = __values(this.compatibleDevices), _c = _b.next(); !_c.done; _c = _b.next()) {
                var d = _c.value;
                d.selected = val;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    /**
     * @return {?}
     */
    DeviceSelectionComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        var e_4, _a;
        if (this.areDevicesSelected()) {
            /** @type {?} */
            var selectedDevices = [];
            try {
                for (var _b = __values(this.compatibleDevices), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var d = _c.value;
                    if (d.selected) {
                        selectedDevices.push(d.device);
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_4) throw e_4.error; }
            }
            this.devicesSelected.emit(selectedDevices);
            this.errorMessage = '';
        }
        else {
            this.errorMessage = 'No devices selected';
        }
    };
    DeviceSelectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-device-selection',
                    template: "<lib-content-box [title]=\"'Select devices to configure'\" [limitWidth]=\"true\">\r\n  <div class=\"toolbox mb-3\">\r\n    <button class=\"btn btn-secondary\" (click)=\"setAllSelectionsTo(true)\">Select all</button>\r\n    <button class=\"btn btn-secondary\" (click)=\"setAllSelectionsTo(false)\">Unselect all</button>\r\n    <button class=\"btn btn-primary right\">Connect a new device</button>\r\n  </div>\r\n  <div *ngIf=\"compatibleDevices.length > 0\" class=\"row\">\r\n    <div class=\"col-sm-12 col-md-4 pl-3 pr-3 p-2\" *ngFor=\"let device of compatibleDevices\">\r\n      <lib-device-selection-item [device]=\"device.device\"\r\n                                 [(selected)]=\"device.selected\"\r\n      ></lib-device-selection-item>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"compatibleDevices.length === 0\">\r\n    <h2 class=\"text-center\">No compatible devices connected.</h2>\r\n  </div>\r\n  <div class=\"toolbox mt-3\">\r\n    <a routerLink=\"/netconf/tools\" class=\"btn btn-danger\">Cancel</a>\r\n    <button class=\"btn btn-primary right\" (click)=\"submit()\">Configure</button>\r\n  </div>\r\n  <p class=\"error-text text-right\">{{errorMessage}}</p>\r\n</lib-content-box>\r\n<!--<div class=\"box\">\r\n  <div class=\"box-header\">\r\n    Select devices to configure\r\n  </div>\r\n  <div class=\"box-content box-content-limited\">\r\n\r\n  </div>\r\n</div>\r\n-->\r\n",
                    styles: [".btn{margin-right:5px}.box{margin-bottom:10px;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.box-header{background:#008545;width:100%;font-size:1.5rem;border-radius:5px 5px 0 0;color:#fff;padding:5px 10px;text-align:center}.box-content{padding:5px 10px}.box-content-limited{max-width:1200px;margin-left:auto;margin-right:auto}.clickable{cursor:pointer}.clickable::-moz-selection{background:0 0;color:#231f20}.clickable::-moz-selection,.clickable::selection{background:0 0;color:#231f20}.error-text{color:#ee1d23}.checkbox-container{display:block;position:relative;padding-left:35px;margin-bottom:32px;cursor:pointer;font-size:22px;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:150ms ease-in-out}.checkbox-container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkbox-container:hover input~.checkmark{background-color:#00b55d}.checkbox-container input:checked~.checkmark{background-color:#231f20}.checkbox-container input:checked~.checkmark:after{display:block}.checkbox-container .checkmark:after{left:7px;top:-1px;width:12px;height:22px;border:solid #fff;border-width:0 4px 4px 0;border-radius:2px;transform:rotate(45deg)}.checkmark{position:absolute;top:0;left:0;height:32px;width:32px;background-color:#fff;border:3px solid #231f20;border-radius:5px;transition:150ms ease-in-out}.checkmark:after{content:\"\";position:absolute;display:none}.device-selection-title{font-size:1.2em;margin-bottom:0}.device-name{font-weight:700;margin-right:.5rem}.device-item{cursor:pointer;border:2px solid #016d39;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);margin-bottom:0}.hostname{font-size:.8em;white-space:nowrap;display:inline-block;color:rgba(35,31,32,.7)}.toolbox{width:100%}@media only screen and (min-width:600px){.toolbox{display:flex}}.toolbox .right{margin-left:auto}"]
                }] }
    ];
    DeviceSelectionComponent.ctorParameters = function () { return [
        { type: DeviceService }
    ]; };
    DeviceSelectionComponent.propDecorators = {
        schemaFilter: [{ type: Input }],
        devicesSelected: [{ type: Output }]
    };
    return DeviceSelectionComponent;
}());

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
var DeviceSelectionItemComponent = /** @class */ (function () {
    function DeviceSelectionItemComponent() {
        this.selectedChange = new EventEmitter();
        this.compatibleDevices = [];
    }
    /**
     * @return {?}
     */
    DeviceSelectionItemComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    DeviceSelectionItemComponent.prototype.changeSelection = /**
     * @return {?}
     */
    function () {
        this.selectedChange.emit(!this.selected);
    };
    DeviceSelectionItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-device-selection-item',
                    template: "<div class=\"container-fluid device-item clickable\" (click)=\"changeSelection()\">\r\n  <div class=\"row p-2\">\r\n    <div class=\"col-sm-9 col-md-10\">\r\n      <p class=\"device-selection-title\">\r\n        <span class=\"device-name\"> {{device.hostname}}:{{device.port}}</span>\r\n        <span class=\"hostname\" *ngIf=\"device.name\">{{device.name}}</span>\r\n      </p>\r\n      <p class=\"mb-0\">{{device.username}}</p>\r\n    </div>\r\n    <div class=\"col-sm-3 col-md-2\">\r\n      <label class=\"checkbox-container\">\r\n        <input type=\"checkbox\" [checked]=\"selected\" (change)=\"changeSelection(); $event.stopPropagation()\">\r\n        <span class=\"checkmark\"></span>\r\n      </label>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n",
                    styles: [".btn{margin-right:5px}.box{margin-bottom:10px;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.box-header{background:#008545;width:100%;font-size:1.5rem;border-radius:5px 5px 0 0;color:#fff;padding:5px 10px;text-align:center}.box-content{padding:5px 10px}.box-content-limited{max-width:1200px;margin-left:auto;margin-right:auto}.clickable{cursor:pointer}.clickable::-moz-selection{background:0 0;color:#231f20}.clickable::-moz-selection,.clickable::selection{background:0 0;color:#231f20}.error-text{color:#ee1d23}.checkbox-container{display:block;position:relative;padding-left:35px;margin-bottom:32px;cursor:pointer;font-size:22px;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:150ms ease-in-out}.checkbox-container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkbox-container:hover input~.checkmark{background-color:#00b55d}.checkbox-container input:checked~.checkmark{background-color:#231f20}.checkbox-container input:checked~.checkmark:after{display:block}.checkbox-container .checkmark:after{left:7px;top:-1px;width:12px;height:22px;border:solid #fff;border-width:0 4px 4px 0;border-radius:2px;transform:rotate(45deg)}.checkmark{position:absolute;top:0;left:0;height:32px;width:32px;background-color:#fff;border:3px solid #231f20;border-radius:5px;transition:150ms ease-in-out}.checkmark:after{content:\"\";position:absolute;display:none}.device-selection-title{font-size:1.2em;margin-bottom:0}.device-name{font-weight:700;margin-right:.5rem}.device-item{cursor:pointer;border:2px solid #016d39;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);margin-bottom:0}.hostname{font-size:.8em;white-space:nowrap;display:inline-block;color:rgba(35,31,32,.7)}.toolbox{width:100%}@media only screen and (min-width:600px){.toolbox{display:flex}}.toolbox .right{margin-left:auto}"]
                }] }
    ];
    DeviceSelectionItemComponent.ctorParameters = function () { return []; };
    DeviceSelectionItemComponent.propDecorators = {
        device: [{ type: Input }],
        selected: [{ type: Input }],
        selectedChange: [{ type: Output }]
    };
    return DeviceSelectionItemComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/content-box.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ContentBoxComponent = /** @class */ (function () {
    function ContentBoxComponent() {
        this.title = '';
        this.limitWidth = false;
    }
    /**
     * @return {?}
     */
    ContentBoxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    ContentBoxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-content-box',
                    template: "\n    <div class=\"content-box\">\n      <div class=\"box-header\" *ngIf=\"title\">{{title}}</div>\n      <div class=\"box-content\" [class.box-content-limited]=\"limitWidth\">\n          <ng-content></ng-content>\n      </div>\n    </div>\n  ",
                    styles: [".content-box{margin-bottom:10px;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.box-header{background:#008545;width:100%;font-size:1.5rem;border-radius:5px 5px 0 0;color:#fff;padding:5px 10px;text-align:center}.box-content{padding:5px 10px}.box-content-limited{max-width:1200px;margin-left:auto;margin-right:auto}"]
                }] }
    ];
    ContentBoxComponent.ctorParameters = function () { return []; };
    ContentBoxComponent.propDecorators = {
        title: [{ type: Input }],
        limitWidth: [{ type: Input }]
    };
    return ContentBoxComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/popup.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PopupComponent = /** @class */ (function () {
    function PopupComponent() {
        this.title = '';
        this.toolbox = true;
        this.submitBtnText = 'Submit';
        this.canceled = new EventEmitter();
        this.submitted = new EventEmitter();
    }
    /**
     * @return {?}
     */
    PopupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    PopupComponent.prototype.cancel = /**
     * @return {?}
     */
    function () {
        this.canceled.emit(true);
    };
    /**
     * @return {?}
     */
    PopupComponent.prototype.submit = /**
     * @return {?}
     */
    function () {
        this.submitted.emit(true);
    };
    PopupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-nc-popup',
                    template: "\n    <div class=\"popup-wrapper\">\n      <div class=\"popup-content\">\n        <div *ngIf=\"title !== ''\" class=\"popup-header\">{{title}}</div>\n        <ng-content></ng-content>\n        <div class=\"popup-toolbox\" *ngIf=\"toolbox\">\n          <button class=\"btn btn-danger\" (click)=\"cancel()\">Cancel</button>\n          <button class=\"btn btn-primary float-right\" (click)=\"submit()\">{{submitBtnText}}</button>\n        </div>\n      </div>\n    </div>\n  ",
                    styles: [".popup-wrapper{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.7);z-index:9999}.popup-content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:100vw;max-height:100vh;overflow:auto;padding:10px;background:#fff;border:3px solid #fff;border-radius:5px}.popup-header{width:calc(100% + 20px);margin:-10px -10px 10px;background:#008545;color:#fff;border-radius:5px 5px 0 0;padding:5px;font-size:1.3rem;text-align:center}.popup-toolbox{background:#fafafa;width:calc(100% + 20px);margin:10px -10px -20px;padding:10px}"]
                }] }
    ];
    PopupComponent.ctorParameters = function () { return []; };
    PopupComponent.propDecorators = {
        title: [{ type: Input }],
        toolbox: [{ type: Input }],
        submitBtnText: [{ type: Input }],
        canceled: [{ type: Output }],
        submitted: [{ type: Output }]
    };
    return PopupComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/netconf-lib.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var sharedComponents = [
    NetconfLibComponent,
    DeviceQuickswitchComponent,
    DeviceSelectionComponent,
    DeviceSelectionItemComponent,
    ContentBoxComponent,
    PopupComponent
];
var NetconfLibModule = /** @class */ (function () {
    function NetconfLibModule() {
    }
    NetconfLibModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule, HttpClientModule],
                    declarations: __spread(sharedComponents),
                    exports: __spread(sharedComponents),
                    providers: [
                        DeviceService
                    ]
                },] }
    ];
    return NetconfLibModule;
}());

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

export { NetconfLibService, ConfigurationService, DeviceService, SessionService, NetconfLibModule, ContentBoxComponent as ɵe, DeviceQuickswitchComponent as ɵb, DeviceSelectionComponent as ɵc, PopupComponent as ɵf, DeviceSelectionItemComponent as ɵd, NetconfLibComponent as ɵa };

//# sourceMappingURL=netconf-lib.js.map
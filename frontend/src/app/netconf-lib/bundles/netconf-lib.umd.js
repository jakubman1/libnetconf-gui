(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/router'), require('rxjs/operators'), require('@angular/core'), require('@angular/common/http')) :
    typeof define === 'function' && define.amd ? define('netconf-lib', ['exports', '@angular/common', '@angular/router', 'rxjs/operators', '@angular/core', '@angular/common/http'], factory) :
    (factory((global['netconf-lib'] = {}),global.ng.common,global.ng.router,global.rxjs.operators,global.ng.core,global.ng.common.http));
}(this, (function (exports,common,router,operators,i0,i1) { 'use strict';

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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ ConfigurationService.ngInjectableDef = i0.defineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(); }, token: ConfigurationService, providedIn: "root" });
        return ConfigurationService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/netconf-lib.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // export * from './services/device.service';
    // export * from './services/session.service';
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        NetconfLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ NetconfLibService.ngInjectableDef = i0.defineInjectable({ factory: function NetconfLibService_Factory() { return new NetconfLibService(); }, token: NetconfLibService, providedIn: "root" });
        return NetconfLibService;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

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
            { type: i0.Component, args: [{
                        selector: 'lib-nc',
                        template: "\n    <p>\n      netconf-lib works!\n    </p>\n  "
                    }] }
        ];
        NetconfLibComponent.ctorParameters = function () { return []; };
        return NetconfLibComponent;
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
            this.connectedDevicesChanged = new i0.EventEmitter();
        }
        Object.defineProperty(DeviceService.prototype, "connectedDevices", {
            get: /**
             * @return {?}
             */ function () {
                return this._connectedDevices;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
                if (deviceName === void 0) {
                    deviceName = '';
                }
                if (password === void 0) {
                    password = '';
                }
                if (connect === void 0) {
                    connect = false;
                }
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
                    this.connectToDevice(dev).subscribe(); // TODO: Show 'now connecting' modal window
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
        DeviceService.decorators = [
            { type: i0.Injectable }
        ];
        DeviceService.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        return DeviceService;
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
            { type: i0.Component, args: [{
                        selector: 'lib-device-quickswitch',
                        template: "\n    <p>\n      tbd\n    </p>\n  "
                    }] }
        ];
        DeviceQuickswitchComponent.ctorParameters = function () {
            return [
                { type: DeviceService }
            ];
        };
        DeviceQuickswitchComponent.propDecorators = {
            schemaFilter: [{ type: i0.Input }],
            vertical: [{ type: i0.Input }]
        };
        return DeviceQuickswitchComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/session.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SessionService = /** @class */ (function () {
        function SessionService(http) {
            this.http = http;
            this._sessions = [];
            this.sessionsChanged = new i0.EventEmitter();
            console.log('CONSTRUCTOR OF SESSION SERVICE CALLED');
        }
        Object.defineProperty(SessionService.prototype, "sessions", {
            get: /**
             * @return {?}
             */ function () {
                console.log('Getting sessions');
                console.log(this._sessions);
                return this._sessions;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                console.log('Setting sessions');
                console.log(value);
                this._sessions = value;
                this.sessionsChanged.emit(value);
            },
            enumerable: true,
            configurable: true
        });
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
                    /** @type {?} */
                    var sessions = this.sessions;
                    sessions.push({
                        key: key, device: device
                    });
                    this.sessions = sessions;
                }
                else {
                    /** @type {?} */
                    var idx = this.findSessionIndex(key);
                    this._sessions[idx].device = device;
                    this.sessionsChanged.emit(this.sessions);
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
                return this.http.delete('/netconf/session/' + key)
                    .pipe(operators.tap(( /**
             * @param {?} next
             * @return {?}
             */function (next) {
                    _this._sessions.splice(idx, 1);
                    _this.sessionsChanged.emit(_this.sessions);
                })));
            };
        /**
         * @return {?}
         */
        SessionService.prototype.loadOpenSessions = /**
         * @return {?}
         */
            function () {
                return this.http.get('/netconf/sessions');
            };
        /**
         * @return {?}
         */
        SessionService.prototype.destroyAllSessions = /**
         * @return {?}
         */
            function () {
                return this.http.delete('/netconf/sessions');
            };
        /**
         *  Check if session exists on the server.
         */
        /**
         *  Check if session exists on the server.
         * @param {?} key
         * @return {?}
         */
        SessionService.prototype.sessionAlive = /**
         *  Check if session exists on the server.
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
                    for (var _b = __values(this._sessions), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var session = _c.value;
                        if (session.key === key) {
                            return true;
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
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
                return this._sessions.findIndex(( /**
                 * @param {?} s
                 * @return {?}
                 */function (s) { return s.key === key; }));
            };
        /**
         * Filter is xpath (?)
         */
        /**
         * Filter is xpath (?)
         * @param {?} filter
         * @return {?}
         */
        SessionService.prototype.getCompatibleDeviceSessions = /**
         * Filter is xpath (?)
         * @param {?} filter
         * @return {?}
         */
            function (filter) {
                // TODO: Filter
                console.log('Getting compatible sessions');
                console.log(this.sessions);
                return this.sessions;
            };
        SessionService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        SessionService.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ SessionService.ngInjectableDef = i0.defineInjectable({ factory: function SessionService_Factory() { return new SessionService(i0.inject(i1.HttpClient)); }, token: SessionService, providedIn: "root" });
        return SessionService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/device-selection.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DeviceSelectionComponent = /** @class */ (function () {
        function DeviceSelectionComponent(sessionService) {
            this.sessionService = sessionService;
            this.schemaFilter = '';
            this.devicesSelected = new i0.EventEmitter();
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
                this.reload();
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
                var e_1, _a;
                try {
                    for (var _b = __values(this.compatibleDevices), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var d = _c.value;
                        if (d.selected) {
                            return true;
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
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
                var e_2, _a;
                try {
                    for (var _b = __values(this.compatibleDevices), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var d = _c.value;
                        d.selected = val;
                    }
                }
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
                }
            };
        /**
         * @return {?}
         */
        DeviceSelectionComponent.prototype.submit = /**
         * @return {?}
         */
            function () {
                var e_3, _a;
                if (this.areDevicesSelected()) {
                    /** @type {?} */
                    var selectedDevices = [];
                    try {
                        for (var _b = __values(this.compatibleDevices), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var d = _c.value;
                            if (d.selected) {
                                selectedDevices.push(d.session);
                            }
                        }
                    }
                    catch (e_3_1) {
                        e_3 = { error: e_3_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_3)
                                throw e_3.error;
                        }
                    }
                    this.devicesSelected.emit(selectedDevices);
                    this.errorMessage = '';
                }
                else {
                    this.errorMessage = 'No devices selected';
                }
            };
        /**
         * @return {?}
         */
        DeviceSelectionComponent.prototype.reload = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var e_4, _a;
                // const sessions = this.sessionService.getCompatibleDeviceSessions('');
                /** @type {?} */
                var sessions = this.sessionService.sessions;
                this.sessionService.sessionsChanged.subscribe(( /**
                 * @param {?} ses
                 * @return {?}
                 */function (ses) {
                    var e_5, _a;
                    try {
                        for (var ses_1 = __values(ses), ses_1_1 = ses_1.next(); !ses_1_1.done; ses_1_1 = ses_1.next()) {
                            var s = ses_1_1.value;
                            _this.compatibleDevices.push({ session: s, selected: true });
                        }
                    }
                    catch (e_5_1) {
                        e_5 = { error: e_5_1 };
                    }
                    finally {
                        try {
                            if (ses_1_1 && !ses_1_1.done && (_a = ses_1.return))
                                _a.call(ses_1);
                        }
                        finally {
                            if (e_5)
                                throw e_5.error;
                        }
                    }
                }));
                try {
                    for (var sessions_1 = __values(sessions), sessions_1_1 = sessions_1.next(); !sessions_1_1.done; sessions_1_1 = sessions_1.next()) {
                        var s = sessions_1_1.value;
                        this.compatibleDevices.push({ session: s, selected: true });
                    }
                }
                catch (e_4_1) {
                    e_4 = { error: e_4_1 };
                }
                finally {
                    try {
                        if (sessions_1_1 && !sessions_1_1.done && (_a = sessions_1.return))
                            _a.call(sessions_1);
                    }
                    finally {
                        if (e_4)
                            throw e_4.error;
                    }
                }
            };
        DeviceSelectionComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-device-selection',
                        template: "<lib-content-box [title]=\"'Select devices to configure'\" [limitWidth]=\"true\">\r\n  <div class=\"toolbox mb-3\">\r\n    <button class=\"btn btn-secondary\" (click)=\"setAllSelectionsTo(true)\">Select all</button>\r\n    <button class=\"btn btn-secondary\" (click)=\"setAllSelectionsTo(false)\">Unselect all</button>\r\n    <button class=\"btn btn-secondary\" (click)=\"reload()\">Reload device list</button>\r\n    <button class=\"btn btn-primary right\">Connect a new device</button>\r\n  </div>\r\n  <div *ngIf=\"compatibleDevices.length > 0\" class=\"row\">\r\n    <div class=\"col-sm-12 col-md-4 pl-3 pr-3 p-2\" *ngFor=\"let session of compatibleDevices\">\r\n      <lib-device-selection-item [device]=\"session.session.device\"\r\n                                 [(selected)]=\"session.selected\"\r\n      ></lib-device-selection-item>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"compatibleDevices.length === 0\">\r\n    <h2 class=\"text-center\">No compatible devices connected.</h2>\r\n  </div>\r\n  <div class=\"toolbox mt-3\">\r\n    <a routerLink=\"/netconf/tools\" class=\"btn btn-danger\">Cancel</a>\r\n    <button class=\"btn btn-primary right\" (click)=\"submit()\">Configure</button>\r\n  </div>\r\n  <p class=\"error-text text-right\">{{errorMessage}}</p>\r\n</lib-content-box>\r\n<!--<div class=\"box\">\r\n  <div class=\"box-header\">\r\n    Select devices to configure\r\n  </div>\r\n  <div class=\"box-content box-content-limited\">\r\n\r\n  </div>\r\n</div>\r\n-->\r\n",
                        styles: [".btn{margin-right:5px}.box{margin-bottom:10px;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.box-header{background:#008545;width:100%;font-size:1.5rem;border-radius:5px 5px 0 0;color:#fff;padding:5px 10px;text-align:center}.box-content{padding:5px 10px}.box-content-limited{max-width:1200px;margin-left:auto;margin-right:auto}.clickable{cursor:pointer}.clickable::-moz-selection{background:0 0;color:#231f20}.clickable::-moz-selection,.clickable::selection{background:0 0;color:#231f20}.error-text{color:#ee1d23}.checkbox-container{display:block;position:relative;padding-left:35px;margin-bottom:32px;cursor:pointer;font-size:22px;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:150ms ease-in-out}.checkbox-container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkbox-container:hover input~.checkmark{background-color:#00b55d}.checkbox-container input:checked~.checkmark{background-color:#231f20}.checkbox-container input:checked~.checkmark:after{display:block}.checkbox-container .checkmark:after{left:7px;top:-1px;width:12px;height:22px;border:solid #fff;border-width:0 4px 4px 0;border-radius:2px;transform:rotate(45deg)}.checkmark{position:absolute;top:0;left:0;height:32px;width:32px;background-color:#fff;border:3px solid #231f20;border-radius:5px;transition:150ms ease-in-out}.checkmark:after{content:\"\";position:absolute;display:none}.device-selection-title{font-size:1.2em;margin-bottom:0}.device-name{font-weight:700;margin-right:.5rem}.device-item{cursor:pointer;border:2px solid #016d39;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);margin-bottom:0}.hostname{font-size:.8em;white-space:nowrap;display:inline-block;color:rgba(35,31,32,.7)}.toolbox{width:100%}@media only screen and (min-width:600px){.toolbox{display:flex}}.toolbox .right{margin-left:auto}"]
                    }] }
        ];
        DeviceSelectionComponent.ctorParameters = function () {
            return [
                { type: SessionService }
            ];
        };
        DeviceSelectionComponent.propDecorators = {
            schemaFilter: [{ type: i0.Input }],
            devicesSelected: [{ type: i0.Output }]
        };
        return DeviceSelectionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/subcomponents/device-selection-item.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DeviceSelectionItemComponent = /** @class */ (function () {
        function DeviceSelectionItemComponent() {
            this.selectedChange = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'lib-device-selection-item',
                        template: "<div class=\"container-fluid device-item clickable\" (click)=\"changeSelection()\">\r\n  <div class=\"row p-2\">\r\n    <div class=\"col-sm-9 col-md-10\">\r\n      <p class=\"device-selection-title\">\r\n        <span class=\"device-name\"> {{device.hostname}}:{{device.port}}</span>\r\n        <span class=\"hostname\" *ngIf=\"device.name\">{{device.name}}</span>\r\n      </p>\r\n      <p class=\"mb-0\">{{device.username}}</p>\r\n    </div>\r\n    <div class=\"col-sm-3 col-md-2\">\r\n      <label class=\"checkbox-container\">\r\n        <input type=\"checkbox\" [checked]=\"selected\" (change)=\"changeSelection(); $event.stopPropagation()\">\r\n        <span class=\"checkmark\"></span>\r\n      </label>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n",
                        styles: [".btn{margin-right:5px}.box{margin-bottom:10px;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.box-header{background:#008545;width:100%;font-size:1.5rem;border-radius:5px 5px 0 0;color:#fff;padding:5px 10px;text-align:center}.box-content{padding:5px 10px}.box-content-limited{max-width:1200px;margin-left:auto;margin-right:auto}.clickable{cursor:pointer}.clickable::-moz-selection{background:0 0;color:#231f20}.clickable::-moz-selection,.clickable::selection{background:0 0;color:#231f20}.error-text{color:#ee1d23}.checkbox-container{display:block;position:relative;padding-left:35px;margin-bottom:32px;cursor:pointer;font-size:22px;line-height:1;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:150ms ease-in-out}.checkbox-container input{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.checkbox-container:hover input~.checkmark{background-color:#00b55d}.checkbox-container input:checked~.checkmark{background-color:#231f20}.checkbox-container input:checked~.checkmark:after{display:block}.checkbox-container .checkmark:after{left:7px;top:-1px;width:12px;height:22px;border:solid #fff;border-width:0 4px 4px 0;border-radius:2px;transform:rotate(45deg)}.checkmark{position:absolute;top:0;left:0;height:32px;width:32px;background-color:#fff;border:3px solid #231f20;border-radius:5px;transition:150ms ease-in-out}.checkmark:after{content:\"\";position:absolute;display:none}.device-selection-title{font-size:1.2em;margin-bottom:0}.device-name{font-weight:700;margin-right:.5rem}.device-item{cursor:pointer;border:2px solid #016d39;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);margin-bottom:0}.hostname{font-size:.8em;white-space:nowrap;display:inline-block;color:rgba(35,31,32,.7)}.toolbox{width:100%}@media only screen and (min-width:600px){.toolbox{display:flex}}.toolbox .right{margin-left:auto}"]
                    }] }
        ];
        DeviceSelectionItemComponent.ctorParameters = function () { return []; };
        DeviceSelectionItemComponent.propDecorators = {
            device: [{ type: i0.Input }],
            selected: [{ type: i0.Input }],
            selectedChange: [{ type: i0.Output }]
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
            { type: i0.Component, args: [{
                        selector: 'lib-content-box',
                        template: "\n    <div class=\"content-box\">\n      <div class=\"box-header\" *ngIf=\"title\">{{title}}</div>\n      <div class=\"box-content\" [class.box-content-limited]=\"limitWidth\">\n          <ng-content></ng-content>\n      </div>\n    </div>\n  ",
                        styles: [".content-box{margin-bottom:10px;background:#fff;border-radius:5px;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23)}.box-header{background:#008545;width:100%;font-size:1.5rem;border-radius:5px 5px 0 0;color:#fff;padding:5px 10px;text-align:center}.box-content{padding:5px 10px}.box-content-limited{max-width:1200px;margin-left:auto;margin-right:auto}"]
                    }] }
        ];
        ContentBoxComponent.ctorParameters = function () { return []; };
        ContentBoxComponent.propDecorators = {
            title: [{ type: i0.Input }],
            limitWidth: [{ type: i0.Input }]
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
            this.canceled = new i0.EventEmitter();
            this.submitted = new i0.EventEmitter();
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
            { type: i0.Component, args: [{
                        selector: 'lib-nc-popup',
                        template: "\n    <div class=\"popup-wrapper\">\n      <div class=\"popup-content\">\n        <div *ngIf=\"title !== ''\" class=\"popup-header\">{{title}}</div>\n        <ng-content></ng-content>\n        <div class=\"popup-toolbox\" *ngIf=\"toolbox\">\n          <button class=\"btn btn-danger\" (click)=\"cancel()\">Cancel</button>\n          <button class=\"btn btn-primary float-right\" (click)=\"submit()\">{{submitBtnText}}</button>\n        </div>\n      </div>\n    </div>\n  ",
                        styles: [".popup-wrapper{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.7);z-index:9999}.popup-content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:100vw;max-height:100vh;overflow:auto;padding:10px;background:#fff;border:3px solid #fff;border-radius:5px}.popup-header{width:calc(100% + 20px);margin:-10px -10px 10px;background:#008545;color:#fff;border-radius:5px 5px 0 0;padding:5px;font-size:1.3rem;text-align:center}.popup-toolbox{background:#fafafa;width:calc(100% + 20px);margin:10px -10px -20px;padding:10px}"]
                    }] }
        ];
        PopupComponent.ctorParameters = function () { return []; };
        PopupComponent.propDecorators = {
            title: [{ type: i0.Input }],
            toolbox: [{ type: i0.Input }],
            submitBtnText: [{ type: i0.Input }],
            canceled: [{ type: i0.Output }],
            submitted: [{ type: i0.Output }]
        };
        return PopupComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/schemas.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SchemasService = /** @class */ (function () {
        function SchemasService(http) {
            this.http = http;
        }
        /**
         * @param {?} message
         * @return {?}
         */
        SchemasService.newlineToBr = /**
         * @param {?} message
         * @return {?}
         */
            function (message) {
                /** @type {?} */
                var entityMap = {
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    '"': '&quot;',
                    '\'': '&#39;',
                    '/': '&#x2F;'
                };
                return message.replace(/[&<>"'\/]/g, ( /**
                 * @param {?} s
                 * @return {?}
                 */function (s) { return entityMap[s]; })).replace(/\n/g, '<br>');
            };
        /**
         * @return {?}
         */
        SchemasService.prototype.getSchemaNames = /**
         * @return {?}
         */
            function () {
                return this.http.get('/netconf/schemas');
            };
        /**
         * @param {?} schemaName
         * @return {?}
         */
        SchemasService.prototype.getSchema = /**
         * @param {?} schemaName
         * @return {?}
         */
            function (schemaName) {
                return this.http.get('/netconf/schema/' + schemaName);
            };
        SchemasService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        SchemasService.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ SchemasService.ngInjectableDef = i0.defineInjectable({ factory: function SchemasService_Factory() { return new SchemasService(i0.inject(i1.HttpClient)); }, token: SchemasService, providedIn: "root" });
        return SchemasService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/schema-list/schema-list.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SchemaListComponent = /** @class */ (function () {
        function SchemaListComponent(schemasService) {
            this.schemasService = schemasService;
            this.loading = false;
            this.error = '';
            this.schemas = [];
        }
        /**
         * @return {?}
         */
        SchemaListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.loading = true;
                this.schemasService.getSchemaNames().subscribe(( /**
                 * @param {?} names
                 * @return {?}
                 */function (names) {
                    _this.schemas = names;
                    _this.loading = false;
                }), ( /**
                 * @param {?} err
                 * @return {?}
                 */function (err) {
                    _this.error = err.message;
                    _this.loading = false;
                }));
            };
        SchemaListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-schema-list',
                        template: "<div *ngIf=\"!loading\">\n  <p class=\"text-danger\" *ngIf=\"error\">{{error}}</p>\n  <p>Click on schema name to view detail</p>\n  <ul>\n    <li *ngFor=\"let schema of schemas\">\n      <a class=\"schema-link\" title=\"View detail\"\n         [routerLink]=\"['..', 'tool','yang-explorer',{'schema': schema}]\">{{schema}}</a>\n    </li>\n  </ul>\n</div>\n",
                        styles: [".schema-link{font-family:\"JetBrains Mono\",\"Source Code Pro\",Consolas,monospace;color:#231f20;text-decoration:none}.schema-link:hover{text-decoration:underline;color:#0068a2}"]
                    }] }
        ];
        SchemaListComponent.ctorParameters = function () {
            return [
                { type: SchemasService }
            ];
        };
        return SchemaListComponent;
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
        PopupComponent,
        SchemaListComponent
    ];
    var NetconfLibModule = /** @class */ (function () {
        function NetconfLibModule() {
        }
        NetconfLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            router.RouterModule,
                            i1.HttpClientModule
                        ],
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

    exports.NetconfLibService = NetconfLibService;
    exports.ConfigurationService = ConfigurationService;
    exports.NetconfLibModule = NetconfLibModule;
    exports.SessionService = SessionService;
    exports.DeviceService = DeviceService;
    exports.SchemasService = SchemasService;
    exports.ɵe = ContentBoxComponent;
    exports.ɵb = DeviceQuickswitchComponent;
    exports.ɵc = DeviceSelectionComponent;
    exports.ɵf = PopupComponent;
    exports.ɵg = SchemaListComponent;
    exports.ɵd = DeviceSelectionItemComponent;
    exports.ɵa = NetconfLibComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=netconf-lib.umd.js.map
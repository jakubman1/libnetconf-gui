!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("ng.common"),require("ng.router"),require("netconf-lib"),require("ng.http"),require("ng.core")):"function"==typeof define&&define.amd?define(["ng.common","ng.router","netconf-lib","ng.http","ng.core"],e):"object"==typeof exports?exports.example=e(require("ng.common"),require("ng.router"),require("netconf-lib"),require("ng.http"),require("ng.core")):n.example=e(n["ng.common"],n["ng.router"],n["netconf-lib"],n["ng.http"],n["ng.core"])}("undefined"!=typeof self?self:this,function(n,e,t,l,o){return function(n){var e={};function t(l){if(e[l])return e[l].exports;var o=e[l]={i:l,l:!1,exports:{}};return n[l].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,l){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:l})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(l,o,(function(e){return n[e]}).bind(null,o));return l},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}({0:function(n,e,t){n.exports=t("zUnb")},"0S4P":function(e,t){e.exports=n},JAnZ:function(n,t){n.exports=e},R1hx:function(n,e){n.exports=t},jyyq:function(n,e){n.exports=l},vOrQ:function(n,e){n.exports=o},zUnb:function(n,e,t){"use strict";t.r(e);var l=t("vOrQ"),o=t("R1hx"),u=function(){function n(n,e){this.libService=n,this.sessionService=e,this.x=!1,this.serviceText="Loading service...",this.sessions=[]}return n.prototype.ngOnInit=function(){this.serviceText=this.libService.provideExample(),console.log("FROM EXAMPLE COMPONENT")},n.prototype.onDevicesSelected=function(n){this.sessions=n},n}(),r=function(){function n(){}return n.entry=u,n}(),i=t("JAnZ"),c=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function p(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),l["\u0275did"](1,212992,null,0,i.RouterOutlet,[i.ChildrenOutletContexts,l.ViewContainerRef,l.ComponentFactoryResolver,[8,null],l.ChangeDetectorRef],null,null)],function(n,e){n(e,1,0)},null)}var a=l["\u0275ccf"]("ng-component",i["\u0275EmptyOutletComponent"],function(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,p,c)),l["\u0275did"](1,49152,null,0,i["\u0275EmptyOutletComponent"],[],null,null)],null,null)},{},{},[]),d=t("0S4P"),s=l["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]{width:100%}"]],data:{}});function f(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"lib-device-selection",[],null,[[null,"devicesSelected"]],function(n,e,t){var l=!0;return"devicesSelected"===e&&(l=!1!==n.component.onDevicesSelected(t)&&l),l},o["View_\u0275c_0"],o["RenderType_\u0275c"])),l["\u0275did"](1,114688,null,0,o["\u0275c"],[o.SessionService],null,{devicesSelected:"devicesSelected"})],function(n,e){n(e,1,0)},null)}function m(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["s"]))],null,null)}function _(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,8,"lib-content-box",[["title","Example tool"]],null,null,null,o["View_\u0275e_0"],o["RenderType_\u0275e"])),l["\u0275did"](1,114688,null,0,o["\u0275e"],[],{title:[0,"title"]},null),(n()(),l["\u0275eld"](2,0,null,0,4,"h1",[],null,null,null,null,null)),(n()(),l["\u0275ted"](3,null,[""," device"])),(n()(),l["\u0275and"](16777216,null,null,1,null,m)),l["\u0275did"](5,16384,null,0,d.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275ted"](-1,null,[" selected."])),(n()(),l["\u0275eld"](7,0,null,0,1,"h2",[],null,null,null,null,null)),(n()(),l["\u0275ted"](8,null,["",""]))],function(n,e){var t=e.component;n(e,1,0,"Example tool"),n(e,5,0,1!==t.sessions.length)},function(n,e){var t=e.component;n(e,3,0,t.sessions.length),n(e,8,0,t.serviceText)})}function g(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,4,"div",[["class","tool-wrapper"]],null,null,null,null,null)),(n()(),l["\u0275and"](16777216,null,null,1,null,f)),l["\u0275did"](2,16384,null,0,d.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275and"](16777216,null,null,1,null,_)),l["\u0275did"](4,16384,null,0,d.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){var t=e.component;n(e,2,0,0===t.sessions.length),n(e,4,0,t.sessions.length>0)},null)}var h=l["\u0275ccf"]("app-example-tool",u,function(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"app-example-tool",[],null,null,null,g,s)),l["\u0275did"](1,114688,null,0,u,[o.NetconfLibService,o.SessionService],null,null)],function(n,e){n(e,1,0)},null)},{},{},[]),v=t("jyyq"),y=l["\u0275cmf"](r,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[a,h]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[l.LOCALE_ID,[2,d["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,v.HttpXsrfTokenExtractor,v["\u0275angular_packages_common_http_http_g"],[d.DOCUMENT,l.PLATFORM_ID,v["\u0275angular_packages_common_http_http_e"]]),l["\u0275mpd"](4608,v["\u0275angular_packages_common_http_http_h"],v["\u0275angular_packages_common_http_http_h"],[v.HttpXsrfTokenExtractor,v["\u0275angular_packages_common_http_http_f"]]),l["\u0275mpd"](5120,v.HTTP_INTERCEPTORS,function(n){return[n]},[v["\u0275angular_packages_common_http_http_h"]]),l["\u0275mpd"](4608,v["\u0275angular_packages_common_http_http_d"],v["\u0275angular_packages_common_http_http_d"],[]),l["\u0275mpd"](6144,v.XhrFactory,null,[v["\u0275angular_packages_common_http_http_d"]]),l["\u0275mpd"](4608,v.HttpXhrBackend,v.HttpXhrBackend,[v.XhrFactory]),l["\u0275mpd"](6144,v.HttpBackend,null,[v.HttpXhrBackend]),l["\u0275mpd"](4608,v.HttpHandler,v["\u0275HttpInterceptingHandler"],[v.HttpBackend,l.Injector]),l["\u0275mpd"](4608,v.HttpClient,v.HttpClient,[v.HttpHandler]),l["\u0275mpd"](4608,o.DeviceService,o.DeviceService,[v.HttpClient]),l["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),l["\u0275mpd"](1073742336,v.HttpClientXsrfModule,v.HttpClientXsrfModule,[]),l["\u0275mpd"](1073742336,v.HttpClientModule,v.HttpClientModule,[]),l["\u0275mpd"](1073742336,i.RouterModule,i.RouterModule,[[2,i["\u0275angular_packages_router_router_a"]],[2,i.Router]]),l["\u0275mpd"](1073742336,o.NetconfLibModule,o.NetconfLibModule,[]),l["\u0275mpd"](1073742336,r,r,[]),l["\u0275mpd"](256,v["\u0275angular_packages_common_http_http_e"],"XSRF-TOKEN",[]),l["\u0275mpd"](256,v["\u0275angular_packages_common_http_http_f"],"X-XSRF-TOKEN",[])])});t.d(e,"ExampleModule",function(){return r}),t.d(e,"ExampleModuleNgFactory",function(){return y}),e.default=y}})});
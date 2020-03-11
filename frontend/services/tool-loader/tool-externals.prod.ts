import * as core from '@angular/core';
import * as common from '@angular/common';
import * as forms from '@angular/forms';
import * as router from '@angular/router';
import * as rxjs from 'rxjs';
import * as tslib from 'tslib';
//import * as lib from 'netconf-lib';


export const TOOL_EXTERNALS_MAP = {
    'ng.core': core,
    'ng.common': common,
    'ng.forms': forms,
    'ng.router': router,
    rxjs,
    tslib,
    //shared: { ...lib, ...require('lib/lib.ngfactory') }
};

declare let require: any;

import * as core from '@angular/core';
import * as common from '@angular/common';
import * as forms from '@angular/forms';
import * as router from '@angular/router';
import * as rxjs from 'rxjs';
import * as tslib from 'tslib';
import * as socketIo from 'socket.io-client';
import * as http from '@angular/common/http';
import * as lib from '../../netconf-lib';


export const TOOL_EXTERNALS_MAP = {
    'ng.http': http,
    'ng.core': core,
    'ng.common': common,
    'ng.forms': forms,
    'ng.router': router,
    rxjs,
    tslib,
    socketIo,
    netconf_lib: { ...lib, ...require('netconf-lib/netconf-lib.ngfactory') }
};

declare let require: any;

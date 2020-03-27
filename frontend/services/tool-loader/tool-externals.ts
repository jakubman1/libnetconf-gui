import * as core from '@angular/core';
import * as common from '@angular/common';
import * as forms from '@angular/forms';
import * as router from '@angular/router';
import * as socketIo from 'socket.io-client';
import * as rxjs from 'rxjs';
import * as tslib from 'tslib';

export const TOOL_EXTERNALS_MAP = {
    'ng.core': core,
    'ng.common': common,
    'ng.forms': forms,
    'ng.router': router,
    rxjs,
    tslib,
    socketIo,
    netconfLib: '/assets/libnetconf/tools/netconf-lib.js'
};

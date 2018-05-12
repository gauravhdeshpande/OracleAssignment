"use strict";
import Router from './oracle/Utils/Router';
var m = new Router([
    {
        link:'plp.html',
        component:'Plp'
    },
    {
        link:'kdPdp.html',
        component:'Pdp'
    }
]);
m.init();




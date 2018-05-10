"use strict";
import Router from './oracle/Utils/Router';
import Plp from './oracle/Pages/Plp';
import Pdp from './oracle/Pages/Pdp';
var m = new Router([
    {
        link:'plp.html',
        component:Plp
    },
    {
        link:'kdPdp.html',
        component:Pdp
    }
]);
m.init();




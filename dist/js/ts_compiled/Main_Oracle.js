define(["require", "exports", "./oracle/Utils/Router", "./oracle/Pages/Plp", "./oracle/Pages/Pdp"], function (require, exports, Router_1, Plp_1, Pdp_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var m = new Router_1.default([
        {
            link: 'plp.html',
            component: Plp_1.default
        },
        {
            link: 'kdPdp.html',
            component: Pdp_1.default
        }
    ]);
    m.init();
});

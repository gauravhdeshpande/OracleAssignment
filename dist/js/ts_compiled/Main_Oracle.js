define(["require", "exports", "./oracle/Utils/Router"], function (require, exports, Router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var m = new Router_1.default([
        {
            link: 'plp.html',
            component: 'Plp'
        },
        {
            link: 'kdPdp.html',
            component: 'Pdp'
        }
    ]);
    m.init();
});

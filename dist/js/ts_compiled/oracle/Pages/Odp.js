define(["require", "exports", "./BasePage"], function (require, exports, BasePage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Odp extends BasePage_1.default {
        constructor(props) {
            super(props);
            console.log('heya');
            this.setContainer('plp-listing');
        }
    }
    exports.default = Odp;
});

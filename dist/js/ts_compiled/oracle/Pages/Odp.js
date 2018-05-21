define(["require", "exports", "./BasePage", "../Modules/odp_template"], function (require, exports, BasePage_1, odp_template_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Odp extends BasePage_1.default {
        constructor(props) {
            super(props);
            this.makeCart = () => {
                let obj = [];
                if (window.sessionStorage) {
                    let count = window.sessionStorage.length;
                    while (count--) {
                        let s = window.sessionStorage.key(count);
                        let [key, id] = s.match(/item_(\d)*/);
                        if (id) {
                            obj.push({
                                id: id,
                                count: window.sessionStorage.getItem(s)
                            });
                        }
                    }
                    console.log("JOJO", obj);
                }
                else {
                    //If no sessionStorage support
                    obj = [{}, {}];
                }
                return obj;
            };
            this.setContainer('odp-listing');
            this.cart = this.makeCart();
            this.templateObj = new odp_template_1.default();
            this.template = `What is this?`;
            this.render();
        }
    }
    exports.default = Odp;
});

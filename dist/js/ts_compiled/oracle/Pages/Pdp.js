define(["require", "exports", "./BasePage", "../Utils/Ajax", "../Modules/pdp_template"], function (require, exports, BasePage_1, Ajax_1, pdp_template_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Pdp extends BasePage_1.default {
        constructor(args) {
            super(args);
            this.ajaxSuccess = (data) => {
                this.json = data.json;
                this.colorCodes = {};
                data.colors.map((el) => {
                    this.colorCodes[el.name] = el.code;
                });
                this.setTemplate();
                this.render();
            };
            this.ajaxFailure = (err) => {
            };
            this.clickHanlder = (event) => {
            };
            this.setContainer('pdp');
            document.getElementById('pdp').addEventListener("click", this.clickHanlder);
            if (this.getParams.id) {
                Ajax_1.default.getFromUrl('/product-details', this.getParams.id).then(this.ajaxSuccess, this.ajaxFailure);
            }
        }
        setTemplate() {
            try {
                let t = new pdp_template_1.default(this.json, this.colorCodes);
                this.template = t.getTemplate();
            }
            catch (e) {
                console.log("In PDP error line 30. Error::", e);
            }
        }
    }
    exports.default = Pdp;
});

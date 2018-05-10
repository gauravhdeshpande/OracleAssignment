define(["require", "exports", "./BasePage", "../Utils/Ajax"], function (require, exports, BasePage_1, Ajax_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Pdp extends BasePage_1.default {
        constructor(args) {
            super(args);
            this.ajaxSuccess = (data) => {
                this.json = data;
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
            console.log('hiya in pdp', this.json);
            try {
                this.template = `Hello<div class="container">
    <div class="main-img">
        <div class="img-section-6">
        <img src="images/couch_lg_0.jpg" alt="Product Image">
        </div>
        <div class="small-pdp-img">
        <div class="img-section-6">
            <img src="images/couch_sm_0.jpg" alt="Product Image">
            <img src="images/couch_sm_1.jpg" alt="Product Image">
            <img src="images/couch_sm_0.jpg" alt="Product Image">
            <img src="images/couch_sm_1.jpg" alt="Product Image">
        </div>
        </div>
    </div>
</div>
            `;
            }
            catch (e) {
                console.log("In PDP error line 30. Error::", e);
            }
        }
    }
    exports.default = Pdp;
});

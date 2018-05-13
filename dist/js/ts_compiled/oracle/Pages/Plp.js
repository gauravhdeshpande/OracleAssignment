define(["require", "exports", "./BasePage", "../Utils/Ajax", "../Modules/plp_template"], function (require, exports, BasePage_1, Ajax_1, plp_template_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Plp extends BasePage_1.default {
        constructor(args) {
            super(args);
            this.ajaxSuccess = (data) => {
                this.productJson = data;
                this.productToner = new plp_template_1.default(data);
                this.setTemplate();
                this.render();
            };
            this.ajaxFailure = (err) => {
            };
            this.sortHandler = (event) => {
                //Need to handle this in a better way
                //if (event.target.closest('li'))  console.log("I am in this",event.target.closest('li').getAttribute('data-id'));
                switch (event.target.getAttribute('id')) {
                    case 'select-sort':
                        this.productToner.sortyBy(event.target.value);
                        break;
                    default:
                        break;
                }
                this.setTemplate();
                this.render();
            };
            this.setContainer('plp-listing');
            document.getElementById('sortby').addEventListener("change", this.sortHandler);
            document.getElementById('filterby').addEventListener('click', this.filterHandler);
            Ajax_1.default.getFromUrl('/Products').then(this.ajaxSuccess, this.ajaxFailure);
        }
        filterHandler(event) {
            console.log('jojo', event);
        }
        setTemplate() {
            this.template = `<ul>${this.productToner.getTemplate()}</ul>`;
        }
    }
    exports.default = Plp;
});

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
                this.setupFiltersOnHtml();
            };
            this.ajaxFailure = (err) => {
            };
            this.sortHandler = (event) => {
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
            this.filterHandler = (event) => {
                if (event.target.getAttribute('type') == 'checkbox') {
                    this.productToner.filterBy(event.target.getAttribute('value'), event.target.checked);
                    this.setTemplate();
                    this.render();
                }
            };
            this.setContainer('plp-listing');
            document.getElementById('sortby').addEventListener("change", this.sortHandler);
            document.getElementById('filterby').addEventListener('change', this.filterHandler);
            Ajax_1.default.getFromUrl('/Products').then(this.ajaxSuccess, this.ajaxFailure);
        }
        setupFiltersOnHtml() {
            let filters = {};
            this.productJson.map((el) => {
                filters[el.brand] = filters[el.brand] ? Number(filters[el.brand] + 1) : 1;
            });
            document.getElementById('filterby').innerHTML = '';
            //Populate Brand Filters. 
            for (let k in filters) {
                document.getElementById('filterby').innerHTML += `
            <p><input checked="true" id="${k}" value="${k}" type="checkbox">
            <label for="${k}"><span class="ax-hidden">Brand Name:</span>${k}</label>
            </p>
            `;
            }
        }
        setTemplate() {
            this.template = `<ul>${this.productToner.getTemplate()}</ul>`;
        }
    }
    exports.default = Plp;
});

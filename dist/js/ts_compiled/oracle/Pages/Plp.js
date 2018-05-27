define(["require", "exports", "./BasePage", "../Utils/Ajax", "../Modules/plp_template"], function (require, exports, BasePage_1, Ajax_1, plp_template_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Plp extends BasePage_1.default {
        constructor(args) {
            super(args);
            this.clickHandler = (event) => {
                switch (event.target.getAttribute('name')) {
                    case 'brand':
                    case 'price':
                        return;
                    case 'toggler':
                        //get Sibling ul
                        let sibling = event.target.nextElementSibling;
                        if (sibling.className.match(/active/gi)) {
                            sibling.removeAttribute('class');
                        }
                        else {
                            sibling.className += 'active';
                        }
                        event.preventDefault();
                        event.stopPropagation();
                    default:
                        break;
                }
            };
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
                let flags = {
                    brand: {}
                };
                let checkboxes;
                let noos = 0;
                let relation;
                relation = event.target.closest('ul');
                switch (relation.className) {
                    case 'filterByBrand':
                        checkboxes = event.target.closest('ul').querySelectorAll('input[type="checkbox"]');
                        checkboxes.forEach(element => {
                            flags.brand[element.getAttribute('value')] = element.checked;
                            if (!element.checked)
                                ++noos;
                        });
                        if (checkboxes.length == noos) {
                            checkboxes.forEach(element => {
                                flags.brand[element.getAttribute('value')] = true;
                                element.checked = true;
                                element.setAttribute('checked', true);
                            });
                        }
                        break;
                    default:
                        break;
                }
                this.productToner.filterBy(flags);
                this.setTemplate();
                this.render();
                /*if(event.target.getAttribute('type')=='checkbox'){
                    this.productToner.filterBy(event.target.getAttribute('value'),event.target.checked);
                    this.setTemplate();
                    this.render();
                }*/
            };
            this.setContainer('plp-listing');
            document.getElementById('sortby').addEventListener("change", this.sortHandler);
            document.getElementById('filterby').addEventListener('change', this.filterHandler);
            document.getElementById('brandOnMobile').addEventListener('change', this.filterHandler);
            document.getElementById('hamburger').addEventListener('click', this.clickHandler);
            Ajax_1.default.getFromUrl('/Products').then(this.ajaxSuccess, this.ajaxFailure);
        }
        setupFiltersOnHtml() {
            let filters = {};
            this.productJson.map((el) => {
                filters[el.brand] = filters[el.brand] ? Number(filters[el.brand] + 1) : 1;
            });
            document.getElementById('filterby').innerHTML = '';
            document.getElementById('brandOnMobile').innerHTML = '';
            //Populate Brand Filters. 
            for (let k in filters) {
                document.getElementById('filterby').innerHTML += `
            <li><input checked="true" id="${k}" value="${k}" type="checkbox">
            <label for="${k}"><span class="ax-hidden">Brand Name:</span>${k}</label>
            </li>
            `;
                document.getElementById('brandOnMobile').innerHTML += `
            <li><input checked="true" id="mobile${k}" type="checkbox" value="${k}" name="brand"><label for="mobile${k}"><span class="ax-hidden">Brand Name:</span>${k}</label></li>
            `;
            }
        }
        setTemplate() {
            this.template = `<ul>${this.productToner.getTemplate()}</ul>`;
        }
    }
    exports.default = Plp;
});

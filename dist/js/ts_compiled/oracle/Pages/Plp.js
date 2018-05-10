define(["require", "exports", "./BasePage", "../Utils/Ajax"], function (require, exports, BasePage_1, Ajax_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Plp extends BasePage_1.default {
        constructor(args) {
            super(args);
            this.ajaxSuccess = (data) => {
                this.productJson = data;
                this.setTemplate();
                this.render();
            };
            this.ajaxFailure = (err) => {
            };
            this.clickHanlder = (event) => {
                //Need to handle this in a better way
                if (event.target.closest('li'))
                    console.log("I am in this", event.target.closest('li').getAttribute('data-id'));
            };
            this.setContainer('plp-listing');
            document.getElementById('plp-listing').addEventListener("click", this.clickHanlder);
            Ajax_1.default.getFromUrl('/Products').then(this.ajaxSuccess, this.ajaxFailure);
        }
        setTemplate() {
            let list = '';
            let rating;
            let pricing;
            this.productJson.map((obj, index) => {
                rating = Array(5).fill(`<i class="fa fa-star"></i>`).fill(`<i class="fa fa-star checked"></i>`, 0, obj.rating).join('') + `(${obj.rating})`;
                pricing = `
            <del>${obj.price.currency + ' ' + obj.price.sellingPrice}</del>
            <span>${obj.price.currency + ' ' + obj.price.discountedPrice}</span>
            
            <span class="${obj.price.sale ? 'hotPrice' : ''}">${obj.price.currency + ' ' + obj.price.low} - ${obj.price.high} ${obj.price.sale ? 'SALE' : ''}</span>
            
        `;
                list += `<li class="product-col" data-id="${obj.id}">
            <a href="kdPdp.html?id=${obj.id}">
            <img src="images/${obj.image}"/>
            <span class="product-details">${obj.name}</span>
            ${pricing}
            <span>${rating}</span>
            </a>
        </li>`;
            });
            this.template = `<ul>${list}</ul>`;
        }
    }
    exports.default = Plp;
});

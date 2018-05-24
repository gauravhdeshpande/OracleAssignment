define(["require", "exports", "./CommonComponents"], function (require, exports, CommonComponents_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Template {
        constructor(products, od) {
            this.resovePostRender = () => {
                let qss = Object.keys(this.quantitySteppers);
                for (let i = 0; i < qss.length; i++) {
                    let id = this.quantitySteppers[qss[i]].parent;
                    let obj = this.quantitySteppers[qss[i]].qs;
                    obj.appendto(id);
                }
            };
            this.productJson = products;
            this.backupJson = products;
            this.activeSort = undefined;
            this.quantitySteppers = {};
            this.box = 36;
            this.circle = {
                diameter: 30,
                x: this.box / 2,
                y: (this.box - 30) / 2
            };
            this.orderDetails = od;
        }
        getTemplate() {
            let rating;
            let pricing;
            this.templateHtml = '<ul class="container-fluid">';
            this.productJson.map((obj, index) => {
                let qsid = 'qs_' + obj.id;
                if (!this.quantitySteppers[obj.id]) {
                    this.quantitySteppers[obj.id] = {
                        qs: new CommonComponents_1.QuantityStepper(obj.quantity),
                        parent: qsid
                    };
                }
                rating = Array(5).fill(`<i class="fa fa-star"></i>`).fill(`<i class="fa fa-star checked"></i>`, 0, obj.rating).join('') + `(${obj.rating})`;
                pricing = `
            <del>${obj.price.currency + ' ' + obj.price.sellingPrice}</del>
            <span>${obj.price.currency + ' ' + obj.price.discountedPrice}</span>
            <span class="${obj.price.sale ? 'hotPrice' : ''}">${obj.price.currency + ' ' + obj.price.low} - ${obj.price.high} ${obj.price.sale ? 'SALE' : ''}</span>
            ${obj.price.sale ? '' : "<span>&nbsp;</span>"}
        `;
                this.templateHtml += `<li class="col-lg-12 row" data-id="${obj.id}">
            <div class="col-lg-2 col-xs-6"><img src="images/${obj.image}"/></div>
            <div class="col-lg-5 col-xs-6">
                <a href="pdp.html?id=${obj.id}"><span class="product-details">${obj.name}</span></a>
                <span> ${pricing}</span>
                <span>${rating}</span>            
            </div>  
            <div class="col-lg-3 col-xs-6" id=${qsid}></div>
            <div class="col-lg-2 col-xs-6"> <button class="primaryBtn"><span>Buy Again</span></button></div>      
        </li>`;
            });
            this.templateHtml += '</ul>';
            let priceTable = document.getElementById('final-price');
            priceTable.innerHTML = `
        <div class="reward-animation col-lg-6">               
<svg viewBox="0 0 ${this.box} ${this.box}" class="circular-chart">
  
    <path class="circle" stroke-dasharray="${this.orderDetails.percentage}, 100" d="M${this.circle.x} ${this.circle.y}
        a ${this.circle.diameter / 2} ${this.circle.diameter / 2} 0 0 1 0 ${this.circle.diameter}
        a ${this.circle.diameter / 2} ${this.circle.diameter / 2} 0 0 1 0 -${this.circle.diameter}"></path>
    <text x="50%" y="50%" text-anchor="middle" fill="black" font-size="10px" font-family="Open Sans" dy=".3em">${this.orderDetails.percentage}</text>
  </svg>
</div>
        <table class="col-lg-6">
        <tbody>
            <tr>
                <td><b>Subtotal</b></td>
                <td></td>
            </tr>
            <tr>
                <td><b>Taxes</b></td>
                <td></td>
            </tr>
            <tr>
                <td><b>Shipping<br/>Standard</b></td>
                <td></td>
            </tr>
            <tr>
                <td><b>Promo<br/>SPRINGSHI</b></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    `;
            return this.templateHtml;
        }
    }
    //customElements.define('quantity-stepper', QuantityStepper);
    exports.default = Template;
});

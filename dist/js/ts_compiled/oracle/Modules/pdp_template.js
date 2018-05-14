define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class QuantityStepper extends HTMLElement {
        constructor() {
            super();
            this.innerHTML = '<h1 click=${this.minus}>Hello world </h1>';
            this.child = document.createElement('button');
        }
        minus(event) {
            console.log('minus count here');
            event.preventDefault();
            event.stopPropagation();
        }
        add(event) {
            console.log('add count here');
            event.preventDefault();
            event.stopPropagation();
        }
        getChild() {
            return this.child;
        }
        getHtml() {
            return `<div class="container">
        <div class="row">
           <p>Quantity: </p>
           <div class="col-lg-2 quantity-btn">
              <div class="input-group">
                 <span class="input-group-btn">
                 <button click="${this.minus}" type="button" class="quantity-left-minus btn btn-danger btn-number"  data-type="minus" data-field="">
                 <span class="glyphicon glyphicon-minus">-</span>
                 </button>
                 </span>
                 
                 <input type="text" id="quantity" name="quantity" class="form-control input-number" value="10" min="1" max="100">
                 <span class="input-group-btn">
                 <button click="${this.add}" type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
                 <span class="glyphicon glyphicon-plus">+</span>
                 </button>
                 </span>
              </div>
              <div class="cart-btn">
                 <button class="add-cart">Add to Cart</button>
              </div>
           </div>
        </div>
     </div>`;
        }
    }
    class Template {
        constructor(json, colorCodes) {
            this.json = json;
            this.activeImage = this.json.images[0];
            this.json.images.splice(0, 1);
            this.colorCodes = colorCodes;
        }
        doSomething() {
            console.log('yoyuo', document.getElementById('kiko'));
            //this.qs = new QuantityStepper();
            //document.getElementById('kiko').appendChild(this.qs);
        }
        getTemplate() {
            return `
        <form>
        <div class="container">
        <div class="main-img">
            <div class="img-section-6">
            <img src="images/${this.activeImage}" alt="Product Image">
            </div>
            <div class="small-pdp-img">
            <div class="img-section-6">
            ${this.json.images.map((el) => {
                return '<img src="images/' + el + '" alt="Product Image">';
            }).join('')}
            </div>
            </div>
        </div>
    </div>
    <!-- / Side Image Area  -->
          <div class="container section-6">
             <!-- Product type -->
             <div class="product-title">
                <h3>${this.json.title}</h3>
                <p class="item-details"></p>
                <p class="rating"></p>
                <span>
                   <p>Reviews</p>
                </span>
             </div>
             <div class="price-block">
                <h2 class="list-price"></h2>
                <h2 class="sale-price"></h2>
             </div>
             <div class="btn-size">
             ${this.json.sizes.map((el) => {
                return '<button style="text-transform:capitalize;"><span>' + el.substr(0, 1) + '</span><span class="ax-hidden">' + el.substr(1) + '</span></button>';
            }).join('')}
             </div>
             <br>
             <p class="color-title">Color: </p>
             <ul class="color-area">
                ${this.json.colors.map((el) => {
                return '<li><button style="background:#' + this.colorCodes[el] + ';"><span class="ax-hidden">' + el + '</span></button></li>';
            }).join('')}
             </ul>
          </div>
          <div class="product-description">
             <p class="product-desc">${this.json.description}</p>
          </div>
          <div id="kiko"></div>
          </form>
    `;
        }
    }
    //customElements.define('quantity-stepper', QuantityStepper);
    exports.default = Template;
});

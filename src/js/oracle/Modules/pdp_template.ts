class QuantityStepper{
    constructor(){
        
    }
    getHtml(){
        return `      <div class="container">
        <div class="row">
           <p>Quantity: </p>
           <div class="col-lg-2 quantity-btn">
              <div class="input-group">
                 <span class="input-group-btn">
                 <button type="button" class="quantity-left-minus btn btn-danger btn-number"  data-type="minus" data-field="">
                 <span class="glyphicon glyphicon-minus">-</span>
                 </button>
                 </span>
                 <input type="text" id="quantity" name="quantity" class="form-control input-number" value="10" min="1" max="100">
                 <span class="input-group-btn">
                 <button type="button" class="quantity-right-plus btn btn-success btn-number" data-type="plus" data-field="">
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

class Template{
    json;
    activeImage;
    qs;
    colorCodes;
    constructor(json,colorCodes){
        this.json=json;
        this.activeImage = this.json.images[0];
        this.json.images.splice(0,1);
        this.colorCodes = colorCodes;
        this.qs = new QuantityStepper();
    }
    getTemplate(){
        return `
        <form>
        <div class="container">
        <div class="main-img">
            <div class="img-section-6">
            <img src="images/${this.activeImage}" alt="Product Image">
            </div>
            <div class="small-pdp-img">
            <div class="img-section-6">
            ${this.json.images.map((el)=>{
                return '<img src="images/'+el+'" alt="Product Image">'
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
             ${this.json.sizes.map((el)=>{
                return '<button style="text-transform:capitalize;"><span>'+el.substr(0,1)+'</span><span class="ax-hidden">'+el.substr(1)+'</span></button>'
            }).join('')}
             </div>
             <br>
             <div class="color-area">
                <p class="color-title">Color: </p>
                ${this.json.colors.map((el)=>{
                    return '<button style="background:#'+this.colorCodes[el]+';"><span class="ax-hidden">'+el+'</span></button>'
                }).join('')}
             </div>
          </div>
          <div class="product-description">
             <p class="product-desc">${this.json.description}</p>
          </div>
          ${this.qs.getHtml()}
          </form>
    `;
    }
}
export default Template;

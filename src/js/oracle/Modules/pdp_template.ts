import Stars, { QuantityStepper } from './CommonComponents';

class Template{
    json;
    activeImage;
    qs;
    qs2;
    colorCodes;
    stars;

    constructor(json,colorCodes){
        this.json=json;
        this.activeImage = this.json.details.images[0];
        this.json.details.images.splice(0,1);
        this.colorCodes = colorCodes;
        this.qs = new QuantityStepper();
    }
    resovePostRender(){
        this.qs.appendto('quanitityStepper');
    }
    showImage=(event)=>{
       console.log('in thumbail ....');
        
    }
    getCount=()=>{
        return this.qs.count.value;
    }
    getTemplate(){
        return `
    <form action="odp.html" id="productDetailForm">
        <div class="container">
            <div class="col">
                <img id="main-image" src="images/${this.activeImage}" alt="Product Image">
                <div>
                    ${this.json.details.images.map((el)=>{
                        return '<a href="#"><img class="thumbnails" src="images/'+el+'" alt="Product Image"></a>'
                    }).join('')}
                </div>
            </div>
            <div class="col">
                <div class="product-title">
                    <h1>${this.json.name}</h1>
                    <p class="item-details">Item #:${this.json.id}</p>
                    <p class="rating">${new Stars(this.json.rating).html}</p><a>Reviews(0)</a>
                </div>
                <!-- Product type -->
                <div class="price-block">
                    <span class="list-price">ListPrice:${this.json.price.currency} ${this.json.price.high}</span>
                    <span class="sale-price">${this.json.price.currency} ${this.json.price.discountedPrice}</span>
                    <span class="sale-price">${this.json.price.currency} ${this.json.price.sellingPrice}</span>
                </div>
                <div class="btn-size">
                    <p>Size: <span id="selected"></span></p>
                    ${this.json.details.sizes.map((el)=>{
                    return '<button style="text-transform:capitalize;"><span>'+el.substr(0,1)+'</span><span class="ax-hidden">'+el.substr(1)+'</span></button>'
                }).join('')}
                </div>
                <div>
                    <p class="color-title">Color Beige: </p>
                    <ul class="color-area">
                    ${this.json.details.colors.map((el)=>{
                        return '<li><button style="background:#'+this.colorCodes[el]+';"><span class="ax-hidden">'+el+'</span></button></li>'
                    }).join('')}
                    </ul>
                </div>
                <div id="quanitityStepper">
                    <!-- Quantity Stepper -->
                </div>
                <input type="submit" value="Add To Cart"/>
                <div>
                    <h3>Overview</h3>
                    <p class="product-desc">${this.json.details.description}</p>
                </div>
            </div>
        </div>
    </form>
    `;
    }
}

//customElements.define('quantity-stepper', QuantityStepper);
export default Template;

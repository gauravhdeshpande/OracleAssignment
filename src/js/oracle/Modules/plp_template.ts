class Template{
    productJson;
    list;
    activeSort;
    backupJson;
    constructor(products){
        this.productJson = products;
        this.backupJson = products;
        this.activeSort = undefined;
    }
    getTemplate(){
        let rating;
        let pricing;
        this.list = '';
        this.productJson.map((obj,index)=>{
        rating = Array(5).fill(`<i class="fa fa-star"></i>`).fill(`<i class="fa fa-star checked"></i>`,0,obj.rating).join('')+`(${obj.rating})`;
        pricing = `
            <del>${obj.price.currency+' '+obj.price.sellingPrice}</del>
            <span>${obj.price.currency+' '+obj.price.discountedPrice}</span>
            
            <span class="${obj.price.sale?'hotPrice':''}">${obj.price.currency+' '+obj.price.low} - ${obj.price.high} ${obj.price.sale?'SALE':''}</span>
            
        `;
        this.list+=`<li class="product-col" data-id="${obj.id}">
            <a href="kdPdp.html?id=${obj.id}">
            <img src="images/${obj.image}"/>
            <span class="product-details">${obj.name}</span>
            ${pricing}
            <span>${rating}</span>
            </a>
        </li>`});
        return this.list;
    }
    filterBy(brand:string,show:boolean){
        if(!show){
            this.productJson = this.productJson.filter(function(a){
                if(a.brand == brand) {return show;}
                return true;
            });
        }
        else{
            this.productJson = this.productJson.concat(this.backupJson.filter(function(a){
                if(a.brand == brand) {return true;}
                return false;
            }));
        }
        this.sortyBy(this.activeSort);        
    }
    sortyBy(param){
        //console.log('before',this.productJson);
        this.activeSort = param;
        switch(param){
            case 'A-Z':
                this.productJson.sort((a,b)=>{
                    return a.name>b.name;
                });
            break;
            case 'Z-A':
                this.productJson.sort((a,b)=>{
                    return a.name<b.name;
                });
            break;
            case 'price-lh':
                this.productJson.sort((a,b)=>{
                    return Number(a.price.low)>Number(b.price.low);
                });
            break;
            case 'price-hl':
                this.productJson.sort((a,b)=>{
                    return Number(a.price.low)<Number(b.price.low);
                });
            break;
            case 'rated-hl':
                this.productJson.sort((a,b)=>{
                    return Number(a.rating)<Number(b.rating);
                });
            break;
            default:
                
            break;
        }
        //console.log('after',this.productJson);
    }
}

//customElements.define('quantity-stepper', QuantityStepper);
export default Template;

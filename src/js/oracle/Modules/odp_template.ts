import {QuantityStepper} from './CommonComponents';
class Template{
    productJson;
    list;
    activeSort;
    backupJson;
    quantitySteppers;
    constructor(products){
        this.productJson = products;
        this.backupJson = products;
        this.activeSort = undefined;
        this.quantitySteppers = {};
    }
    getTemplate(){
        let rating;
        let pricing;
        this.list = '<ul class="row">';
        this.productJson.map((obj,index)=>{
            let qsid = 'qs_'+obj.id;
            if(!this.quantitySteppers[obj.id]){
                this.quantitySteppers[obj.id] = {
                    qs:new QuantityStepper(obj.quantity),
                    parent:qsid
                }
            }
        rating = Array(5).fill(`<i class="fa fa-star"></i>`).fill(`<i class="fa fa-star checked"></i>`,0,obj.rating).join('')+`(${obj.rating})`;
        pricing = `
            <del>${obj.price.currency+' '+obj.price.sellingPrice}</del>
            <span>${obj.price.currency+' '+obj.price.discountedPrice}</span>
            <span class="${obj.price.sale?'hotPrice':''}">${obj.price.currency+' '+obj.price.low} - ${obj.price.high} ${obj.price.sale?'SALE':''}</span>
            ${obj.price.sale?'':"<span>&nbsp;</span>"}
        `;
        this.list+=`<li class="col-lg-12 row" data-id="${obj.id}">
            <div class="col-lg-2"><img src="images/${obj.image}"/></div>
            <div class="col-lg-5">
                <a href="pdp.html?id=${obj.id}"><span class="product-details">${obj.name}</span></a>
                <span> ${pricing}</span>
                <span>${rating}</span>            
            </div>  
            <div class="col-lg-3" id=${qsid}></div>
            <div class="col-lg-2"> <button class="primaryBtn">Buy Again</button></div>      
        </li>`});
        this.list += '</ul>';
        this.list +=`<div class="reward-animation">
                   
<svg viewBox="0 0 36 36" class="circular-chart">
  
    <path class="circle" stroke-dasharray="75, 100" d="M18 2.0845
        a 15.9155 15.9155 0 0 1 0 31.831
        a 15.9155 15.9155 0 0 1 0 -31.831"></path>
    <text x="50%" y="50%" text-anchor="middle" fill="black" font-size="10px" font-family="Open Sans" dy=".3em">75</text>
  </svg>
              </div> `;
      
        return this.list;
    }
    resovePostRender=()=>{
        let qss:any = Object.keys(this.quantitySteppers);
        for(let i=0;i<qss.length;i++){
            let id = this.quantitySteppers[qss[i]].parent;
            let obj = this.quantitySteppers[qss[i]].qs;
            obj.appendto(id);
        }
        // this.quantitySteppers.map=(el,id)=>{
        //     console.log('Resolve all quantitiy steppers here',el,id);
        // }
        //this.qs.appendto('quanitityStepper');
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
            default:
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
        }
        //console.log('after',this.productJson);
    }
}

//customElements.define('quantity-stepper', QuantityStepper);
export default Template;

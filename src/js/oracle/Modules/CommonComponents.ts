class Stars{
    obj;
    html;
    constructor(props){
        this.obj = {rating:props};
        this.html = Array(5).fill(`<i class="fa fa-star"></i>`).fill(`<i class="fa fa-star checked"></i>`,0,this.obj.rating).join('')+`(${this.obj.rating})`;
    }
}
class QuantityStepper{
    html;
    inputElement:HTMLElement;
    minus:HTMLButtonElement;
    plus:HTMLButtonElement;
    container:HTMLDivElement;
    count:any;
    id;
    predefinedQuantity;
    constructor(quantity?:number){
        this.create();
        this.addHtml();
        this.addListeners();
        if(quantity){this.predefinedQuantity = quantity;}
    }
    create(){
        this.inputElement = document.createElement("input");
        this.minus = document.createElement("button");
        this.plus = document.createElement("button");
        this.container = document.createElement("div");
        
    }
    addHtml(){
        this.minus.innerHTML = `-<span class="ax-hidden">Decrease quantity by 1<span>`;
        this.plus.innerHTML = `+<span class="ax-hidden">Increase quantity by 1<span>`;
        this.inputElement.setAttribute("value","1");
    }
    addListeners(){
        this.inputElement.addEventListener('focusout',this.changeHandler);
        this.plus.addEventListener('click',this.upTheCount);
        this.minus.addEventListener('click',this.downTheCount);
    }
        /**
     * 
     * @param id : A unique id on the page where this should be inserted
     */
    appendto(id){
        this.id = id+"_qs";
        this.count  = this.inputElement.getAttributeNode("value");
        this.container.innerHTML = `<label class="ax-hidden" for=${this.id}>Quantity of Item in between 1 and 10</label>`;
        this.inputElement.setAttribute('id',this.id);
        this.container.appendChild(this.minus);
        this.container.appendChild(this.inputElement);
        this.container.appendChild(this.plus);
        document.getElementById(id)?document.getElementById(id).appendChild(this.container):'';
        if(this.predefinedQuantity){this.count.value=this.predefinedQuantity;}
    }
    changeHandler=(event)=>{
        if(event.target.value <= 10 && event.target.value > 0){
        }
        else{
            event.preventDefault();
            event.target.value=1;
            //event.stopPropagation();
        }
    }
    upTheCount=(event)=>{
        this.count.value < 10? ++this.count.value: this.count.value;
    }
    downTheCount=(event)=>{
        this.count.value > 1? --this.count.value: this.count.value;
    }


}
export default Stars;
export {QuantityStepper};
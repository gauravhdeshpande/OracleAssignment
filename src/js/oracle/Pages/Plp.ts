"use strict";
import BasePage from './BasePage';
import ajax from '../Utils/Ajax';
import Template from '../Modules/plp_template'
class Plp extends BasePage{
    productJson:any;
    productToner;
    constructor(args){
        super(args);
        this.setContainer('plp-listing');
        document.getElementById('sortby').addEventListener("change",this.sortHandler);
        document.getElementById('filterby').addEventListener('click',this.filterHandler);
        ajax.getFromUrl('/Products').then(this.ajaxSuccess,this.ajaxFailure);
    }
    ajaxSuccess=(data:any)=>{
        this.productJson = data;
        this.productToner = new Template(data);
        this.setTemplate();
        this.render();
    }
    ajaxFailure=(err)=>{

    }
    sortHandler=(event)=>{
        //Need to handle this in a better way
        //if (event.target.closest('li'))  console.log("I am in this",event.target.closest('li').getAttribute('data-id'));
       
        switch(event.target.getAttribute('id')){
            case 'select-sort':
                this.productToner.sortyBy(event.target.value);
                
            break;
            default:
            break;
        }
        this.setTemplate();
        this.render();
        
    }
    filterHandler(event){
        console.log('jojo',event);
    }
    setTemplate(){
        this.template=`<ul>${this.productToner.getTemplate()}</ul>`;
    }
    
}
export default Plp;
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
        document.getElementById('filterby').addEventListener('change',this.filterHandler);
        ajax.getFromUrl('/Products').then(this.ajaxSuccess,this.ajaxFailure);
    }
    ajaxSuccess=(data:any)=>{
        this.productJson = data;
        this.productToner = new Template(data);
        this.setTemplate();
        this.render();
        this.setupFiltersOnHtml();
    }
    ajaxFailure=(err)=>{

    }
    setupFiltersOnHtml(){
        let filters = {};
        this.productJson.map((el)=>{
            filters[el.brand] = filters[el.brand]?Number(filters[el.brand] + 1):1;
        });
        document.getElementById('filterby').innerHTML = '';

        //Populate Brand Filters. 
        for(let k in filters){
            document.getElementById('filterby').innerHTML += `
            <p><input checked="true" id="${k}" value="${k}" type="checkbox">
            <label for="${k}"><span class="ax-hidden">Brand Name:</span>${k}</label>
            </p>
            `;
        }
    }
    sortHandler=(event)=>{
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
    filterHandler=(event)=>{
        if(event.target.getAttribute('type')=='checkbox'){
            this.productToner.filterBy(event.target.getAttribute('value'),event.target.checked);
            this.setTemplate();
            this.render();
        }
        
    }
    setTemplate(){
        this.template=`<ul>${this.productToner.getTemplate()}</ul>`;
    }
    
}
export default Plp;
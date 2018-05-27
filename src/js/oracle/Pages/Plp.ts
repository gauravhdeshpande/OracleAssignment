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
        document.getElementById('brandOnMobile').addEventListener('change',this.filterHandler);
        document.getElementById('hamburger').addEventListener('click',this.clickHandler);
        
        ajax.getFromUrl('/Products').then(this.ajaxSuccess,this.ajaxFailure);
    }
    clickHandler=(event)=>{
        switch(event.target.getAttribute('name')){
            case 'brand':

            case 'price':

            return;
            case 'toggler':
                //get Sibling ul
                let sibling = event.target.nextElementSibling;
                if(sibling.className.match(/active/gi)){
                    sibling.removeAttribute('class');
                }
                else{
                    sibling.className += 'active';
                }
                event.preventDefault();
                event.stopPropagation();
            default:
            break;
        }
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
        document.getElementById('brandOnMobile').innerHTML = '';
        //Populate Brand Filters. 
        for(let k in filters){
            document.getElementById('filterby').innerHTML += `
            <li><input checked="true" id="${k}" value="${k}" type="checkbox">
            <label for="${k}"><span class="ax-hidden">Brand Name:</span>${k}</label>
            </li>
            `;
            document.getElementById('brandOnMobile').innerHTML += `
            <li><input checked="true" id="mobile${k}" type="checkbox" value="${k}" name="brand"><label for="mobile${k}"><span class="ax-hidden">Brand Name:</span>${k}</label></li>
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
        let flags={};
        let checkboxes;
        let noos = 0;
        checkboxes  = event.target.closest('ul').querySelectorAll('input[type="checkbox"]');
        
        checkboxes.forEach(element => {
            flags[element.getAttribute('value')] = element.checked;
            if(!element.checked) ++noos;
        });

        if(checkboxes.length == noos){
            checkboxes.forEach(element => {
                flags[element.getAttribute('value')] = true;
                element.checked = true;
                element.setAttribute('checked',true);
            });
        }
        this.productToner.filterBy(flags);
        this.setTemplate();
        this.render();
        /*if(event.target.getAttribute('type')=='checkbox'){
            this.productToner.filterBy(event.target.getAttribute('value'),event.target.checked);
            this.setTemplate();
            this.render();
        }*/
        
    }
    setTemplate(){
        this.template=`<ul>${this.productToner.getTemplate()}</ul>`;
    }
    
}
export default Plp;
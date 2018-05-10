"use strict";
import BasePage from './BasePage';
import ajax from '../Utils/Ajax';
class Plp extends BasePage{
    productJson:any;
    constructor(args){
        super(args);
        this.setContainer('plp-listing');
        document.getElementById('plp-listing').addEventListener("click",this.clickHanlder);
        ajax.getFromUrl('/Products').then(this.ajaxSuccess,this.ajaxFailure);
    }
    ajaxSuccess=(data:any)=>{
        this.productJson = data;
        this.setTemplate();
        this.render();
    }
    ajaxFailure=(err)=>{

    }
    clickHanlder=(event)=>{
        //Need to handle this in a better way
        if (event.target.closest('li'))  console.log("I am in this",event.target.closest('li').getAttribute('data-id'));
        
    }
    setTemplate(){
        let list = '';
        let rating;
        this.productJson.map((obj,index)=>{
        rating = Array(5).fill(`<i class="fa fa-star"></i>`).fill(`<i class="fa fa-star checked"></i>`,0,obj.rating).join('')+`(${obj.rating})`;
        list+=`<li class="product-col" data-id="${obj.id}">
            <a href="kdPdp.html?id=${obj.id}">
            <img src="images/${obj.image}"/>
            <span class="product-details">${obj.name}</span>
            <span>${rating}</span>
            </a>
        </li>`});
        this.template=`<ul>${list}</ul>`;
    }
    
}
export default Plp;
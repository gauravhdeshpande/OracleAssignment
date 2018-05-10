"use strict";
import BasePage from './BasePage';
import ajax from '../Utils/Ajax';
class Pdp extends BasePage{
    json:any;
    constructor(args){
        super(args);
        this.setContainer('pdp');
        document.getElementById('pdp').addEventListener("click",this.clickHanlder);
        if(this.getParams.id){
            ajax.getFromUrl('/product-details',this.getParams.id).then(this.ajaxSuccess,this.ajaxFailure);
        }
        
    }
    ajaxSuccess=(data)=>{
        this.json=data;
        this.setTemplate();
        this.render();
    }
    ajaxFailure=(err)=>{
        
    }
    clickHanlder=(event)=>{
    }
    setTemplate(){
        console.log('hiya in pdp',this.json);
        try{
            this.template=`Hello<div class="container">
    <div class="main-img">
        <div class="img-section-6">
        <img src="images/couch_lg_0.jpg" alt="Product Image">
        </div>
        <div class="small-pdp-img">
        <div class="img-section-6">
            <img src="images/couch_sm_0.jpg" alt="Product Image">
            <img src="images/couch_sm_1.jpg" alt="Product Image">
            <img src="images/couch_sm_0.jpg" alt="Product Image">
            <img src="images/couch_sm_1.jpg" alt="Product Image">
        </div>
        </div>
    </div>
</div>
            `;
        }catch(e){
            console.log("In PDP error line 30. Error::",e);
        }
        
    }
}


export default Pdp;
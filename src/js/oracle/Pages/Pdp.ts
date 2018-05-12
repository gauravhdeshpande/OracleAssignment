"use strict";
import BasePage from './BasePage';
import ajax from '../Utils/Ajax';
import Template from '../Modules/pdp_template';
class Pdp extends BasePage{
    json:any;
    activeImage:any;
    colorCodes;
    constructor(args){
        super(args);
        this.setContainer('pdp');
       // document.getElementById('pdp').addEventListener("click",this.clickHanlder);
        if(this.getParams.id){
            ajax.getFromUrl('/product-details',this.getParams.id).then(this.ajaxSuccess,this.ajaxFailure);
        }
        
    }
    ajaxSuccess=(data)=>{
        this.json=data.json;
        this.colorCodes={};
        data.colors.map((el)=>{
            this.colorCodes[el.name]=el.code;
        });
        this.setTemplate();
        this.render();
    }
    ajaxFailure=(err)=>{
        
    }
    clickHanlder=(event)=>{
        console.log('heya');
    }
    setTemplate(){
        try{
            let t = new Template(this.json,this.colorCodes);
            this.template=t.getTemplate();
        }catch(e){
            console.log("In PDP error line 30. Error::",e);
        }
        
    }
}


export default Pdp;
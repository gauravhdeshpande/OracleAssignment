"use strict";
import BasePage from './BasePage';
import ajax from '../Utils/Ajax';
import Template from '../Modules/odp_template';

class Odp extends BasePage{
    templateObj;
    cart;
    constructor(props){
        super(props);
        this.setContainer('odp-listing');
        this.cart = this.makeCart();
        this.templateObj = new Template();
        this.template = `What is this?`;
        this.render();
        
    }
    makeCart=()=>{
        let obj = [];
        if(window.sessionStorage){
            let count = window.sessionStorage.length;
            while(count--){
                let s = window.sessionStorage.key(count);
                let [key,id] = s.match(/item_(\d)*/);
                if(id){
                    obj.push({
                        id:id,
                        count:window.sessionStorage.getItem(s)
                    });
                }            
            }
            console.log("JOJO",obj);
        }
        else{
         //If no sessionStorage support
         obj=[{},{}]   
        }
        return obj;
    }
}
export default Odp;

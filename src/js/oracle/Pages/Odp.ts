"use strict";
import BasePage from './BasePage';
import ajax from '../Utils/Ajax';
import Template from '../Modules/odp_template';
class Odp extends BasePage{
    constructor(props){
        super(props);
        console.log('heya');
        this.setContainer('plp-listing');
    }
}
export default Odp;
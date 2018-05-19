class Stars{
    obj;
    html;
    constructor(props){
        this.obj = {rating:props};
        this.html = Array(5).fill(`<i class="fa fa-star"></i>`).fill(`<i class="fa fa-star checked"></i>`,0,this.obj.rating).join('')+`(${this.obj.rating})`;
    }
}
class QuantityStepper{

}
export default Stars;
export {QuantityStepper};

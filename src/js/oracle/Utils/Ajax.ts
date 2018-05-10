class Ajax{

    constructor(){
    }
    getFromUrl(url:String,id?:number){
        var promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                //Decide the JSON the be sent back here
                switch(url){
                    case '/Products':
                        resolve(parentJson.productList);
                        break;
                    case '/product-details':
                        let product = undefined;
                        parentJson.productList.map((el:any,index)=>{
                            if(el.id == id){
                                product = el;
                            }
                        });
                        resolve(product);
                        break;
                }
            }, 0);
        });
        return promise;
    }

}
const ajax = new Ajax();
export default ajax;

const parentJson = {
    productList:[
        {
            id:"1",
            name:"Adidas Outdoor Men's Caprock Trail Hiking Shoes",
            image:"product-image_0.png",
            price:{
                currency:"$",
                sellingPrice:"2499.00",
                discountedPrice:"2960.99",
                low:"1545.00",
                high:"1230.00"
            },
            rating:3,
            mainImage:"",
            colors:[],
            variants:[],
            sizes:[]
        },
        {
            id:"2",
            name:"Adidas Outdoor Men's Caprock Trail Hiking Shoes",
            image:"product-image_1.png",
            price:{
                currency:"$",
                sellingPrice:"2499.00",
                discountedPrice:"2960.99",
                sale:true,
                low:"1545.00",
                high:"1230.00"
            },
            rating:2,
            mainImage:"",
            colors:[],
            variants:[],
            sizes:[]
        }
    ]}

/*class Ajax{
    private url:String;
    private method:String;
    private req:any;
    constructor(u,m) {
        this.url = u?u:'';
        this.method = m?m:'GET';
        this.RequestSetup();
    }
    private RequestSetup(){
        this.req = new XMLHttpRequest();
        this.req.onreadystatechange = (e) =>{
            switch(this.req.readyState){
                case 1:
                break;
                case 2:
                break;
                case 3:
                break;
                case 4:
                document.write(this.req.responseText);
                break;
            }
        };
    }
    public Trigger = () => {
        
        this.req.open(this.method,this.url,true);
        this.req.send();
    }

    public StaticJson = {
        
        'kiko':'gogo'
        
    }
}
export default Ajax;*/
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Ajax {
        constructor() {
        }
        getFromUrl(url, id) {
            var promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    //Decide the JSON the be sent back here
                    switch (url) {
                        case '/Products':
                            resolve(parentJson.productList);
                            break;
                        case '/product-details':
                            let product = undefined;
                            parentJson.productList.map((el, index) => {
                                if (el.id == id) {
                                    product = el;
                                }
                            });
                            resolve({ json: product.details, colors: parentJson.colorCodes });
                            break;
                    }
                }, 0);
            });
            return promise;
        }
    }
    const ajax = new Ajax();
    exports.default = ajax;
    const parentJson = {
        productList: [
            {
                id: "1",
                name: "Adidas Outdoor Men's Caprock Trail Hiking Shoes",
                image: "product-image_0.png",
                price: {
                    currency: "$",
                    sellingPrice: "2499.00",
                    discountedPrice: "2960.99",
                    low: "1545.00",
                    high: "1230.00"
                },
                rating: 3,
                details: {
                    title: 'Product Title 1',
                    images: [
                        "couch_lg_0.jpg",
                        "couch_sm_1.jpg",
                        "couch_sm_0.jpg"
                    ],
                    colors: ['red', 'green', 'blue'],
                    sizes: ['s', 'm', 'l', 'xl'],
                    description: 'Lorem Ipsum for 1'
                }
            },
            {
                id: "2",
                name: "Adidas Outdoor Men's Caprock Trail Hiking Shoes",
                image: "product-image_1.png",
                price: {
                    currency: "$",
                    sellingPrice: "2499.00",
                    discountedPrice: "2960.99",
                    sale: true,
                    low: "1545.00",
                    high: "1230.00"
                },
                rating: 2,
                details: {
                    title: 'Product Title 2',
                    images: [
                        "couch_lg_0.jpg",
                        "couch_sm_1.jpg",
                        "couch_sm_0.jpg"
                    ],
                    colors: ['red', 'green', 'blue'],
                    sizes: ['small', 'medium', 'large', 'xtra large'],
                    description: 'Lorem Ipsum for 2'
                }
            }
        ],
        colorCodes: [
            {
                name: 'red',
                code: 'ff0000'
            },
            {
                name: 'green',
                code: '00ff00'
            },
            {
                name: 'blue',
                code: '0000ff'
            }
        ]
    };
});
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

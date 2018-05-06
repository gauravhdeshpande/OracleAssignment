define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class StaticJson {
        constructor() {
            this.productList = [
                {
                    name: "Adidas Outdoor Men's Caprock Trail Hiking Shoes",
                    listPrice: 249.00,
                    salePrice: "$1545.00-$1230.00",
                    Rating: 5
                },
                {
                    name: "Nike Men's Air Force 1 Running Shoes",
                    listPrice: "$2371.99-$2399.99",
                    Rating: 1
                },
                {
                    name: "Adidas Outdoor Men's Caprock Trail Hiking Shoes",
                    listPrice: 2499.00,
                    salePrice: "$1545.00-$1230.00",
                    Rating: 3
                },
                {
                    name: "Nike Men's Air Force 1 Running Shoes",
                    listPrice: "$2371.99-$2399.99",
                    Rating: 3
                },
                {
                    name: "Adidas Outdoor Men's Caprock Trail Hiking Shoes",
                    listPrice: 2499.00,
                    salePrice: "$1545.00-$1230.00",
                    Rating: 4
                }
            ];
        }
    }
    exports.default = StaticJson;
});

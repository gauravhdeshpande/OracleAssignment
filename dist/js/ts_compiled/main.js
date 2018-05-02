var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "./StaticJson", "./Filter"], function (require, exports, StaticJson_1, Filter_1) {
    /*
    
    Learnt:
    1. Lambda function => ()
    2. import, export
    
    Task:
    1. write a module for ajax calls and
    2. What are enums, interfaces, generators, iterators, DECORATORS, reflections, proxies and observables?
       Implement at least 1 of every type.
    3. Implemented:
    
    4.
    
    1. For compile and output to dir
    "outDir":"./dist/js"
    2. For compile and bundle to single file
    "outFile": "dist/bundle"
    
    */
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var a = new StaticJson_1.default();
    console.log(Filter_1.default);
    //a.Trigger();
    function f() {
        console.log('f() called', arguments);
        return function (target, propertyKey, descriptor) {
            console.log('f() executed', target);
            target = function () {
                console.log("HEHEH");
            };
        };
    }
    function g() {
        console.log('g() called', arguments);
        return function () {
            console.log('g() executed', arguments);
        };
    }
    var Animal = /** @class */ (function () {
        function Animal() {
            this.name = "something";
        }
        Animal.prototype.speak = function () {
            console.log(this.name + ' makes a noise.');
        };
        __decorate([
            f(),
            g()
        ], Animal.prototype, "speak", null);
        return Animal;
    }());
    var cat = new Animal('Cat');
    cat.speak();
});

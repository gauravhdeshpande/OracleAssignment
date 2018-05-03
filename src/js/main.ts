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
import Ajax from './Ajax';
import StaticJson from './StaticJson';
import kiko from './Filter';
var a = new StaticJson();
console.log(kiko);
//a.Trigger();

function f(){
    console.log('f() called',arguments);
    return function(target,propertyKey:string,descriptor:PropertyDescriptor){
        console.log('f() executed',target);
        target = function(){
            console.log("HEHEH");
        }
    }
}

function g(){
    console.log('g() called',arguments);
    return function(){
        console.log('g() executed',arguments);
    }
}

class Animal { 
    
    constructor() {
      this.name = "something";
    }
    @f()
    @g()
    speak() {
      console.log(this.name + ' makes a noise.');
    }
  }

var cat = new Animal('Cat');
cat.speak();
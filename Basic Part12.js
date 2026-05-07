/*
//---------> Scopes: Part-1: Involves Concept of Local & Global Scope

{} --> Scope

const a = 10;
let b = 20;
var c = 30;

console.log(a)   //10
console.log(b)   //20
console.log(c)   //30

//---------> Let -> Local Scope

if(true){
let a = 10;
console.log("Inner Value: "+a)   /10
}

let a = 200;
console.log("Outer Value: " +a)  //200

//---------> var -> Global Scope

if(true){
var b = 20;
console.log("Inner Value: "+b)    //20
}

var b = 400;
console.log("Outer Value: "+b)    //400
*/

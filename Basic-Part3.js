
/*
-------->Confusion

let age = "21"                      // Only Number
console.log(typeof age);            //String

let val_in_number = Number(age);    //String -> number  
console.log(val_in_number);         //21 -> number

--------->

let age = "21a"                        //Letter + Number
 console.log(typeof age);             //String

let val_in_number = Number(age);      String -> number  
console.log(typeof val_in_number);    //number    
console.log(val_in_number)            //NaN

--------->

 let age = null                        //null
 console.log(typeof age);             //object

let val_in_number = Number(age);      // null -> number  
console.log(typeof val_in_number);    //number    
console.log(val_in_number)            // 0 -> number

--------->

let age = undefined                   //undefined
 console.log(typeof age);             //undefined

let val_in_number = Number(age);      // undefined -> number  
console.log(typeof val_in_number);    //number    
console.log(val_in_number)            //NaN

--------->

let age = true                        //true
 console.log(typeof age);             //boolean

let val_in_number = Number(age);      // boolean -> number  
console.log(typeof val_in_number);    //number    
console.log(val_in_number)            //1

--------->

let age = "twentyOne"                 //String
console.log(typeof age);              //string

let val_in_number = Number(age);      // string -> number  
console.log(typeof val_in_number);    //number    
console.log(val_in_number)            //NaN

--------->

Concept: 
"21"  --> 21
"21a" --> NaN
true  --> 1
false --> 0

--------->

let isActive = 1;                        

let booleanConversion = Boolean(isActive)
console.log(booleanConversion);           //true

--------->

let isActive = "";                      //Empty String

let booleanConversion = Boolean(isActive)
console.log(booleanConversion);             //false

--------->

let isActive = "sammu";                      //String

let booleanConversion = Boolean(isActive)
console.log(booleanConversion);             //true

--------->

Concept:

""     ->     false
"  "   ->     true
"sammu"->     true

--------->

let num = 21;

let stringNum = String(21);
console.log(stringNum);         //21
console.log(typeof stringNum);  //string


*/
  







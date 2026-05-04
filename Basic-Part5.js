//---------> Array Part-1

/*

array: collection of multiple items under a single varibale.
arrays are resizable in JavaScript
can contain mix of data types

() -> Paranthesis
[] -> Brackets
{} -> Braces

const array = [0, 1, 2, 3, 4, 5]

console.log(array[0])        //Accessing value at index 0

// ---------> Array methods

array.push(6)                //Adds 6 in an 'array' varibale
console.log(array);          //[0, 1, 2, 3, 4, 5, 6]

array.pop()                 //removes last value in an array
console.log(array)          //[0, 1, 2, 3, 4, 5]

array.unshift(10)           //Adds 10 on first in an array
console.log(array)          //[10, 0, 1, 2, 3, 4, 5] 

array.shift()               //removes first value in an array
console.log(array)          //[0, 1, 2, 3, 4, 5] 

// ---------> Array Questionaire methods

// .includes()
console.log(array.includes(0));    //return: true

// Finding index
console.log(array.indexOf(10))     //If a value is not in the array, the index is -1
console.log(array.indexOf(1))      //Index: 1

// All elements in an array --> String 
console.log(array.join())          //0,1,2,3,4,5

// ---------> 

//slice: cut piece, keep original safe
const originalArray = [10, 20, 30, 40, 50]      //Original Array
console.log(originalArray.slice(1, 4))          //[20, 30, 40, 50]
console.log(originalArray)                      //[10, 20, 30, 40, 50] 


//splice: modifies original array
const originalArray = [10, 20, 30, 40, 50]      //Original Array
console.log(originalArray.splice(1, 3))         //[20, 30, 40]
console.log(originalArray)                      //[10, 50]
*/

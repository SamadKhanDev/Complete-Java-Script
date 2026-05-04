/*

//---------> Array Part-2 (Involves Concept of Array Merging)

//---------> Array Concatenation(Not recommended)
const name1Array = ["samad", "ahmed", "taha", "ali"]
const name2Array = ["hassan", "hamza"]

name1Array.push(name2Array);      //Merging name2Array into name1Array
console.log(name1Array)           //['samad', 'ahmed', 'taha', 'ali', ['hassan', 'hamza']]

console.log(name1Array[4][0])    // Accessing index number

//---------> Array Concatenation(Simple way)
const newArray = name1Array.concat(name2Array)     //Merging name2Array into name1Array
console.log(name1Array);         

console.log(newArray);            //['samad', 'ahmed', 'taha', 'ali', 'hassan', 'hamza']

//---------> Array Concatenation(More Simple way)
const simpleArray = [...name1Array, ...name2Array]
console.log(simpleArray);         //['samad', 'ahmed', 'taha', 'ali', 'hassan', 'hamza']

//---------> .flat(): removes nested arrays and makes a single flat array

const flatArray = [1 , 3 , 4 ,[1, 2, 3], [4], [4,9,10,11], 10, 20];
console.log(flatArray.flat(Infinity));   //[1, 3, 4, 1, 2, 3, 4, 4, 9, 10, 11, 10, 20]

Notes:
1) .push() = same array + create a nested array
2) .concat() = new array + does not create a neste array
3) ... = copy + merge = new flat array   

*/

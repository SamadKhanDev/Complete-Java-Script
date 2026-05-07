/*

//---------> Functions: (Involves Concept of Array and Object)


function guessAge(age){
        return age
}

//---------> Passing multiple values

console.log(guessAge(20));             //20

function guessAge(...age){
        return age
}

console.log(guessAge(20, 30, 40, 50));   //[20, 30, 40, 50]

function guessAge(val1, val2, ...age){
        return age
}

console.log(guessAge(20, 30, 40, 50));   //[40, 50]

//---------> Functions with Objects

const user ={
        name: "sammu",
        age: 21
}

function handleUser(anyUser){
    console.log(`${anyUser.name} age is ${anyUser.age}`)
}

handleUser(user);                //sammu age is 21

//---------> Functions with Arrays

const myArray = [20, 30, 40, 50, 60]

function returnSecondArray(getArray){
        return getArray[1];
}

console.log(myArray);                                //[20, 30, 40, 50, 60]
console.log(returnSecondArray([20, 30, 40, 50, 60])) // 30


*/

/*
//---------> Objects Part-1: (Invloves Concept of Object Literals)

const obj = {
    key: value 
}

const gender = "male"

const data = {
    name: "SammmuBhaya",
    "sirName": "Khan",
    age: 21,
    email: "abdussamadkhan026@gmail.com",
    isActive: "true",
    lastActive: ["Saturday", "Sunday"],
    [gender] : "MyGender"
}

//---------> Accessing Object Values
console.log(data.name);           //SammuBhaya
console.log(data["email"]);       //abdussamadkhan026@gmail.com
console.log(data["sirName"]);     //Khan
console.log(data[gender])         //MyGender

//---------> Changing Object Values
data.name = "Abdus Samad Khan"
console.log(data.name)            //Abdus Samad Khan 

// Adding function to an object
data.greet = function(){
    console.log(`I Sammu Bhaya!, ${this.email}`)
}

console.log(data.greet())

Notes:
in value we can insert any type of value such as obj, array,number, boolean, function, string etc
if you want that no one can change any object value than use:
Object.freeze(data)
*/
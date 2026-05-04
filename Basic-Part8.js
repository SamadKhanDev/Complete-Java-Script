/*

//---------> Singelton Object
const learnObject = new Object();
console.log(learnObject)       // return: {} 

//---------> Non-Singelton Object
const learnObj = {}
console.log(learnObj)         // return: {}



//---------> Dealing with Nested Objects
const learnObject = new Object()

learnObject.name = "Sammu"
learnObject.age = 21
learnObject.email = "abdussamadkhan026"
learnObject.uni = "SZABIST"

const user = {
    name: "Samad",
    age: 21,
    email: "abdussamadkhanxyz",
    fullName: {
        userFullName:{
        firstame: "Samad",
        lastname: "khan",
    }
}
}

console.log(user.fullName.userFullName);               // {firstame: 'Samad', lastname: 'khan'}
console.log(user.fullName.userFullName.firstame);      //Samad

//---------> Merging Objects

const obj1= {
    a: "10",
    b: "20"
}
const obj2={
    c: "30",
    d: "40"
}

//---------> .assign()

const obj3 = Object.assign(obj1, obj2);
console.log(obj3)                     // {a: '10', b: '20', c: '30', d: '40'}

//---------> ... Spread Operator

const obj3 = {...obj1, ...obj2};
console.log(obj3)                     // {a: '10', b: '20', c: '30', d: '40'}

//---------> Keys(),values(), entries()

const demoUser =[
    {
        id: 1,
        name: "samad"
    },
    {
        id:2,
        name: "taha",
        email: "taha@example.com"
    },
    {
        id:3,
        name: "Arham" 
    }
]
console.log(Object.keys(demoUser));       //['0', '1', '2']
console.log(Object.values(demoUser));     //['samad', taha, Arham] 
console.log(Object.entries(demoUser));    //[['1', 'samad', '2', 'taha', '3', 'Arham']]

//---------> It checks if an object has a specific property (key)
console.log(demoUser.hasOwnProperty("email"));

Notes:
1) .assign() = copy + merge objects
2) keys = names
3) values = data
4) entries = Key + value
*/
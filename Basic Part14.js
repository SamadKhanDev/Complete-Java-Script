//----------> this Vs Arrow Functions

/*
this: refers to current context

//----------> this with Object

const user = {
    name: "Abdus Samad Khan",
    uni: "SZABIST",
    test: function(){
            console.log(`Hi ${this.name}, do you study at ${this.uni}?`) //Hi Abdus Samad Khan, do you study at SZABIST?
            console.log(this); // {name: 'Abdus Samad Khan', uni: 'SZABIST', test: ƒ}
    }
}
console.log(this);                         //{}
user.test()

//---------->this with normal function

function thisTest(){
    let name = "sammu"
    console.log(this.name);        //undefined
}
thisTest()

//----------> this with function expression

const thisTest = function(){
    let name = "sammu"
    console.log(this.name)        //undefined
}
thisTest()

//----------> this with arrow function


const thisTest = ()=>{
    let name = "sammu"
    console.log(this.name)        //undefined 
    console.log(name)             //sammu      
}
thisTest()

*/
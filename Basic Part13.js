/*
//---------> Scopes: Part-2


//---------> Scope levels with Nested Function

function BigBrother(){
    const user = "samad"
    function littleBrother(){
            const age = 21;
            console.log(user);           //samad
    }
    littleBrother()
    console.log(age)                     // can't access
}  

BigBrother()

//---------> Scope levels with Nested if

if(true){
    const name = "sammu"
    if(name === "sammu"){
        const age = 21;
        console.log(name);          //sammu
    }
    console.log(age)                //can't access
}
*/
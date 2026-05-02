
/*
//---------> Strings


*/

const name = "Samad"
const steps = 50;

console.log("Hellow "+name + " your rank is "+steps)

// Template Literals:
console.log(`Hellow ${name} your rank is ${steps}`)

const realName = new String('SammuBhaya');

console.log(realName[4]);      //u
console.log(realName.length);  //10

// At which index, Character is ? :
console.log(realName.charAt(3)) //m

// (starter, end-1)
const newString = realName.substring(0, 5)
console.log(newString)           //Sammu

// SammuBhaya
const anotherString = realName.slice(0, 5);
console.log(anotherString)       //Sammu

const trimString = "    Sammu    "
console.log(trimString);           //     Sammu
console.log(trimString.trim());    //Sammu

const url = "https://github.com/SamadKhanDev"
console.log(url.replace('mad', 'mmu')); //  https://github.com/SammuKhanDev


console.log(url.includes('github'));  //true

console.log(realName.split(""));



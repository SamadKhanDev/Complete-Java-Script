
/*
//---------> Strings


*/

const name = "Samad"
const steps = 50;

//---------> Old Way
console.log("Hellow "+name + " your rank is "+steps)

//---------> Modern Way using template literals
console.log(`Hellow ${name} your rank is ${steps}`)

//---------> String Object 
const realName = new String('SammuBhaya');

console.log(realName[4]);      //u
console.log(realName.length);  //10

//---------> .charAt()
// At which index, Character is ? :
console.log(realName.charAt(3)) //m

//---------> .substring()
const newString = realName.substring(0, 5)  // (starter, end-1)
console.log(newString)           //Sammu

//---------> .slice()
const anotherString = realName.slice(0, 5);
console.log(anotherString)            //Sammu

//---------> .trim()
const trimString = "    Sammu    "
console.log(trimString);              //     Sammu
console.log(trimString.trim());       //Sammu

//---------> .replace()
const url = "https://github.com/SamadKhanDev"
console.log(url.replace('mad', 'mmu'));    //https://github.com/SammuKhanDev

//---------> .includes()
console.log(url.includes('github'));       //true

//---------> .split()
console.log(realName.split(""));           // ['S', 'a', 'm', 'm', 'u', 'B', 'h', 'a', 'y', 'a']



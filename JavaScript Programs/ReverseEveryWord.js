const prompt = require("prompt-sync")();
let sentence=prompt("Enter the sentence ");
const arr=sentence.split(" ");
let newst="";
arr.forEach((element)=>{
    const arr1=element.split("");
    arr1.reverse();
    arr1.forEach((element)=>{
        newst+=element;
    })
    newst+=" ";
    

})
console.log(newst);

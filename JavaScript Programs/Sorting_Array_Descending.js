const prompt=require("prompt-sync")();
let num=prompt("enter the number of element you want");
const arr=[];
for(let i=0;i<num;i++){
    arr.push(prompt("enter the elements"));
}
arr.sort((a,b)=>{
    return b-a;
})
console.log(arr);
// function add(a, b) {
//     let sum=0;
//     console.log(arguments);//argument gives array of elements,i works only in functiion
//     for(let i=0;i<arguments.length;i++){
//     sum+=arguments[i];
//    }
//    return sum;
// }
// const result=add(5,10,6,2);//it will ignore 6,2 in js functions
// console.log(result);
// const result2=add(1,2,3);
// console.log(result2);
//**arrrow function  */ argument cant be used in arrw functions,it can be used only in funtcions
const addAsArrow=(numbers)=>{
let sum=0;
for(let index=0;index<numbers.length;index++){
    const element=numbers[index];
    sum+=element;
}
return sum;
}
console.log(addAsArrow([1,2,3]));
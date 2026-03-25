var a=10;
const j=12;//constant
//j=12;//constants cannot be reinitialized
console.log(j+1);
/**using let */
for(var index=0;index<10;index++){
    console.log(index);
}
console.log(index);
/**using const inside block */
// for(const index=0;index<10;index++){
//     console.log(index);
// }
//console.log(index);

let num=10;
let str="navaneeth";
let isTrue=true;
let array=[1,2,3];
console.log(array);
let obj={name:"A"};
let i=1;
while(i>10){
    console.log(i--);
}
// function demo(){
//     let numbers=[1,2,3,4,5];
//     numbers.map((value,index)=>{
//         console.log(value);
//     })
// }
// demo()

//in js map doesnot modify original array
const callbackfun = (value, index) => {
    console.log(value, index);
    return value + 1;

}
function demo1() {
    let numbers = [1, 2, 3, 4, 5];
    const incremented = numbers.map(callbackfun);
    console.log(incremented);
    console.log(numbers);

}
demo1()

function filterdemo() {
    let numbers = [1, 2, 3, 4, 5];
    const incremented = numbers.filter((value) => {value % 2 == 0} );
    console.log(incremented);
    console.log(numbers);
}
filterdemo()

function printPyramid(){
    let star="*";
for(let i=0;i<5;i++){
  let pattern=""
for(let j=5;j>i;j--){
    pattern +=star;
}
console.log(pattern);
}
}
printPyramid()
// class User{
//     name="navaneeth";
// }
// const u1=new User();
// console.log(u1.name);
// let i=2;
// let string=i.toString();

// const User1={
//     name:"raj",
//     address:{
//     houseNo:75,
//     street:"kayyar",
//     pin:45345
//     }
// }
// console.log(User1.name);
// console.log(User1.address.street);

const user2=[
    {id:1,name:"rajesh",active:true},
    {id:2,name:"punith",active:false},
    {id:3,name:"jakson",active:true}
];
// console.log(user2[0]);
function countActive(){
// for(let iterate=0;iterate<user2.length;iterate++){
//     if(user2[i].active==true){
//         console.log(user2[i]);
//     }
// }
// return user2.filter((value,index)=>{
//     return user2.acive;
// });
// user2[0].acive=false;
// }
user2.forEach((user)=>{
    user2.active=!user2.active;
});
console.log(user2);
}
countActive(user2);

//objext to string
const user={name:"john",age:20};
let jsonStr=JSON.stringify(user);
let temp=JSON.parse(jsonStr);
temp.isAdult=temp.age>=18;
let finalObj=temp;
console.log(finalObj);

//count frequency
const users=[
    {name:"A",role:"admin"},
    {name:"B",role:"user"},
    {name:"C",role:"admin"}
];

const freq=users.reduce((result,user)=>{
    result[user.role]=(result[user.role]||0)+1;
    return result;
},{});
console.log(freq);

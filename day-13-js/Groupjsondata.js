
const users=[
    {name:"A",role:"admin",salary:4000},
    {name:"B",role:"user",salary:3000},
    {name:"A",role:"admin",salary:4000}
];
function groupByRole(users){
const grouped=users.reduce((acc,user)=>{
    if(!acc[user.role])acc[user.role]=[];
    acc[user.role].push(user);
    return acc;
    },{});
    console.log(grouped);
} 
function groupBysalary(users){
    const groupedsalary=users.reduce((acc,user)=>{
        if(!acc[user.salary])acc[user.salary]=[];
        acc[user.salary].push(user);
        return acc;
    },{});
    console.log(groupedsalary);
}
groupByRole(users);
groupBysalary(users);
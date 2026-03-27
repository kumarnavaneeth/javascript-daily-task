const users=[
    {name:"A",age:20},
    {name:"B",age:30},
    {name:"C",age:25}
];
users.sort((a,b)=>{
    if(a.age!==b.age) return a.age-b.age;
    return a.name.localeCompare(b.name);
});
console.log(users);
//remove duplicate
 const arr=[
    {id:1,name:"A"},
    {id:2,name:"B"},
    {id:1,name:"A"}
 ];
 const unique=Array.from(
    new Map(arr.map(item=>[item.id,item])).values()
 );
 console.log(unique);
 
function diff(a,b){
    const result={};
    for(let key in b){
        if(a[key]!==b[key]){
            result[key]={old:a[key],new:b[key]};
        }
    }
    return result;
}
const a={name:"A",age:20};
const b={name:"A",age:21};
console.log(diff(a,b));

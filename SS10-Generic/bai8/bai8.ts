function mergeObject<T extends object>(...objs:T[]):T{
    let mergeObj={...objs[0]};
    for(let obj of objs){
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                mergeObj[key]=obj[key];
            }
        }
    }
    return mergeObj;
}
let obj1={
    a:1,
    b:{
        c:2,
        d:[3,4],
    }
}
let obj2={
    b:{
        c:6,
        d:[7,8],
    },
    e:0,

}
console.log(mergeObject([obj1,obj2]));
console.log(obj1);



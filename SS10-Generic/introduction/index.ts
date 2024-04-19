//viết 1 funtion reverse các phần tử trong mảng
function reverse(param:Array<number>):number[]{
    return param.reverse();
}
function merge<T extends object,U>(param1:T,param2:U):T&U{
    return Object.assign(param1,param2);
}

/*sự khác nhau type và interface
type: có thể dùng union và Intersection
      không thể kế thừa được
      thường khai báo kiểu dữ liệu
interface: không thể dùng union và Intersection
      có thể kế thừa được
      có thể implements(triển khai) bởi class
      thường khai báo thuộc tính và phương thức
*/
function test3(param:{name:string,age:number}){
    return{...param,info:param.name+param.age}
}
let result=test3({name:"ngoc",age:19});
console.log(result)
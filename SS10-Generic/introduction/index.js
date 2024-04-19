"use strict";
//viết 1 funtion reverse các phần tử trong mảng
function reverse(param) {
    return param.reverse();
}
function merge(param1, param2) {
    return Object.assign(param1, param2);
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
function test3(param) {
    return Object.assign(Object.assign({}, param), { info: param.name + param.age });
}
let result = test3({ name: "ngoc", age: 19 });
console.log(result);

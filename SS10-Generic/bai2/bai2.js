"use strict";
function convert(arr, index1, index2) {
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
    return arr;
}
console.log(convert([1, 2, 3, 4, 5], 1, 3));

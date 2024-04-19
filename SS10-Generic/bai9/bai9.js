"use strict";
// let newArray=[] as any;
// function decayArray<T>(arr:(T|T[])[]){
//     console.log(arr);
//     for(let item of arr){
//         console.log(item);
//         if(Array.isArray(item)){
//             decayArray(item);
//         }else{
//            newArray.push(item);
//         }
//     }
// }
// let arr=[1, [2, [3, 4]], 5,[6]];
// decayArray(arr);
// console.log(newArray);
function decayArray(arr) {
    let newArray = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            newArray.push(...decayArray(item));
        }
        else {
            newArray.push(item);
        }
    }
    return newArray;
}
let arr = [1, [2, [3, 4]], 5, [6]];
console.log(decayArray(arr));

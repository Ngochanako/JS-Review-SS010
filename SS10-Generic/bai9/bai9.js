"use strict";
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

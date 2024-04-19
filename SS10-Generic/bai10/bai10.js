"use strict";
function calculate(num1, num2) {
    num1 = typeof (num1) === 'number' ? num1 : parseFloat(num1);
    num2 = typeof (num2) === 'number' ? num2 : parseFloat(num2);
    //kiểm tra có phải là số không
    if (!isNaN(num1) && !isNaN(num2)) {
        return num1 + num2;
    }
    else {
        return "Không phải là số";
    }
}
console.log(calculate(1, 2));
console.log(calculate(1, '2'));

"use strict";
let var1;
let var2;
let var3;
console.log("var1:", var1); // Kết quả: undefined
console.log("var2:", var2); // Kết quả: undefined
console.log("var3:", var3); // Kết quả: undefined
// Biến var1 có kiểu dữ liệu undefined, và không gán giá trị cho nó, do đó khi in ra, kết quả sẽ là undefined.
// Biến var2 được khai báo với kiểu dữ liệu union number | undefined, nhưng không gán giá trị cho nó, do đó kết quả cũng sẽ là undefined.
// Biến var3 không được gán kiểu dữ liệu cụ thể, vì vậy TypeScript coi nó là kiểu any. Tuy nhiên, vì không gán giá trị cho nó, kết quả khi in ra vẫn là undefined.
// Điều này cho thấy rằng các biến được khai báo như trên đều có giá trị mặc định là undefined khi không gán giá trị cho chúng.

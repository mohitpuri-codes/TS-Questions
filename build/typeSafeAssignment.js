"use strict";
const add1 = (num) => num + 1;
const double = (num) => num * 2;
const subtract10 = (num) => num - 10;
// const composedFn = compose(subtract10, double, add1);
// composedFn(3); // (3 + 1) * 2 - 10 => -2
function compose(...args) {
    return function composite(num) {
        let arr = args;
        let res = 0;
        // console.log(arr);
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] == null)
                continue;
            if (i === arr.length - 1)
                res = arr[i](num);
            else {
                // console.log(arr[i]);
                res = arr[i](res);
                // console.log("res", res);
            }
        }
        return res;
    };
}
const composedFn = compose(subtract10, double, add1);
console.log(composedFn(3));

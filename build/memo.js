"use strict";
function yedd(...args) {
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}
function memo(func) {
    let map = new Map();
    return function (...args) {
        console.log(args);
        let argString = args.join();
        if (map.has(argString)) {
            console.log("cached value:", map.get(argString));
        }
        else {
            console.log("new entry");
            let sum = func(...args);
            console.log(sum);
            map.set(argString, sum);
            return sum;
        }
    };
}
let remember = memo(yedd);
remember(1, 2, 3);
remember(1, 2, 3);
remember(1, 2, 3, 4);

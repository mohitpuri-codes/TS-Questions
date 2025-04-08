"use strict";
const promise10 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise 1 rejected");
    }, 6000);
});
const promise11 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise 2 resolved");
    }, 4000);
});
const promise12 = new Promise((resolve, reject) => {
    resolve("promise 3 resolved");
});
const now = new Date();
async function exeSeq(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(await arr[i]);
        res.push(now.toLocaleString());
        console.log(i);
    }
    console.log(res);
}
exeSeq([promise10, promise11, promise12]);

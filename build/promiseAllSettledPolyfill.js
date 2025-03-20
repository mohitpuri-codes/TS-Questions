"use strict";
// Todo: create a polyfill for promiseAllSettled
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise 4 rejected");
    }, 2000);
});
const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("promise 5 resolved");
    }, 2000);
});
const promise6 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("promise 6 resolved"); }, 6000);
});
function myAllSettled(args) {
    return new Promise((resolve, reject) => {
        let result = [];
        args.forEach((value, index) => {
            value.then((value) => {
                result.push({ status: "fulfilled", value: value });
                if (args.length === result.length)
                    resolve(result);
            })
                .catch((err) => {
                result.push({ status: "rejected", reason: `${err}` });
                if (args.length === result.length)
                    resolve(result);
            });
        });
    });
}
myAllSettled([promise4, promise5, promise6])
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

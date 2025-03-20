const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise 1 rejected");
  }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2 resolved");
  }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
  resolve("promise 3 resolved");
});

Promise.myall = function (args) {
  return new Promise((resolve, reject) => {
    let result = [];
    let total = 0;
    args.forEach((value, index) => {
      Promise.resolve(value)
        .then((res) => {
          result[index] = res;
          total++;
          if (total === args.length) {
            resolve(result);
          }
        })
        .catch((err) => reject("one or more promise failed"));
    });
  });
};

Promise.myall([promise1, promise2, promise3])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

console.log();

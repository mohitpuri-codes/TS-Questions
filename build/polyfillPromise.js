let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});

const prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved First after 2 seconds");
  }, 2000);
});

const prom3 = 20;

Promise.myAll = function (values) {
  return new Promise((resolve, reject) => {
    let result = [];
    let total = 0;
    values.forEach((item) => {
      Promise.resolve(item, index).then((res) => {
        result[index] = res;
        total++;
        // if(total===values.len)
      });
    });
  });
};

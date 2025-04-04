const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 1 rejected");
  }, 2000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2 resolved");
  }, 1000);
});
const promise3 = new Promise((resolve, reject) => {
  resolve("promise 3 resolved");
});

// todo: create polyfill for promise.all

const promise1:Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 1 rejected");
  }, 2000);
});
const promise2:Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2 resolved");
  }, 2000);
});
const promise3:Promise<string> = new Promise((resolve, reject) => {
  resolve("promise 3 resolved");
});


function myAll(args:Array<Promise<string>>):Promise<any> {
  return new Promise((resolve, reject) => {
    let result:Array<string> = [];
    let total = 0;
    args.forEach((value, index) => {
      value
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

myAll([promise1,promise2,promise3]).then((res)=>{
  console.log(res);
  
}).catch((err)=>console.log(err)
)


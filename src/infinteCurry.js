// function multiply(...args){
//   let res = 1
//   for (const el of args) {
//     res *=el
//   }
//   return res;
// }

function curry(a) {
  let sum = a;
  return function curried(b) {
    sum += b;
    curried.toString = () => {
      return sum;
    };
    return curried;
  };
}

// let ans = curry(1);
// console.log(ans(2));

console.log(curry(1)(2)(3)(4));

const obj = {
  a: {
    b: {
      c: [10, 11, 12],
    },
    d: "awesome",
  },
};

function get(obj, str) {
  const arr = str.split(".");
  // console.log(arr);
  let res = obj[arr[0]];
  for (let i = 1; i < arr.length; i++) {
    res = res[arr[i]];
  }
  console.log(res);
}

get(obj, "a.b.c"); // [10,11,12]
get(obj, "a.d"); // "awesome"
get(obj, "a.b.c.1");

const objek = { name: "Virat kohli", details: { age: 35 } };
// console.log(String(objek)); //"[object Object]"
// console.log(String(objek)); // "Awesome Object"

objek.toString = function () {
  return `${objek.name}--${objek.details.age}`;
};
console.log(String(objek)); // "Virat Kohli--35"

function myFn() {
  return "returned from my Fn";
}

myFn.toString = function () {
  return "returned from my Fn";
};

console.log(myFn);
/**
 * function myFn() {
    return "returned from my Fn";
}
 */

console.log(myFn); // "awesome function"

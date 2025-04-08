console.log(0 == false);
console.log("" == false);
console.log([] == false);
console.log(undefined == false);
console.log(null == false);
console.log("1" == true);
console.log(1n == true);
console.log(" 1     " == true);
console.log(null === undefined);
console.log(null == undefined);
console.log(null == 0);
console.log(null < 0);
console.log(null > 0);
console.log(null <= 0);
console.log(null >= 0);
console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);
console.log(undefined <= 0);
console.log(undefined >= 0);

// boolean are convered to number.
// string == number ⇒ string converted to number.
// if x==y ⇒x is string or number and y is object then y is converted to its primitive value
//
console.log([1] == 1);
console.log([1] == "1");
console.log(["1"] == "1");
console.log(["1"] == 1);
console.log([1] == ["1"]);
console.log(new Boolean(true) == 1);
console.log(new Boolean(true) == new Boolean(true));
console.log(Boolean(true) == "1");
console.log(Boolean(false) == [0]);
console.log(new Boolean(true) == "1");
console.log(new Boolean(false) == [0]);

const func1 = () => console.log(1);
func1();
func2();
function func2() {
  console.log(2);
}
func3();

var func3 = function func4() {
  console.log(3);
};

let xd = 10;

function test() {
  let x = 20;

  console.log(x);
}

test();

console.log(x);

let x = 10;

function test() {
  console.log(x);

  let x = 20;
}

test();

console.log(x);

console.log([] + []);
console.log([] + 1);
console.log([[]] + 1);
console.log([[1]] + 1);
console.log([[[[2]]]] + 1);
console.log([] - 1);
console.log([[]] - 1);
console.log([[1]] - 1);
console.log([[[[2]]]] - 1);
console.log([] + {});
console.log({} + {});
console.log({} - {});

const obj = {
  dev: "awesome",
  a: function () {
    return this.dev;
  },
  b() {
    return this.dev;
  },

  c: () => {
    return this.dev;
  },

  d: function () {
    return (() => {
      return this.dev;
    })();
  },
  e: function () {
    return this.b();
  },
  f: function () {
    return this.b;
  },
  g: function () {
    return this.c();
  },
};

function hello() {
  console.log(this);
}
const obj = {
  sayIt: "name",
  func1: hello,
  func2: function () {
    console.log(this);
  },
};

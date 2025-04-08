function* sequenceGenerator() {
  yield 1;
  yield 2;
  return 3;
}

let generator = sequenceGenerator();

// let one = generator.next();
// let two = generator.next();
// let three = generator.next();
// console.log(one);
// console.log(two);
// console.log(three);

console.log("first", ...generator); // 0,1,2

// generators are iterable using for..of loop
for (const element of generator) {
  console.log(element);
}

// symbol iterator can be used to create generators - > generators were introduced so that the symbol iterators gets simplified
let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  },
};

console.log(...range);

// composite genertaors: generator passed into another generator

function* genOne(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

function* genPassword() {
  yield* genOne(1, 5);
  yield* genOne(6, 10);
  yield* genOne(11, 15);
}

// console.log(...genPassword());

for (const element of genPassword()) {
  console.log(element);
}

// yield is a two way street

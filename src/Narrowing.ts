// TODO: using type of

function narrowTypeOf(arg: string | string[]) {
  if (typeof arg === "object") console.log("array of string");
  else console.log("string");
}

// narrowTypeOf("abs");
// narrowTypeOf(["1", "2"]);

// TODO: truthiness narrowing

// function getUsersOnlineMessage(numUsersOnline: number) {
//   if (numUsersOnline) {
//     return `There are ${numUsersOnline} online now!`;
//   }
//   return "Nobody's here. :(";
// }

function checkTruthiness(str: string | null) {
  const val = Boolean(str);
  console.log(typeof val);

  // if (val) str.length;
}
// function checkTruthiness(str: string | null) {
//   const val = !!str;
//   console.log(typeof val);

//   if (val) str.length;
// }

checkTruthiness(null);
checkTruthiness("ok");

// TODO: type predicates

type doggy = {
  bark: () => void;
};

type kitty = {
  meow: () => void;
};

function checkDog(animal: doggy | kitty): animal is doggy {
  return (animal as doggy).bark !== undefined;
}

function checkDogOrCat(animal: doggy | kitty) {
  if (checkDog(animal)) {
    animal.bark();
  } else {
    animal.meow();
  }
}

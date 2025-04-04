//todo Q1. modify createDataShape type and make it generic so that it creates shape of {data:... , error:...} as per the received type
// ex.
type CreateDataShape<T, U extends Error = SyntaxError> = {
  data: T;
  error: U;
};

type MyShape = CreateDataShape<string, TypeError>;
/*
  {data:string, error:TypeError}
*/
// type MyShape11 = CreateDataShape<boolean, "ki">;
/*
  {data:boolean, error:SyntaxError}
*/

//todo Q.2 modify above question such that if no Error type is passed then default error type will be TypeError.

type MyShape2 = CreateDataShape<boolean>;
/*
{data:boolean, error:SyntaxError}
*/

//todo Q.3 create maybe type that receives any type(not typescript any, here any means any kind of type) except null and undefined

type Maybe1<T extends {}> = T | null | undefined;

type StringCanBe1 = Maybe1<string>; // string | null |undefined
type ZeroCanbe = Maybe1<0>; // 0 | null |undefined
type EmptyStringCanbe = Maybe1<"">; // "" | null |undefined
// type NullCanbe = Maybe1<null>; // TS error
// type UndefinedCanbe = Maybe1<undefined>; // TS error

//todo Q.4 in below function, we recieves array of any(not typescript any) in argument,
//and second argument which can be any(not typescript any) type of element, and we are prepending that element into given array.

// const prepend = <T,U>(args: Array<T>,pre:U):??? => {
//   return [pre,...args];

// }
// const arr=prepend(['1'],{department:"react"})

// arr[0].department // works
// arr[1].charAt() .... // works
// arr[0].charAt() // error
// arr[1].department .... // error

//todo Q.5 in below function in argument we recieves array of any(not typescript any).
// we want to make it typesafe in such a way that typescript should throw error if array is empty.

type NonEmptyArray<T> = [T, ...T[]];
// solution 2:
// type NonEmptyArray<T> = T[] & { 0: T };
const ourArr = <T>(myArr: NonEmptyArray<T>) => {
  console.log(myArr);
};
ourArr(["golang"]); // works
ourArr([true]); // works
// ourArr([]); // ERROR

// CONDITIONS IN TYPES!!!
// TODO Q.6 make type such that if you pass "goodbye" literal type then you return "hello" literal type.else return never type
// why never? "the never type represents the type of values that never occur."

type YouSayGoodbyeAndISayHello<T> = T extends "goodbye" ? "hello" : never;
type IsHello = YouSayGoodbyeAndISayHello<"goodbye">; // hello
type IsNotHello = YouSayGoodbyeAndISayHello<true>; // never

// ================

// follow-up question of above question
// if you pass "goodbye" then you should return "hello"
// else you should return "hello"
type YouSayGoodbyeAndISayHello2<T> = T extends "goodbye" ? "hello" : "hello";
type allHello = YouSayGoodbyeAndISayHello2<"goodbye">;
type allHello1 = YouSayGoodbyeAndISayHello2<"ko">;

// =====================

// follow-up question of above question
//   if you pass "goodbye" then you should return "hello"
//   if you pass "hello" then you should return "goodbye"
// if you pass anything else then you should return never

type YouSayGoodbyeAndISayHello3<T> = T extends "goodbye"
  ? "hello"
  : T extends "hello"
  ? "goodbye"
  : never;
type followAllHello = YouSayGoodbyeAndISayHello3<"goodbye">;
type followAllHello2 = YouSayGoodbyeAndISayHello3<"hello">;
type followAllHello1 = YouSayGoodbyeAndISayHello3<"ko">;

// todo: Extract all keys of an object as an array of strings?
const user = { name: "John", age: 30 }; // Expected Result:["name", "age"]// When you get the result, try to check it's type, it shouldn't be the type of `string[]`. Instead it should be ("name" | "age")[].

const keys = Object.keys(user) as Array<keyof typeof user>;

// todo Extract First and Last Element of Tuple using Generic.

// type A = First<[1, 2, 3]>; // Res: 1type D = Last<["JSGenie", "is", "awesome"]>;  // Res: "awesome"

//todo: create a generic type GetSurname that  recieves string as argument and it returns second string as type
type Names = ["virat kohli", "rohit sharma", "shreyas iyer"];

type GetSurname<T> = T extends `${infer First} ${infer Last}` ? Last : never;

type IsKohli = GetSurname<Names[0]>; //"kohli"
type IsSharma = GetSurname<Names[1]>; // "sharma"
type IsIyer = GetSurname<Names[2]>; // "iyer"

//todo: create a type that INFERS type of props that is returned from getServerSideProps.
const getServerSideProps = async () => {
  const res = await fetch("some-url");
  const json: { title: string } = await res.json();
  return {
    props: { json },
  };
};

type S = ReturnType<typeof getServerSideProps>;

type InferProps<T> = T extends () => Promise<{ props: infer S }> ? S : never;

type PropsType = InferProps<typeof getServerSideProps>;
/**
 json: {
        title: string;
    }
 */

//todo: Extract only the last word

type GetLastWord<T extends string> = T extends `${infer rest} ${infer last}`
  ? GetLastWord<last>
  : T;

type L1 = GetLastWord<"The quick brown fox">; // "fox"
type L2 = GetLastWord<"Hello world">; // "world"

//todo: Swap First and Last Name

type SwapName<T extends string> = T extends `${infer First} ${infer Last}`
  ? `${GetLastWord<Last>} ${First}`
  : never;

type S1 = SwapName<"John Doe">; // "Doe John"
type S2 = SwapName<"Alice ijio jpojpo hiojuo Johnson">; // "Johnson Alice"

// todo:
type User1213 = {
  id: number;
  name: string;
  email: string;
  age: number;
};

function updateUser(user: User1213, updates: Partial<User1213>): User1213 {
  const updatedUser13 = { ...user, ...updates };
  return updatedUser13;
}

const user31231: User1213 = {
  id: 1,
  name: "Bhavik",
  email: "bhavik@example.com",
  age: 25,
};

const updatedUser = updateUser(user31231, { name: "Bhavik Thanki", age: 26 });

console.log(updateUser(user31231, { id: 312 }));

// todo:rverse Array in types

// type Reverse<T> = T extemnds;

// type A = Reverse<[1, 2, 3]>;   // Expected: [3, 2, 1]
// type B = Reverse<['a', 'b']>;  // Expected: ['b', 'a']

// given a string,reverse it and return it as type (recursion + infer)
type ReverseString<T extends string> = T extends `${infer S}${infer Y}`
  ? `${ReverseString<Y>}${S}`
  : T;
type R1 = ReverseString<"hello">; // R1 should be 'olleh

// given nested array, flatten it! (recursion + infer)
type FlattenOnce<T extends any[]> = T extends [infer S, ...infer R]
  ? S extends any[]
    ? [...FlattenOnce<S>, ...FlattenOnce<R>]
    : [S, ...FlattenOnce<R>]
  : [];
type F1 = FlattenOnce<[1, [2, 3], [4, [5]]]>; //F1 should be [1,2,3,4,5]

// given string, trim left spaces. (recursion + infer)
type TrimLeft<T extends string> = T extends ` ${infer S}` ? TrimLeft<S> : T;
type trimmed = TrimLeft<"  Hello World  ">; // type of trimmed should be "Hello World  "

// create type RouteObj in such a way that it returns object where both key and value are member of the union
type Route = "/" | "/routes" | "/admin";
type RouteObj = { [Key in Route]: Key };

const objek: RouteObj = {
  "/": "/",
  "/admin": "/admin",
  "/routes": "/routes",
};

//Given interface of Object, create type in a way that every key is now function that return approriate type
type Attributes = {
  name: string;
  age: number;
  isPlayer: boolean;
};

const attr: Attributes = {
  age: 21,
  name: "mohit",
  isPlayer: true,
};
type att = (typeof attr)[keyof typeof attr];
type AttributeGetter = { [Key in keyof Attributes]: () => Attributes[Key] };
/**
  type of AttributeGetter should be...
  {
      name: () => string;
      age: () => number;
      isPlayer: () => boolean;
  }
  */

type myPick<T, K extends keyof T> = { [P in K]: T[P] };
type customPick = myPick<Attributes, "name">;

//todo Q1. modify createDataShape type and make it generic so that it creates shape of {data:... , error:...} as per the received type
// ex.
type CreateDataShape<T,U extends Error = SyntaxError>={
data:T,
error:U
}

type MyShape=CreateDataShape<string,TypeError> 
/*
  {data:string, error:TypeError}
*/
  type MyShape11=CreateDataShape<boolean,'ki'> 
  /*
  {data:boolean, error:SyntaxError}
*/

//todo Q.2 modify above question such that if no Error type is passed then default error type will be TypeError.
 
type MyShape2=CreateDataShape<boolean>
/*
{data:boolean, error:SyntaxError}
*/

//todo Q.3 create maybe type that receives any type(not typescript any, here any means any kind of type) except null and undefined


type Maybe1<T extends {}>=T|null|undefined


type StringCanBe1=Maybe1<string>  // string | null |undefined
type ZeroCanbe=Maybe1<0>  // 0 | null |undefined
type EmptyStringCanbe=Maybe1<"">  // "" | null |undefined
type NullCanbe=Maybe1<null>  // TS error
type UndefinedCanbe=Maybe1<undefined>  // TS error

//todo Q.4 in below function, we recieves array of any(not typescript any) in argument,
//and second argument which can be any(not typescript any) type of element, and we are prepending that element into given array.
 
 
const prepend = <T,U>(args: Array<T>,pre:U):??? => {
  return [pre,...args];
 
}
const arr=prepend(['1'],{department:"react"})
 
arr[0].department // works
arr[1].charAt() .... // works 
arr[0].charAt() // error
arr[1].department .... // error


//todo Q.5 in below function in argument we recieves array of any(not typescript any).
// we want to make it typesafe in such a way that typescript should throw error if array is empty.
 
type NonEmptyArray<T>= [T, ...T[]]
// solution 2:
// type NonEmptyArray<T> = T[] & { 0: T };
const ourArr = <T>(myArr:NonEmptyArray<T>)=>{
	console.log(myArr);
}
ourArr(["golang"]) // works
ourArr([true]) // works
ourArr([]) // ERROR

// CONDITIONS IN TYPES!!!
// TODO Q.6 make type such that if you pass "goodbye" literal type then you return "hello" literal type.else return never type
// why never? "the never type represents the type of values that never occur."
 
type YouSayGoodbyeAndISayHello<T>= T extends 'goodbye'? 'hello':never 
type IsHello=YouSayGoodbyeAndISayHello<"goodbye"> // hello
type IsNotHello=YouSayGoodbyeAndISayHello<true> // never
 
// ================
 
// follow-up question of above question
// if you pass "goodbye" then you should return "hello"
// else you should return "hello"
type YouSayGoodbyeAndISayHello2<T>= T extends 'goodbye'? 'hello':'hello' 
type allHello = YouSayGoodbyeAndISayHello2<'goodbye'>
type allHello1 = YouSayGoodbyeAndISayHello2<'ko'>
 
// =====================
 
// follow-up question of above question
//   if you pass "goodbye" then you should return "hello"
//   if you pass "hello" then you should return "goodbye"
// if you pass anything else then you should return never

type YouSayGoodbyeAndISayHello3<T>= T extends 'goodbye'? 'hello': T extends 'hello' ? 'goodbye':never
type followAllHello = YouSayGoodbyeAndISayHello3<'goodbye'>
type followAllHello2 = YouSayGoodbyeAndISayHello3<'hello'>
type followAllHello1 = YouSayGoodbyeAndISayHello3<'ko'>
"use strict";
// solution 2:
// type NonEmptyArray<T> = T[] & { 0: T };
const ourArr = (myArr) => {
    console.log(myArr);
};
ourArr(["golang"]); // works
ourArr([true]); // works
// todo: Extract all keys of an object as an array of strings?
const user = { name: "John", age: 30 }; // Expected Result:["name", "age"]// When you get the result, try to check it's type, it shouldn't be the type of `string[]`. Instead it should be ("name" | "age")[].
const keys = Object.keys(user);
//todo: create a type that INFERS type of props that is returned from getServerSideProps.
const getServerSideProps = async () => {
    const res = await fetch("some-url");
    const json = await res.json();
    return {
        props: { json },
    };
};
function updateUser(user, updates) {
    const updatedUser13 = { ...user, ...updates };
    return updatedUser13;
}
const user31231 = {
    id: 1,
    name: "Bhavik",
    email: "bhavik@example.com",
    age: 25,
};
const updatedUser = updateUser(user31231, { name: "Bhavik Thanki", age: 26 });
console.log(updateUser(user31231, { id: 312 }));
const objek = {
    "/": "/",
    "/admin": "/admin",
    "/routes": "/routes",
};
const attr = {
    age: 21,
    name: "mohit",
    isPlayer: true,
};

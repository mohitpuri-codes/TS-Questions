"use strict";
//todo write a typesafe function who accepts object and any property key of object. Function should returns value associated with given property key.
function acceptObj(obj, p) {
    return obj[p];
}
// acceptObj({true},"valueOf")
//todo Given a function which receives an arugment and returns a same arugment, make a function typesafe.
// ex. 
// function identity(arg){
//   return arg;
// }
// ex. if identity receives a number it returns a number
function sameArg(arg) { return arg; }
sameArg(2);
//todo 2. Given an above identity function (which receives an argument and returns a same arugment), 
// default arugment should be string if you want to pass nothing.
// ex. identity(); // error we must pass strin
function identity(arg) { return arg; }
identity('ko');
// console.log(identity());
let str = identity(123);
//todo write a typesafe function who accepts any array(array of string, number, object... anything) and returns first element of array if it exists.
function returnFirst(arg) {
    if (arg.length > 0)
        return arg[0];
}
returnFirst(['1']);
//todo Given a logMessage function below, which we are calling  in safeLog function, how will you make safeLog 
// function typesafe such that safelog function also receives same arugment as logMessage function? 
// (NOTE: you are not allowed to modifiy anything in logMessage function. not even a type)
// function logMessage(level: "info" | "error", message: string) {
//   console.log(`[${level.toUpperCase()}] ${message}`);
// }
// function safeLog(...args) {
//   logMessage(...args);
// }
// function logMessage<T> (...args:T[]){
//   console.log(typeof args);
//   console.log( args[0]);
// }
// // logMessage(1,2,3)
// // TODO dbt
// logMessage<string>(['1','2'])
function logMessage(level, message) {
    console.log(`[${level.toUpperCase()}] ${message}`);
}
function safeLog(...args) {
    logMessage(args[0], args[1]);
}
safeLog('error', 'it is error');
let user1 = {
    id: 123,
    name: 'mohit',
    email: 'gmail.com',
    password: 'shush',
    role: "admin"
};
function getSafeUser(user) {
    const { password, role, ...safeUser } = user;
    return safeUser;
}
getSafeUser(user1);
//todo write a typesafe function who accepts object and any property key of object. Function should returns value associated with given property key.
function accObj(objParam, objKey) {
    return objParam[objKey];
}
let obj99 = {
    id: 123,
    username: 'mohit'
};
console.log(accObj(obj99, "id"));
//todo write a typesafe function who any accept object with id property and returns a id.
// ex.
// function getId(arg){
//   return arg.id;
// }
function accAnyObj(obj) {
    return obj.id;
}

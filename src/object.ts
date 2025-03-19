
//todo write a typesafe function who accepts object and any property key of object. Function should returns value associated with given property key.

type Obj1 = {
  name:string,
  age:number
}

type P = keyof Obj1

function acceptObj<T extends object> (obj:T,  p:keyof T){
 return obj[p]
}

// acceptObj({true},"valueOf")


//todo Given a function which receives an arugment and returns a same arugment, make a function typesafe.
// ex. 
// function identity(arg){
//   return arg;
// }
// ex. if identity receives a number it returns a number

function sameArg<T>(arg:T){return arg}
sameArg<number>(2)

//todo 2. Given an above identity function (which receives an argument and returns a same arugment), 
// default arugment should be string if you want to pass nothing.
// ex. identity(); // error we must pass strin

function identity<T = string>(arg:T):T{return arg}
identity<string>('ko')
// console.log(identity());
let str = identity<number>(123)



//todo write a typesafe function who accepts any array(array of string, number, object... anything) and returns first element of array if it exists.

function returnFirst<T>(arg:T[]){
  if(arg.length>0) return arg[0] 
}

returnFirst<string>(['1'])


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

function logMessage(level: "info" | "error", message: string) {
    console.log(`[${level.toUpperCase()}] ${message}`);
  }

type P2 = Parameters<typeof logMessage>

function safeLog<T extends P2>(...args:T){
  logMessage(args[0],args[1]);
}

safeLog('error','it is error')

//todo Below User type is given which has sensitive properties role and password.
// we want to create typesafe function who received user's object and returns same object but with password and role removed.
// type User = {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
//   role: "admin" | "user";
// };
 


  type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    role: "admin" | "user";
  };

  let user1:User = {
    id:123,
    name:'mohit',
    email:'gmail.com',
    password: 'shush',
    role:"admin"
  } 

  type SafeUser = Omit<User,'password'|'role'>

  function getSafeUser<T extends User>(user:T):SafeUser{
    const {password,role,...safeUser} = user 
    return safeUser;
    }

    getSafeUser(user1)



    //todo write a typesafe function who accepts object and any property key of object. Function should returns value associated with given property key.

    function accObj<T extends object>(objParam:T,objKey: keyof T){
      return objParam[objKey]
    }
    type obj00 = {
      id:number,
      username:string
    }
    let obj99:obj00 ={
      id:123,
      username:'mohit'
    } 
    console.log(accObj(obj99,"id"));
    
    //todo write a typesafe function who any accept object with id property and returns a id.
    // ex.
    // function getId(arg){
    //   return arg.id;
    // }

    function accAnyObj<T extends {id:number}>(obj:T):number{
      return obj.id
    }
    
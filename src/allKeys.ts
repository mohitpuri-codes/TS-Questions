// create a type where key is from AllKeys's type and value is string
type AllKeys="userId"|"role"|"email"|"phone"|"dob"
 
type AllWithString = Record<AllKeys,AllKeys[number]>
/**
{
    userId: string;
    role: string;
    email: string;
    phone: string;
    dob: string;
}
*/

// same as previous question but all key's should be in uppercase
type AllEvents="log_in"|"log_out"|"sign_up";
 
type EveryEvents=Record<Uppercase<AllEvents>,AllEvents[number]>
/**
{
    LOG_IN: string;
    LOG_OUT: string;
    SIGN_UP: string;
}
*/

// create Maybe generic type that recieves any(not typescript any, here any means any kind of type) type, and it returns actual type with null and undefined
type StringCanBe=Maybe<string>  // string | null |undefined
type Maybe<T>= T | null | undefined;

// create a generic type that only accepts string and attach "/" prefix to given string
type Adddddd=AddPrefix<"about"> // output will be: "/about"
// type Addd=AddPrefix<2> // ts error

type AddPrefix<T extends string> = `/${T}` 


let userName:string = "mohit"

console.log("-------------");

let arr = [1,2,3,"red"]
let ans = arr.map(ar=>{
  return ar;
})

console.log(ans);

console.log("-------------");

function twoFer(name:string = "you"):string{
  return `one for ${name} , one for me`
}

console.log(twoFer());
console.log(twoFer("mohit"));

console.log("--------------------");

let isLeapYear = (year: number):boolean =>{
  if(year %4 ==0 || year%400 ==0) return true;
  return false;
}

console.log(isLeapYear(2012));

console.log(isLeapYear(2013));

console.log("-------------");

//? object

let printName = (person:{firstName:string, lastName:string}):void =>{
  console.log(`${person.firstName}`)
}

printName({firstName:"mohit",lastName:"go"})

console.log("--------------");

let randomCoordinate = ():{x:number,y:number} =>{
  return {x:44,y:30}
}

console.log(randomCoordinate());


console.log("-----------------");


let obj:{prop1:string,prop2:number}={prop1:"property",prop2:213}
console.log(obj);

console.log("-----------------");
// ? type alias

type Employee = {
  name:string,
  id:number,
  email?: string,
}

let emp1: Employee = {
  name:"mohit",
  id:99
}
let getEmployeeInfo = (employee: Employee) => {
  return `${employee.name} ${employee.email}`
}

console.log(getEmployeeInfo(emp1));
console.log("-----------------");

type product = {
  readonly id : number,
  product_name:string,
}

let product1: product = {
  id:99,
  product_name:"tv",
}

console.log(product1);

// ? movie eg

type Movie = {
  readonly title: string,
  releaseYear:number,
  boxOffice: {
    budget:number,
    grossUS: number,
  }
}

let dune:Movie = {
  title:"dune",
  releaseYear:2021,
  boxOffice:{
    budget:2121,
    grossUS:8989,
  }
}

function getProfit(movie:Movie):number{
  return movie.boxOffice.grossUS - movie.boxOffice.budget
}

console.log(getProfit(dune));


console.log(dune);

// ? array

console.log("------------");

let brr: string[] = ["1"]

console.log("------------");

let crr: (string | number)[][] = []
crr.push(
  ["1",0]
)
crr.push(
  ["1",'2']
)

console.log(crr);

// ? type narrowing using unions

console.log("----------");

function calcTax(profit:number|string, tax:number):number{
  if(typeof profit === 'string'){
    return parseFloat(profit)*tax;
  }
  return profit*tax;
}

console.log(calcTax('669',20));
console.log(calcTax(669,20));

// ? literal types

console.log("-------------");

let dayOfTheWeek : 'monday' | 'tuesday';

dayOfTheWeek="monday"

function answer(ans: 'yes' | 'no'){
  console.log(ans);
  
}

answer("no")

// ? practise union examples

let highScore: number | boolean

highScore=12
highScore=false

let arr2: number[] | string[];

type skillLevel = 'beginner' | 'expert'

type skiSchoolStudent = {
  name:string,
  age:number,
  sport:'ski' | 'snowboard',
  level: skillLevel
} 

// ? tuples 



// ? enums

enum Move{
  UP=10,
  DOWN,
  LEFT,
  RIGHT,
}

function checkMoveUp(move: Move){
  console.log(move===Move.UP);

}

checkMoveUp(Move.DOWN)
checkMoveUp(Move.UP)

//? interface 
console.log("---------------");


interface Person{
  name:string,
  age:number,
  // sayHi: ()=>string,
  sayHi(nickname:string):string,
}

let p1:Person = {
  name:'mohit',
  age:22,
  // sayHi: ()=> {
  //   return p1.name
  // }
  sayHi(nickname: string){
    return `${this.name} ${nickname}`
  }
}

console.log(p1.sayHi('jaiohd'));

console.log("---------------");

enum dogJob{
  DRUGSNIFFFER='drug sniffer',
  MILITARY='military use',
  BOMBDEFUSE='bomb defusal',
}

interface dog{
  name:string,
  breed: string,
}

interface serviceDog extends dog{
  job: dogJob
}

let dog1:serviceDog = {
  name:"gerry",
  breed:'labrador',
  job: dogJob.BOMBDEFUSE,
}

console.log(dog1);

console.log('----------------');

interface human{
  readonly id:number,
  name:string,
}

interface employee{
  readonly id:number,
  job:string,
}

interface engineer extends human,employee{
  typeOfEngineer: string,
}

let engg1:engineer = {
  id:129913,
  name:'mohit',
  job:'intern',
  typeOfEngineer:'react'
}

console.log(engg1);




// ? tuple

console.log("----------------");

type httpres= [number,string]

let her: httpres = [200,'ok']

console.log(her.pop());
console.log(her.pop());
console.log(her.pop());
console.log(her.pop());

// ?

console.log("--------");

type anyStr = string

type Person123 = {
  [anyStr:string]:string
}

let obj123:Person123 ={}

obj123.test = 'hi'

console.log(obj123);


// let myname = "ewe"

// let obj123 = {
//   [myname]:'hello'
// }

// console.log(obj123);


// let obj123:Person123{
//   "hihi"
// }

// ? type assertions

let x = "123" as unknown as string

// ? classes

console.log("----------");


class goodPerson{
  readonly first:string;
  last:string;
  score:number = 0;
  private _phNum:number=54545;
  static test:string;

  static m1(phNum:string){
    console.log(phNum);
    
  }

  set setNewNum(newNum:number){
    if(newNum<0){
      throw new Error('wot in the ph number bruv?')
    }
    this._phNum=newNum
  }

  get getNum(){
    return this._phNum
  }

  constructor(first:string,last:string){
    this.first = first;
    this.last = last;
    console.log("wjheih",this.score);
    
  }
}



class badPerson extends goodPerson{
   score: number=100;
}

let gp1 = new goodPerson('lalu','kalu')
let bp1 = new badPerson('bad1','badsurname')

// console.log(goodPerson.m1('89'));
// goodPerson.test = 'test'
// console.log(goodPerson.test);
// badPerson.test= 'br'
// console.log(badPerson.test);
// console.log(goodPerson.test);

console.log(gp1);

console.log(bp1);


console.log(bp1.getNum );
bp1.setNewNum = 8123098109381209;

console.log(bp1.getNum );

// ? interface and classes

console.log('-------------------');


interface Colorful {
  color:string,
}
interface Brand {
  brand:string,
  print():void,
}

class bike implements Colorful{
  constructor(public color:string){}
}

class jacket implements Colorful,Brand{
  constructor(public color:string,public brand:string){

  }
  print(){
    console.log(`${this.color}`);
    
  }
}

let j1 = new jacket('red','puma')
console.log(j1.print());

// ? generics

interface genes{
  rna:string,
  dna:string,
}

function checkGenes<T extends genes, U> (item:T):string{
  return item.dna
} 

let objooo: genes = {
  rna:'oqw',
  dna:'qwe'
}

console.log(checkGenes<genes,string>(objooo));

console.log('=============');

function yoyo<T  = number>():void{
  console.log('ae nice han');
}

let huheuhur = yoyo<string>()
let huheuhur2 = yoyo()

// ? 
// [
//   { user: 8, duration: 50, equipment: ['bench'] },
//   { user: 7, duration: 150, equipment: ['dumbbell'] },
//   { user: 1, duration: 10, equipment: ['barbell'] },
//   { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
//   { user: 7, duration: 200, equipment: ['bike'] },
//   { user: 2, duration: 200, equipment: ['treadmill'] },
//   { user: 2, duration: 200, equipment: ['bike'] },
// ];

// given above input, merge data with common userIds.
// output should look like below

//  [
//    { user: 8, duration: 50, equipment: ['bench'] },
//    { user: 7, duration: 450, equipment: ['bike', 'dumbbell', 'kettlebell'] },
//    { user: 1, duration: 10, equipment: ['barbell'] },
//    { user: 2, duration: 400, equipment: ['bike', 'treadmill'] },
//  ];

// console.log('===============');

// interface obj {
//   user:number,
//   duration:number,
//   equipment:string[]
// }

// let data:obj[] = [
//     { user: 8, duration: 50, equipment: ['bench'] },
//     { user: 7, duration: 150, equipment: ['dumbbell'] },
//     { user: 1, duration: 10, equipment: ['barbell'] },
//     { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
//     { user: 7, duration: 200, equipment: ['bike'] },
//     { user: 2, duration: 200, equipment: ['treadmill'] },
//     { user: 2, duration: 200, equipment: ['bike'] },
//   ]

//   let obj212 = {};
 

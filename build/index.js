"use strict";
let userName = "mohit";
console.log("-------------");
let arr = [1, 2, 3, "red"];
let ans = arr.map(ar => {
    return ar;
});
console.log(ans);
console.log("-------------");
function twoFer(name = "you") {
    return `one for ${name} , one for me`;
}
console.log(twoFer());
console.log(twoFer("mohit"));
console.log("--------------------");
let isLeapYear = (year) => {
    if (year % 4 == 0 || year % 400 == 0)
        return true;
    return false;
};
console.log(isLeapYear(2012));
console.log(isLeapYear(2013));
console.log("-------------");
//? object
let printName = (person) => {
    console.log(`${person.firstName}`);
};
printName({ firstName: "mohit", lastName: "go" });
console.log("--------------");
let randomCoordinate = () => {
    return { x: 44, y: 30 };
};
console.log(randomCoordinate());
console.log("-----------------");
let obj = { prop1: "property", prop2: 213 };
console.log(obj);
console.log("-----------------");
let emp1 = {
    name: "mohit",
    id: 99
};
let getEmployeeInfo = (employee) => {
    return `${employee.name} ${employee.email}`;
};
console.log(getEmployeeInfo(emp1));
console.log("-----------------");
let product1 = {
    id: 99,
    product_name: "tv",
};
console.log(product1);
let dune = {
    title: "dune",
    releaseYear: 2021,
    boxOffice: {
        budget: 2121,
        grossUS: 8989,
    }
};
function getProfit(movie) {
    return movie.boxOffice.grossUS - movie.boxOffice.budget;
}
console.log(getProfit(dune));
console.log(dune);
// ? array
console.log("------------");
let brr = ["1"];
console.log("------------");
let crr = [];
crr.push(["1", 0]);
crr.push(["1", '2']);
console.log(crr);
// ? type narrowing using unions
console.log("----------");
function calcTax(profit, tax) {
    if (typeof profit === 'string') {
        return parseFloat(profit) * tax;
    }
    return profit * tax;
}
console.log(calcTax('669', 20));
console.log(calcTax(669, 20));
// ? literal types
console.log("-------------");
let dayOfTheWeek;
dayOfTheWeek = "monday";
function answer(ans) {
    console.log(ans);
}
answer("no");
// ? practise union examples
let highScore;
highScore = 12;
highScore = false;
let arr2;
// ? tuples 
// ? enums
var Move;
(function (Move) {
    Move[Move["UP"] = 10] = "UP";
    Move[Move["DOWN"] = 11] = "DOWN";
    Move[Move["LEFT"] = 12] = "LEFT";
    Move[Move["RIGHT"] = 13] = "RIGHT";
})(Move || (Move = {}));
function checkMoveUp(move) {
    console.log(move === Move.UP);
}
checkMoveUp(Move.DOWN);
checkMoveUp(Move.UP);
//? interface 
console.log("---------------");
let p1 = {
    name: 'mohit',
    age: 22,
    // sayHi: ()=> {
    //   return p1.name
    // }
    sayHi(nickname) {
        return `${this.name} ${nickname}`;
    }
};
console.log(p1.sayHi('jaiohd'));
console.log("---------------");
var dogJob;
(function (dogJob) {
    dogJob["DRUGSNIFFFER"] = "drug sniffer";
    dogJob["MILITARY"] = "military use";
    dogJob["BOMBDEFUSE"] = "bomb defusal";
})(dogJob || (dogJob = {}));
let dog1 = {
    name: "gerry",
    breed: 'labrador',
    job: dogJob.BOMBDEFUSE,
};
console.log(dog1);
console.log('----------------');
let engg1 = {
    id: 129913,
    name: 'mohit',
    job: 'intern',
    typeOfEngineer: 'react'
};
console.log(engg1);
// ? tuple
console.log("----------------");
let her = [200, 'ok'];
console.log(her.pop());
console.log(her.pop());
console.log(her.pop());
console.log(her.pop());
// ?
console.log("--------");
let obj123 = {};
obj123.test = 'hi';
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
let x = "123";
// ? classes
console.log("----------");
class goodPerson {
    static m1(phNum) {
        console.log(phNum);
    }
    set setNewNum(newNum) {
        if (newNum < 0) {
            throw new Error('wot in the ph number bruv?');
        }
        this._phNum = newNum;
    }
    get getNum() {
        return this._phNum;
    }
    constructor(first, last) {
        this.score = 0;
        this._phNum = 54545;
        this.first = first;
        this.last = last;
        console.log("wjheih", this.score);
    }
}
class badPerson extends goodPerson {
    constructor() {
        super(...arguments);
        this.score = 100;
    }
}
let gp1 = new goodPerson('lalu', 'kalu');
let bp1 = new badPerson('bad1', 'badsurname');
// console.log(goodPerson.m1('89'));
// goodPerson.test = 'test'
// console.log(goodPerson.test);
// badPerson.test= 'br'
// console.log(badPerson.test);
// console.log(goodPerson.test);
console.log(gp1);
console.log(bp1);
console.log(bp1.getNum);
bp1.setNewNum = 8123098109381209;
console.log(bp1.getNum);
// ? interface and classes
console.log('-------------------');
class bike {
    constructor(color) {
        this.color = color;
    }
}
class jacket {
    constructor(color, brand) {
        this.color = color;
        this.brand = brand;
    }
    print() {
        console.log(`${this.color}`);
    }
}
let j1 = new jacket('red', 'puma');
console.log(j1.print());
function checkGenes(item) {
    return item.dna;
}
let objooo = {
    rna: 'oqw',
    dna: 'qwe'
};
console.log(checkGenes(objooo));
console.log('=============');
function yoyo() {
    console.log('ae nice han');
}
let huheuhur = yoyo();
let huheuhur2 = yoyo();
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

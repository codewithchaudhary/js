// "use strict"
// let score = 33
// let score = "33"
// let score = "33abc"
let score = "33abc"
console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(typeof(valueInNumber));
console.log(valueInNumber);


// "33" => 33
//  "33abc" => NaN
// true => 1; false => 0

// let isLogedIn =  1
// let isLogedIn =  0
// let isLogedIn =  ""
let isLogedIn =  "viraj"
let bolleanIsisLogedIn = Boolean(isLogedIn);
console.log(bolleanIsisLogedIn);


// 1 => true; 0=> false
// "" => false
// "viraj" => true


let someNumber = 33
let stringsomeNumber = String(someNumber);

console.table([someNumber,stringsomeNumber,typeof someNumber, typeof stringsomeNumber ]);
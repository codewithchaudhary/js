// primitive
// there are 7 types of primitive datatype
// 1. string
// 2. number
// 3. boolean
// 4. null
// 5. undefined
// 6. symbol
// 5. Bigint

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outSideTemp = null

// let userEmail;


// const id =Symbol("123")
// const anotehrId =Symbol("123")

// console.table([id, anotehrId, id == anotehrId])


// const bigNumber = 123456789n;

// Js is a Dynamicaly typed


// nonprimitive / reference 
// there are 
// 1. array
// 2. objects
// 3. functions



// const heros =["shaktiman" ,"naagraj","doga"]
// let myObj = {
//     name: "viraj",
//     age: 22,

// }

// const myFunction = function(){
// console.log("har har mehadev");
// }


// console.log(typeof heros)
// console.log(typeof myObj)
// console.log(typeof myFunction)
// console.log(typeof score)
// console.log(typeof scoreValue)
// console.log(typeof isLoggedIn)
// console.log(typeof outSideTemp)



// ++++++++++++++++++++++++++
// two type of memory
// 1. stack (primitive)
// 2. Heap (nornprimitive)

let myName = "viraj chaudhary"
let anotherMyName = myName
anotherMyName = "chaudhary"
console.log(myName)
console.log(anotherMyName)


let userone = {
    name: "test",
    age: 12,
    email: "google@gmail.com"
}
let usertwo = userone


usertwo.email = "viraj@gmail.com"
console.log(userone.email)
console.log(usertwo.email)
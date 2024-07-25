const name = "viraj chaudhary"
const nickname = "viraj-chaudhary"
const repoCount = 50

console.log(name + repoCount + "value")


// backticks string interpolations variable directly inject on string 
//  more readable reasult is same juts moderna way of syntax
console.log(`my name is ${name} and my repo count is ${repoCount}`)



const gameName  = new String("chaudhary viraj jaat");
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length)


console.log(gameName.toUpperCase())
console.log(gameName.charAt(8))
console.log(gameName.indexOf("y"))



const newstring = gameName.substring(0,4)
console.log(newstring)

const anotherSting = gameName.slice(-8,4)
console.log(anotherSting)




const newstringone = "    chaudhary     "
console.log(newstringone)
console.log(newstringone.trim())


const url = "https://chaudhary.com/viraj%20chaudhary"
console.log(url)
console.log(url.replace("%20","-"))




console.log(url.includes("chaudhary"));







console.log(gameName.split(" "))
/* Exercise 9 :- Faulty Calculator


This faulty calculator does following:
1. It takes two number as input from the user.
2. It perform wrong operation as follows:

+ ----> -
* -----> +
- ----> /
/ -----> **


It Perform wrong operation 10% of the times.

*/

let random = Math.random()
console.log(random)
let a = prompt("Enter first Number ")
let b = prompt("Enter Second Number ")
let c = prompt("Enter Operation ")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
    
}

if (random > 0.1) {
    // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) // ` ---> This is backtick

}

else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

}

/* Q. WAP to Calculate the factorial Number using reduce nd for loops?
 what is factorial (!)?
 let say's of 6! 

6! = 6*5*4*3*2*1

*/

let a = 6


function factorial(number) {
    let arr =  Array.from(Array(number + 1).keys())
    let c  = arr.slice(1,).reduce((a, b)=> a*b)
    return c
}


function facfor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index

    }
    return fac
}
console.log(factorial(a))
console.log(facfor(a))
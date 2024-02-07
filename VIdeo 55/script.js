console.log("Hey This is tutorial 55")

var a = 5;
// a = a + 1;
var b = 6;
var c = "unique";
var _d = "Vernish";
// var 55e = "Aadish";  this not allowed in javascript
 
// console.log(a + b + 8)
// console.log(typeof a, typeof b , typeof c)
{
    let a = 66;
    console.log(a)
}
console.log(a)

// const a1 = 6;
// a1 = a1 + 1;  // not Allowed Because a1 is constant

let x ="Unique bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

//Q. If null is a primitive, why does typeof(null) return "object"?
// Ans. The reasoning behind this is that null, in contrast with undefined, was (and still is) often used where objects appear. In other words, null is often used to signify an empty reference to an object. When Brendan Eich created JavaScript, he followed the same paradigm, and it made sense (arguably) to return "object". In fact, the ECMAScript specification defines null as the primitive value that represents the intentional absence of any object value .

console.log( x, y, z, p, q, r)
console.log( typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)


let o = {
    //key: value,
    "name": "unique",
    "job code" : 5600,
    "is_handsome" : true,
}

console.log(o);

o.salary = "100 crores";
console.log(o);

o.salary = "500 crores";
console.log(o);
// (1)
function You(name) {
    console.log("Hey " + name + " You are Nice");
    console.log("Hey " + name + " You are so good");
    console.log("Hey " + name + " I love You");
    console.log("Hey " + name + " You are doing fantastic work");
}

You ("Aditi")
You ("Unique")

// console.log("Hey Unique You are Nice")
// console.log("Hey Unique You are so good")
// console.log("Hey Unique I love You")
// console.log("Hey Unique You are doing fantastic work")


// (2)
function nice(a, b){
    console.log(a + b);
}

nice(3 , 5);


// (3)
function sum(a, b){
    // console.log(a + b);
    return a + b;
}

result1 = sum(3 , 5);
result2 = sum(2 , 5);
result3 = sum(4 , 5);

console.log("The sum of these number is: " , result1)
console.log("The sum of these number is: " , result2)
console.log("The sum of these number is: " , result3)

// (4) Default Parameter in function
function sum(a, b , c=3){
    // console.log(a + b);
    return a + b + c;
}

result1 = sum(3 , 5);
result2 = sum(2 , 5);
result3 = sum(4 , 5 , 10);

console.log("The sum of these number is: " , result1)
console.log("The sum of these number is: " , result2)
console.log("The sum of these number is: " , result3)

// (5) NaN Not a number (if do not correct argument then code is:-)
function sum(a, b , c=3){
    // console.log(a + b);
    console.log(a,b,c);
    return a + b + c;
}

result1 = sum(3);
result2 = sum(2 , 5);
result3 = sum(4 , 5 , 10);

console.log("The sum of these number is: " , result1)
console.log("The sum of these number is: " , result2)
console.log("The sum of these number is: " , result3)


// (6) Arrow Function
const func1 = (x)=>{
    console.log("I am an arrow function", x);
}

func1(30);
func1(60);
func1(90);
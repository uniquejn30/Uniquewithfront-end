console.log("Hello I am conditional tutorial")

let age = 1;
// let grace = 2;
// age += grace;
// console.log(age);
// console.log(age + grace);
// console.log(age - grace);
// console.log(age * grace);
// console.log(age / grace);
// console.log(age ** grace);
// console.log(age % grace);

if(age==18){
    console.log("You can drive");
}

else if(age == 0){
      console.log("Are you Kidding?")
}
else if(age == 1){
      console.log("Are you again Kidding?")
}

else{
    console.log("You cannot drive");
}

let a = 6;
let b = 8;
c = a>b ?(b - a): (a - b);

/*
translate to :
if (a>b){
    let c = a-b;
}
else {
    let c = b-a;
}
*/

console.log(c);
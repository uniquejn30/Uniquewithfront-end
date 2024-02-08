console.log("I am a tutoria on loops ")

// let a = 1;
// console.log(a);
// console.log(a+1);
// console.log(a+2);
for (let i = 0; i < 100; i++) {
     console.log(i + 1);
}


let obj ={
    name: "Unique",
    role: "Programmer",
    company: "Epic Solution",
}

for (const key in obj) {
        const element = obj[key]; //for object
        console.log(key ,element)
}

for (const c of "unique") {
    console.log(c); // For array
}

// let i = 5;
// while (i < 6){
//     console.log(i)
//     i++;
// }

let i = 0;
do{
    console.log(i)
    i++;
} while(i<6);
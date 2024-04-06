const fs = require("fs")

// console.log(fs)

console.log("starting");
// fs.writeFileSync("unique.txt","unique is a good boy")

fs.writeFile("uniqur2.txt", "Unique is a good boy",()=>{
    console.log("done");
    fs.readFile("unique2.txt",(error ,data)=>{
        console.log(error, data.toString());
        
    })
    
})

fs.appendFile("unique.txt", "uniquerobo", (e, d)=>{
    console.log(d);
    
})
console.log("ending");


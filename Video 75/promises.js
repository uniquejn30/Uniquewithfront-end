console.log('This is Promises');

let prom1 = new Promise((resolve , reject)=>{
    let a = Math.random();
    if (a<0.5){
        reject("No random Number generated for you")
    }
    else{
        setTimeout(() => {
            console.log("Yes I am done");
            resolve("Unique Jain")
        }, 3000);
    }
})

let prom2 = new Promise((resolve , reject)=>{
    let a = Math.random();
    if (a<0.5){
        reject("No random Number generated for you 2")
    }
    else{
        setTimeout(() => {
            console.log("Yes I am done 2");
            resolve("Unique Jain 2")
        }, 1000);
    }
})

// let p3 = Promise.all([prom1, prom2])
let p3 = Promise.allSettled([prom1, prom2])
// let p3 = Promise.race([prom1, prom2])
// let p3 = Promise.any([prom1, prom2])
// let p3 = Promise.resolve ([prom1, prom2])
p3.then(()=>{
    console.log(a);
}).catch(err=>{
      console.log(err)
      
})

// prom1.then((a)=>{
//        console.log(a);
//     //    This is use for printing the Resolve  
//     }).catch((err)=>{
//       console.log(err);
      
//     })


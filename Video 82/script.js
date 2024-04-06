// IIFE :- It is a Javascript function that runs as soon as it is defined.

// async function sleep() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(45);
//     }, 1000);
//   });
// }
// (async function main() {
//   let a = await sleep();
//   console.log(a);
//   let b = await sleep();
//   console.log(b)
// })();


// Destructuring :- It is used to unpack values from an array or properties from object , into distinct variables.

async function sleep() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(45);
      }, 1000);
    });
  }

  (async function main() {
//    let [x,y,...rest] = [1,5,7,8,9,10]
//     console.log(x,y, rest)

    let obj = {
        a:1,
        b:2,
        c:3,
    }
 let {a ,b} = obj
 console.log(a,b);
 
  })();

// spread Syntax :- It allows an iterable such as an array or string to be expanded in places where two or more arguments are expected. In an object literal , the spread syntax enumenrates the properties of an object and adds the key-value pairs to the object being created.

async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(45);
    }, 1000);
  });
}
function sum(a, b ,c){
   return a+b+c
    
}

(async function main() {
    var a1
    console.log(a1);
    
  let a = await sleep();
  console.log(a);
  let b = await sleep();
  console.log(b)

  let arr =[1,4,6]
//   console.log(arr[0] + arr[1] + arr[2]);
console.log(sum(...arr));

})();

var a1 = 6;

const sleep = async()=> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(45);
      }, 1000);
    });
  }
  const sum = async(a,b,c)=>{
     return a+b+c
      
  }
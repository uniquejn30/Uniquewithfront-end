// async function getData() {
//   return new Promise((resolve, rejest) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 3500);
//   });
// }

// settle means resolve or reject 

// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getData() {
  // Simulate getting data from a server
//   let x = await fetch("https://jsonplaceholder.typicode.com/todos/1");

let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
})

  let data = await x.json()
  return data 
//   console.log(data);
}

async function main() {
  console.log("Loading modules");

  console.log("Do something else");

  console.log("Load data");

  let data = await getData();

  console.log(data);

  console.log("process Data");

  console.log("task2");
}

main();

// different from other 
// Example POST method implementation:
// async function postData(url = "", data = {}) {
//     const response = await fetch(url, {
//       method: "POST", 
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data), 
//     });
//     return response.json(); 
//   }
  
//   postData("https://example.com/answer", { answer: 42 }).then((data) => {
//     console.log(data); 
//   });

// data.then(() => {
//   console.log(data);

//   console.log("process Data");

//   console.log("task2");
// });
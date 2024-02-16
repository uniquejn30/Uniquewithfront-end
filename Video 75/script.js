console.log("Unique is Hacker")
console.log("Vernish is Hecker")


// Asychronous Action  function:-
setTimeout(() => {
    console.log("I am inside settimeout")
}, 0);

setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 0);

console.log("The End")

const fn = ()=>{
    console.log("Nothing")
}

const callback = (arg, fn)=>{
    console.log(arg)
    fn()
}
const loadScript = (src ,callback) =>{
    document.createElement("script")
    sc.src = src;
    sc.onload = callback("Unique" , fn);
    document.head.append(sc)
 }


loadScript("https://cdnjs.cloudflare.com/ajsx/libs/prism/9000.0.1/prism.min.js" , callback)
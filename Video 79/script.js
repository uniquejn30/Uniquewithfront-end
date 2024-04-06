let a = prompt("Enter a first number ")
let b = prompt("Enter a second number ")

if (isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt (b);


function main(){
    let x = 5
    try {
        alert("The sum is "+ sum*x);
        return true
    } catch (error) {
        console.log("Error aa gaya bhai");
        return false
    }
    // finally is used for functions to print return values
    finally{
        console.log("files are being closed and db connection is being closed");
        
    }
}

let c = main()
console.log(c)

    
    





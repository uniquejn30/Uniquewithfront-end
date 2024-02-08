console.log("Unique")

//  let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "LightBlue"

// document.getElementById("lightbluebox").style.backgroundColor = "lightBlue"
// document.getElementById("lightbluebox2").style.backgroundColor = "lightBlue"


// document.querySelector(".box").style.backgroundColor = "green"

console.log(document.querySelector(".box"))

document.querySelectorAll(".box").forEach( e => {
    e.style.backgroundColor = "green";
});
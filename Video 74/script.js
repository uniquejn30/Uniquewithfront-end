let button =  document.getElementById("btn")

// List of all Mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
// button.addEventListener("dbclick" ,()=> {
//     alert("I was click")
//     document.querySelector(".box").innerHTML = "<b> Yapp you were clicked </b> Enjoy your click! "
// })

button.addEventListener("contextmenu" ,()=> {
    alert("Don't hack us by Right click please ")
})
document.addEventListener("keydown" ,(e)=> {
    consolelog(e, e.key , e.keyCode)
})
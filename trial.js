// Using events
function changeColor(){
    let x = document.getElementById("id1")
    x.style.color = "red"
}

// function hide(){
//     let x = document.getElementById("p2")
//     x.style.visibility = "hidden"
// }
 let hide = () => {
    let x = document.getElementById("p2")
    x.style.visibility = "hidden"
}
function show(){
    let x = document.getElementById("p2")
    x.style.visibility = "visible"
}

// let changeText = () => {
//     let x = document.getElementById("p3")
//     x.innerHTML = 'Ooooops!'
// }   
let changeText = (id) => id.innerHTML = 'Ooooops!'
   
    
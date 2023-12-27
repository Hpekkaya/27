
// document.getElementById("myP1").addEventListener("click",
// function(){
//     alert("myP1")
// },false
// )
// document.getElementById("myDiv1").addEventListener(
//     "click",
//     function(){
//         alert("myDiv1")
//     },false
// )
// document.getElementById("myP2").addEventListener("click",
// function(){
//     alert("myP2")
// },true
// )
// document.getElementById("myDiv2").addEventListener(
//     "click",
//     function(){
//         alert("myDiv2")
//     },true
// )

document.getElementById("myDIV").addEventListener("mousemove",myFunction)
function myFunction(){
    document.getElementById("demo").innerHTML=Math.random()
}
function removeHandler(){
    document.getElementById("myDIV").removeEventListener("mousemove",myFunction)
}


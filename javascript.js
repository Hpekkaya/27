// promise object solution of callback hell
// Inorder to error management

// myResolve(result value) :In case of succes
// myReject(error object)  :In case of error
// let myPromise = new Promise(function(myResolve, myReject)){
// }
// myPromise.then(
//     function(value); //:In case of succes 
//     function(error) //:In case of error
// )

function myDisplayer(some){
    console.log(some)
}
// let myPromise = new Promise(function(myResolve, myReject){
//     let x =1-1;
//     if (x == 0) myResolve("Ok")
//     else myReject ("Error")
//     console.log(x)
// })

// myPromise.then(
//     function(value) { myDisplayer(value) },
//     function(error) { myDisplayer(error) },
// )

// Alternative 
// myPromise
// .then (function(value) {myDisplayer(value)})
// .catch(function(error) {myDisplayer(error)})
// .finally(myDisplayer("Finally Function"))

let myPromise2 = new Promise(function(myResolve, myReject){
    setTimeout(function(){myResolve("I love you")},3000)
})
myPromise2
.then (function(value) {myDisplayer(value),
console.log(myPromise2)})
// .catch(function(error) {myDisplayer(error)})
// .finally(myDisplayer("Finally Function"))

// There are three different states
// 1.pending
// 2.fulfilled
// 3.rejected

// async  functions

// function myFunction() {
//     return Promise.reject("Hello")    
// }

// async function myFunction2(){
//     return "Hello async"
// }
// // Both above the same
// myFunction().then(function(value){console.log("Resolve ", value)},
// function(error){console.log("Reject ", error)})
// myFunction2().then(function(value){console.log("Resolve ", value)},
// function(error){console.log("Reject ", error)})

// await  functions only can be used in async function
// async function myDisplay(){
//     let myPromise = new Promise(function(ressolve, reject){
//         setTimeout(function(){ressolve("I love you")}, 1000)
//     })
//     // console.log(await myPromise)

//     console.log(myPromise)
//     await myPromise;
//     console.log("Ended")
// }
// myDisplay()

async function test(data){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data) {resolve("This is value")}
            else {reject("This not value")}
        }, 2000)
    })
    console.log("Promise pending")
    let response = await promise;
    console.log(response);
    console.log("Promise ended");
    return response
}

test("value").then (resolve => console.log(resolve), reject=> console.log(reject))
// test(null).then (resolve => console.log(resolve), reject=> console.log(reject))

// DOM Document Object Model
// document.getElementById("demo").innerHTML = "Hello World"
// console.log(document.getElementsByTagName("p"))

// document.getElementsByTagName("p")[0].innerHTML = " Hello TagName 0";
// document.getElementsByTagName("p")[1].innerHTML = " Hello TagName 1";

// Above the same

// for (let i in document.getElementsByTagName("p")) {
//   (document.getElementsByTagName("p")[i].innerHTML = "Hello TagName " + i)
// }

// document.getElementsByClassName("intro")[0].innerHTML= " Hello Class Name " + 0;

// If we want to use querySelectorAll
// we should use . for class  -  # for id's
// p element and into class
// document.querySelectorAll("p.intro")[0].innerHTML = " Hello : p element and intro claas" + 0 

// document.getElementById("image").src = "smiley.gif"
// let imageDOM = document.getElementById("image")
// imageDOM.src = "smiley.gif"; imageDOM.width="100"; imageDOM.height="100"

// function validateForm() {
// //   let x = document.forms["myForm"]["fname"].value;
// //   if (x == "") {
// //     document.querySelectorAll("#alert")[0].innerHTML ="Name must be filled out"
// //     // alert("Name must be filled out");
// //     return false;
// //   }
// // }

// document.getElementById("demo").style.color ="red"
// document.getElementById("demo2").style.backgroundColor="yellow"
// console.log(document.getElementById("demo2"))

// Using events
// function changeColor(){
//     let x = document.getElementById("id1")
//     x.style.color = "red"
// }

// function hide(){
//     let x = document.getElementById("p2")
//     x.style.visibility = "hidden"
// }
//  let hide = () => {
//     let x = document.getElementById("p2")
//     x.style.visibility = "hidden"
// }
// function show(){
//     let x = document.getElementById("p2")
//     x.style.visibility = "visible"
// }

// let changeText = () => {
//     let x = document.getElementById("p3")
//     x.innerHTML = 'Ooooops!'
// }   
// let changeText = (id) => id.innerHTML = 'Ooooops!'

// upperCase = () => {
//     const x = document.getElementById("fname");
//     x.value = x.value.toUpperCase();
// }

// mOver = (obj) => {
//     obj.innerHTML = "Thanks"
//     obj.style.backgroundColor = "blue"
//     obj.style.color = "white"
    
// }
// mOut = (obj) => {
//     obj.innerHTML = "Mouse Over Me" 
//     obj.style.backgroundColor = "red"
// }

// document.getElementById("myBtn").addEventListener("click", myAlert = () => alert("Hello World"))

// addEventListener
// let x = document.getElementById("myBtn")
// x.addEventListener("mouseover", mOverFunction)
// x.addEventListener("click", clickFunction)
// x.addEventListener("mouseout", mOutFunction)

// function mOverFunction(){
//     let x = document.getElementById("demo").innerHTML += "Moused Over <br>"
   
// }

// function clickFunction() {
//     let x = document.getElementById("demo").innerHTML += "Clicked <br>"
// }

// function mOutFunction () {
//     let x = document.getElementById("demo").innerHTML += "Moused Out <br>"
// }




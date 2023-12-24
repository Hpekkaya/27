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




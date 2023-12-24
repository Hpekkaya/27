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




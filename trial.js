// function validateForm() {    
//     let x = document.forms["myForm"]["fname"].value
//     if (x < 1)  alert("Number must be bigger then or equal to 1")
//     else if ( x>10 ) alert("Number must be smaller then or equal to 10")
//     else alert("Congratulations! \n\n You entered valid number")    
// }
validateForm = () => {    
    let x = document.forms["myForm"]["fname"].value
    if (x < 1)  alert("Number must be bigger then or equal to 1")
    else if ( x>10 ) alert("Number must be smaller then or equal to 10")
    else alert("Congratulations! \n\n You entered valid number")    
}
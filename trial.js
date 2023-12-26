upperCase = () => {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

mOver = (obj) => {
    obj.innerHTML = "Thanks"
    obj.style.backgroundColor = "blue"
    obj.style.color = "white"
    
}
mOut = (obj) => {
    obj.innerHTML = "Mouse Over Me" 
    obj.style.backgroundColor = "red"
}

document.getElementById("myBtn").addEventListener("click", myAlert = () => alert("Hello World"))



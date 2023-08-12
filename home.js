var data = ["bubub", "13082022"]

var username = document.getElementById("username")
var password = document.getElementById("password")

function login(){
    if(username.value.toLowerCase() == data[0] && password.value == data[1]){
        window.location.href = "index.html"
    } else {
        alert("Username atau Password Salah!")
    }
}

var btn = document.querySelectorAll(".btn")[0]
btn.onclick = login
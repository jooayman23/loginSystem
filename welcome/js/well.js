let nameUser = document.getElementById("nameUser")

window.addEventListener("load",display) 


function display() {
    if (localStorage.getItem("username")) {
        nameUser.innerHTML = `Welcome Mr : ${localStorage.getItem("username")}`
    }else
    nameUser.innerHTML= ""
}
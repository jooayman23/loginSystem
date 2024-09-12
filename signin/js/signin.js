let infORM = document.getElementById('infORM')
let inEmail = document.getElementById('inEmail')
let inPassword = document.getElementById('inPassword')
let alert = document.getElementById('alert')
let sucAlert = document.getElementById('sucAlert')

let allUser =[];

if (localStorage.getItem("all user")!==null) {

    allUser= JSON.parse(localStorage.getItem("all user"))
}

infORM.addEventListener('submit',function (e) {
    e.preventDefault()
    
    login()
})
function login() {
    let oneUser ={
        email : inEmail.value,
        password : inPassword.value,
    } ; 
    if (isLoginValid(oneUser)) {
        sucAlert.classList.replace('d-none','d-block')
        alert.classList.replace('d-block','d-none')  
        setTimeout(function () {
            window.location.href = "../welcome/index.html" 
         },2000);
         console.log('user is found');
    } else{
        sucAlert.classList.replace('d-block','d-none')
        alert.classList.replace('d-none','d-block')
        console.log('user is not found');

    }
}
function isLoginValid(oneUser) {
    for (let i = 0; i < allUser.length; i++) {

       if (allUser[i].email == oneUser.email && allUser[i].password == oneUser.password) {
        localStorage.setItem('username',allUser[i].name)
        return true
       }
        
    }
    
}




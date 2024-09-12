let upfORM = document.getElementById('upfORM')
let upName = document.getElementById('upName')
let upEmail = document.getElementById('upEmail')
let upPassword = document.getElementById('upPassword')
let alertName = document.getElementById('alertName')
let alertEmail = document.getElementById('alertEmail')
let alertPassword = document.getElementById('alertPassword')
let existAlert = document.getElementById('existAlert')
let successAlert = document.getElementById('successAlert')
let allUser=[]
if (localStorage.getItem('all user')) {
    allUser = JSON.parse(localStorage.getItem('all user'))
}
upfORM.addEventListener('submit',function (e) {
    e.preventDefault()
    if (checkValid()) {
        addValue()
    }
})
function addValue() {
    let oneUser= {
        name : upName.value,
        email : upEmail.value ,
        password : upPassword.value
    }

if (exist(oneUser)) {
    console.log('done');
    existAlert.classList.replace('d-none','d-block')
    successAlert.classList.replace('d-block','d-none')
    
}else{
    allUser.push(oneUser)
    localStorage.setItem('all user',JSON.stringify(allUser))
    existAlert.classList.replace('d-block','d-none')
    successAlert.classList.replace('d-none','d-block')
    setTimeout(function () {
        window.location.href = "signin/index.htm" 
     },2000)
}
}
function allValid(regex,input,msg) {
if (regex.test(input.value)==true) {
    msg.classList.replace('d-block','d-none')
    return true;
}else{
    msg.classList.replace('d-none','d-block')
return false;
}
}
function checkValid() {
    if (allValid(/^[a-zA-Z]{2,}$/,upName,alertName) && allValid(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/,upEmail,alertEmail) && allValid(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.{8,}).*$/,upPassword,alertPassword)) {
        return true;
    }else{
        return false;
    }
}
function exist(oneUser) {
    for (let i = 0; i < allUser.length; i++) {
if (allUser[i].email== oneUser.email) {
    return true;
}   
    }
}





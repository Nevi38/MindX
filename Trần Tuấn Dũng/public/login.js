let username= document.getElementById ("username")
let password=document.getElementById ("password")
let subm=document.getElementById ("subm")
subm.addEventListener('click',function(){
    if (localStorage.getItem('username')==username.value&&localStorage.getItem('password')==password.value) {
        window.location.href ="project.html"
    }

})
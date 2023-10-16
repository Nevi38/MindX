let username= document.getElementById ("username")
let email =document.getElementById ("email")
let password=document.getElementById ("password")
let passwordagain=document.getElementById ("passwordagain")
let subm=document.getElementById ("subm")
subm.addEventListener('click',function(){
    localStorage.setItem('username',username.value)
    localStorage.setItem('email',email.value)
    localStorage.setItem('password',password.value)
    window.location.href ="login.html"
})

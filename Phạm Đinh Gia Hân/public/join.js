function getin4(){
    let username=document.getElementById("username").value
    localStorage.setItem("username",username)
    window.location.href="./index.html"
}

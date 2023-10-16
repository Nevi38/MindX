
alert('There is a new upcoming event! Go and check it out in EVENTS category.');

//nếu di chuột vào biểu tượng kính lúp thì hiện input
const inputBar = document.getElementById('searchbar')
isClicked = false
function moussin() {
    inputBar.style.opacity = '1'
}
function moussout() {
    if (isClicked == false) {
        inputBar.style.opacity = '0'
    }
    return isClicked = false
}
function keepInvisible() {
    inputBar.style.opacity = '1'
    return isClicked = true
}


// nếu di chuột vào biểu tượng avt thì hiện ra tên đã đăng kí
const containBar = document.getElementById('account')
const uname = document.getElementById('username')
// đổi tên
if (localStorage.getItem("username")!=""){
    uname.innerHTML=localStorage.getItem("username")+" | "
}

function show() {
    containBar.style.transition = 'width 0.2s'
    containBar.style.width = '260px'
        // hiện username
        uname.style.display = 'block'
        // chỉnh tên ra giữa
        uname.style.paddingLeft = '15px' 
}
function hide() {
    containBar.style.width = '70px'
        // ẩn username
        uname.style.display = 'none'
        //ẩn tên
        uname.style.paddingLeft = '0px'
}
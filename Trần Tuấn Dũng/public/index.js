let btn_signup=document.getElementById('btn_signup') 
let input=document.getElementById ('input') 

input.addEventListener('input',function () {
    let soluongchu=input.value.length   
    if (soluongchu==0) {
        btn_signup.style.opacity='0.4'
    }
    else if (soluongchu!=0) {
        btn_signup.style.opacity='1'
    }
})


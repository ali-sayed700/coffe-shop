

let form =  document.querySelector(".form")
let btnLogin = document.getElementById("user")
let xmark = document.getElementById("xmark")
let barBtn = document.getElementById("bar")
let nav = document.querySelector("nav")

btnLogin.onclick = () => {
    form.classList.add("active")
}

xmark.onclick = () => {
    form.classList.remove("active")
}

barBtn.onclick = () => {

barBtn.classList.toggle("fa-xmark")
nav.classList.toggle("active")
}

document.addEventListener("click",(e) => {
    if (e.target.tagName != "I" ) {
    nav.classList.remove("active")
    barBtn.classList.remove("fa-xmark")
    }
     if( e.target.tagName == "DIV" ) {
        form.classList.remove("active")
    }
})

window.onscroll = () =>{
    // loginForm.classList.remove('active');
    // menu.classList.remove('fa-times');
    // navbar.classList.remove('active');
 
    if(window.scrollY > 0){
       document.querySelector('.header').classList.add('active');
    }else{
       document.querySelector('.header').classList.remove('active');
    }
 }
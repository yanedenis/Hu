var modal = document.getElementById("Modal");
var btn = document.getElementById("SignUpBtn");
var span = document.getElementsByClassName("close")[0];


//AUTHORIZATION
function SignUpFun() {
    let auth1 = document.getElementById("signup-content");
    let auth2 = document.getElementById("login-content");
    if (auth1.style.display == "none") {
        auth1.style.display = "block";
        auth2.style.display = "none";
    } else {
        auth1.style.display = "block";
        auth2.style.display = "none";
    }
}
function LogInFun() {
    let auth1 = document.getElementsByClassName("signup-content");
    let auth2 = document.getElementsByClassName("login-content");
    if (auth2.style.display == "none") {
        auth2.style.display = "block";
        auth1.style.display = "none";
    } else {
        auth2.style.display = "block";
        auth1.style.display = "none";
    }
}

//MODAL
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

//MOBILE MENU
function burgerMenuAction() {
    let mobileMenuList = document.getElementById("mobile-menu-list");
    let HeaderPad = document.getElementById("header");
    let BurgerMenuPad = document.getElementById("burger-menu-button");
    if (mobileMenuList.style.display === "none") {
        mobileMenuList.style.display = "block";
        HeaderPad.style.paddingBottom = "0px";
        BurgerMenuPad.style.paddingBottom = "15px";
    } else {
        mobileMenuList.style.display = "none";
        HeaderPad.style.paddingBottom = "15px";
        BurgerMenuPad.style.paddingBottom = "0px";
    }
}


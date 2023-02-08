window.onscroll = function() {myFunction()};
var header = document.getElementById("header");
var sticky = header.offsetTop;
var modal = document.getElementById("Modal");
var btn = document.getElementById("SignUpBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

// window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
// }

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function burgerMenuAction() {
    let mobileMenuList = document.getElementById("mobile-menu-list")
    let HeaderPad = document.getElementById("header")
    if (mobileMenuList.style.display === "none") {
        mobileMenuList.style.display = "block";
        HeaderPad.style.paddingBottom = "0px";
    } else {
        mobileMenuList.style.display = "none";
        HeaderPad.style.paddingBottom = "15px"
    }
}

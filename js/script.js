const myNav = document.querySelector("#myNav");
const menu = document.querySelector("#menu");

menu.addEventListener("click", ()=> {
    menu.classList.toggle("fa-xmark");
    myNav.classList.toggle("active");
});
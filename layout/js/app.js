const hamburger = document.querySelector('#header .hamburger');
const mobile_menu = document.querySelector('#header .header');
// const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('header.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

let timerC = document.querySelector(".conutdown");
let countDown = new Date("Jan 20, 2022 22:30:59").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime();

    let dateDiff = countDown - dateNow;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((dateDiff % (1000 * 60)) / 1000);
    
    if(dateDiff < 0){
        clearInterval(counter);
        timerC.style.display="none";
    }
    
    
}, 1000);


const serviceItems = document.querySelector(".model-log");
const popup = document.querySelector(".login");
const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");
serviceItems.addEventListener("click", function(event){
    if(event.target.tagName.toLowerCase() == "button"){
        event.target.parentElement;
        popupBox();
    }
});

popupCloseBtn.addEventListener("click", popupBox);
popupCloseIcon.addEventListener("click", popupBox);

popup.addEventListener("click", function(event){
    if(event.target == popup){
        popupBox();
    }
})

function popupBox(){
    popup.classList.toggle("open");
}


const signup = document.querySelector(".model-signup");
const popups = document.querySelector(".signup");
const popupsCloseBtn = popups.querySelector(".popup-close-btns");
const popupsCloseIcon = popups.querySelector(".popup-close-icons");
signup.addEventListener("click", function(e){
    if(e.target.tagName.toLowerCase() == "button"){
        e.target.parentElement;
        popupsBox();
    }
});

popupsCloseBtn.addEventListener("click", popupsBox);
popupsCloseIcon.addEventListener("click", popupsBox);

popups.addEventListener("click", function(e){
    if(e.target == popups){
        popupsBox();
    }
});

function popupsBox(){
    popups.classList.toggle("open");
};

let i = 0;
const cardNum = document.getElementById("fa-cart");
const num = document.getElementById("num");

cardNum.addEventListener("click", () =>{
    
    i+=1;
    sessionStorage.setItem('name', i);
    let cart = sessionStorage.getItem('name')
    num.innerHTML = cart;
})
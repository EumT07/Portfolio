"use strict"

//Dark mode
let btnDark = document.getElementById("chk");
//Funcion dark mode
btnDark.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
});


// btn arrow up
const btnArrowUp = document.getElementById("btnUp");
const showBtn = document.getElementById("showBtnUp");

//Mouseenter
showBtn.addEventListener("mouseenter", ()=>{
    btnArrowUp.style.transform = "translate(0%)"
}); 
//Mouseleave
showBtn.addEventListener("mouseleave", ()=>{
    btnArrowUp.style.transform = "translate(215%)"
}); 


// About Modal Content
const aboutMe = document.getElementById("aboutMe");
const aboutModalContent = document.getElementById("aboutModalContent");
const btnAboutModal = document.querySelector(".about__modalBtn");

//Open
aboutMe.addEventListener("click", ()=>{
    aboutModalContent.style.display = "block";
});
//Close
btnAboutModal.addEventListener("click",(e)=>{
    if(e.target.classList.contains("close")){
        aboutModalContent.style.display = "none";
    }
})






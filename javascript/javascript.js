"use strict"

//Dark mode
let btnDark = document.getElementById("chk");
let aboutModalInfo = document.querySelector(".about__modal_info")
let skillsModalInfo = document.querySelector(".skills__modal_info")
//Funcion dark mode
btnDark.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
    aboutModalInfo.style.color = "black";
    skillsModalInfo.style.color = "black";
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
const aboutmeBtn = document.getElementById("aboutMe_btn");
const aboutModalContent = document.getElementById("aboutModalContent");
const closeBtn_aboutme = document.querySelector(".about_close_btn");

//Open
aboutmeBtn.addEventListener("click", ()=>{
    aboutModalContent.style.display = "block";
});
//Close
closeBtn_aboutme.addEventListener("click",(e)=>{
    if(e.target.classList.contains("close")){
        aboutModalContent.style.display = "none";
    }
})

//Skill Modal Content
const skills_Btn = document.getElementById("skills_Btn");
const skillModalContent = document.getElementById("skillModalContent");
const closeBtn_skills = document.querySelector(".skills_close_btn");

skills_Btn.addEventListener("click", ()=>{
    skillModalContent.style.display = "block";
})

closeBtn_skills.addEventListener("click", (e)=>{
    if(e.target.classList.contains("close")){
        skillModalContent.style.display = "none";
    }
})




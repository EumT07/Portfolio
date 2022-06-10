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











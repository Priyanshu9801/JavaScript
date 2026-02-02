"use strict";

const inputBox=document.querySelector("#inputBox");
inputBox.addEventListener("click", (e)=>{
    e.target.value="   ";
    e.target.style.backgroundColor="white";
});

const addButton=document.querySelector(".buttons");
addButton.addEventListener("click", function(e){
    this.style.backgroundColor="rgb(3, 2, 30)";
    this.style.color="white";
});

function randomColorGenerator(){
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}

const submitForm=document.querySelector(".submitForm");
const notes=document.querySelector(".notes");

submitForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(inputBox.value);
    const newLi=document.createElement("li");
    newLi.innerHTML=`<span>${inputBox.value}</span> 
    <button class="buttons done-btn">Done</button>
    <button class="buttons remove-btn">Remove</button>`;
    newLi.style.color=randomColorGenerator();
    notes.append(newLi);
    inputBox.value="   ";
});

notes.addEventListener("click", (e)=>{
    if(e.target.classList.contains("done-btn")){
        e.target.parentNode.style.textDecoration="line-through";
    }
    if(e.target.classList.contains("remove-btn")){
        const li=e.target.parentNode;
        li.remove();
    }
});






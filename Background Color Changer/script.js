"use strict";

function randomColorGenerator(){
    let red=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    return `rgb(${red},${blue},${green})`;
};

let intervalId=0;

const stopButton=document.querySelector(".change-color");
stopButton.addEventListener("click",(e)=>{
    if(e.target.textContent=="Stop changing background color"){
        clearInterval(intervalId);
        e.target.textContent="Start changing background color";
    }
    else{
        intervalId=setInterval(()=>{
            document.body.style.backgroundColor=randomColorGenerator();
        }, 500);
        console.log(intervalId);
        e.target.textContent="Stop changing background color";
    }  
});
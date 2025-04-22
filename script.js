document.addEventListener("DOMContentLoaded", ()=>{
    //audio and click on start, html inserting 
    const buttons = document.querySelectorAll(".btn");
    
    let buttonSound = new Audio("buttonClick.mp3");
    buttons.forEach(button => button.addEventListener("click",()=>{
        buttonSound.play();
        buttonSound.onended = ()=>{
            window.location.href= "gamePlay/layout.html";
        };
        
    }));
});
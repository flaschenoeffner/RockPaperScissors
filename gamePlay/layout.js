document.addEventListener("DOMContentLoaded", ()=>{
    let userChoice = "";
   
    let userScore = document.getElementById("userScore");
    let pcScore = document.getElementById("pcScore");

    function getComputerChoice(){
        
        let randInt = Math.floor(Math.random()*3+1);
        switch(randInt){
            case 1:
               
                return "rock";
            case 2:
                
                return "paper";
            case 3:
                
                return "scissors";
        }
    }
    
    let confirmButton = document.getElementById("confirm");
    confirmButton.addEventListener("click", event => playRound(event));
    let pics = document.querySelectorAll(".pics");
    pics.forEach(pic => pic.addEventListener("click", event=>getUserChoice(event)));
    let rockPic= pics[0];
    let scissorsPic= pics[1];
    let paperPic = pics[2];
    function displayComputerChoice(choice){
        switch(choice){
            case "rock":
                rockPic.style.border= "0.5em solid red";
                scissorsPic.style.border = "";
                paperPic.style.border = "";
                break;
            case "scissors":
                scissorsPic.style.border = "0.5em solid red";
                rockPic.style.border="";
                paperPic.style.border= "";
                break;
            case "paper":
                paperPic.style.border = "0.5em solid red";
                rockPic.style.border = "";
                scissorsPic.style.border ="";
                break;
        }
    }

    function playRound(event){
        const user = userChoice;
        const computerChoice = getComputerChoice();
        displayComputerChoice(computerChoice);
        const result = winningLogic(user,computerChoice);
        console.log("Result: ", result);
        switch(result){
            case 1:
                userScore.innerText =parseInt(userScore.innerText) +1;
                setTimeout(shoot, 0);
                setTimeout(shoot, 100);
                setTimeout(shoot, 200);
                break;
            case -1:
                pcScore.innerText =parseInt(pcScore.innerText) +1;
                break;
            case 0:
                
                break;
        }
        
    }

    
    function getUserChoice(event){
        console.log(event.currentTarget.id);
        switch(event.currentTarget.id){
            case "rock":
                rockPic.style.border= "0.5em solid brown";
                scissorsPic.style.border = "";
                paperPic.style.border = "";
                userChoice = "rock";
                break;
            case "scissors":
                scissorsPic.style.border = "0.5em solid brown";
                rockPic.style.border="";
                paperPic.style.border= "";
                userChoice = "scissors";
                break;
            case "paper":
                paperPic.style.border = "0.5em solid brown";
                rockPic.style.border = "";
                scissorsPic.style.border ="";
                userChoice = "paper";
                break;
        }
        
    }

    /*let roundButton = document.getElementById("nextRound");
    roundButton.addEventListener("click",nextRound);
    function nextRound(){
        round.innerText = parseInt(round.innerText)+1;
        if(round.innerText==6)
            clear();
    }*/

    
    
    function winningLogic(user, computer){
        if(user === computer)
            return 0;
        if(user==="rock" && computer ==="scissors"
            ||user === "scissors" && computer ==="paper"
            || user ==="paper"&& computer ==="rock"
        )
            return 1;
        else{
            return -1;
        }
    }
    /*const endButton = document.getElementById("end");
    endButton.addEventListener("click", clear); 
    function clear(){
        winner.innerHTML = "";
       // round.innerText=1;
        userScore.innerText = 0;
        pcScore.innerText = 0;
        buttonSound.onended = ()=>{
            window.location.href= "../index.html";
        }
    }*/

    //audio and click on start, html inserting 
    const buttons = document.querySelectorAll(".btn");
    
    let buttonSound = new Audio("../buttonClick.mp3");
    buttons.forEach(button => button.addEventListener("click",()=>{
        buttonSound.play();
    }));

});

const defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["star"],
    colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
  };
  
  function shoot() {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ["star"],
    });
  
    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ["circle"],
    });
  }

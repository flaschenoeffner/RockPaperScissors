document.addEventListener("DOMContentLoaded", ()=>{

    let winner = document.getElementById("winner");
    let userScore = document.getElementById("userScore");
    let pcScore = document.getElementById("pcScore");

    function getComputerChoice(){
        
        let randInt = Math.floor(Math.random()*3+1);
        switch(randInt){
            case 1:
                rockOverlay.style.opacity = 1;
                return "rock";
            case 2:
                paperOverlay.style.opacity = 1;
                return "paper";
            case 3:
                scissorsOverlay.style.opacity = 1;
                return "scissors";
        }
    }
    const choices = document.querySelectorAll(".pics");
    choices.forEach(choice => {
        choice.addEventListener("click",(event)=>playRound(event));
    });
    function playRound(event){
        const userChoice = getUserChoice(event);
        const computerChoice = getComputerChoice();
        const result = winningLogic(userChoice,computerChoice);
        console.log("Result: ", result);
        
        
        switch(result){
            case 1:
                winner.innerHTML="<p>You won, good job!</p>";
                userScore.innerText =parseInt(userScore.innerText) +1;
                break;
            case -1:
                winner.innerHTML="<p>The PC won</p>";
                pcScore.innerText =parseInt(pcScore.innerText) +1;
                break;
            case 0:
                winner.innerHTML="<p>It's a tie!</p>";
                break;
        }
        let round = document.getElementById("round");
        round.innerText = parseInt(round.innerText)+1;

       
        if(round.innerText==6)
            clear();
    }
    function getUserChoice(event){
        console.log(event.currentTarget.id);
        switch(event.currentTarget.id){
            case "rock":
                break;
            case "scissors":
                break;
            case "paper":
                break;
        }
        return event.currentTarget.id;
    }
    
    
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
    const endButton = document.getElementById("end");
    endButton.addEventListener("click", clear);
    function clear(){
        winner.innerHTML = "";
        round.innerText=1;
        userScore.innerText = 0;
        pcScore.innerText = 0;
    }

    //audio and click on start, html inserting 
    const buttons = document.querySelectorAll(".btn");
    
    let buttonSound = new Audio("buttonClick.mp3");
    buttons.forEach(button => button.addEventListener("click",()=>{
        buttonSound.play();
    }));


    function playGame(){
        let userScore = 0
        let computerScore = 0
        for(let i =0; i<5; i++){
            let winner = playRound(getUserChoice(), getComputerChoice());
            if(winner>0)++userScore;
            if(winner<0)++computerScore;
            console.log("user score: "+ userScore)
            console.log("computer score: "+ computerScore +"\n\n\n")
        }
        if(userScore<computerScore)console.log("Computer won")
        else if(computerScore<userScore)console.log("User won")
        else console.log("draw")
        
    }
});
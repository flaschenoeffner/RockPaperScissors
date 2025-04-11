document.addEventListener("DOMContentLoaded", ()=>{
    function getComputerChoice(){
        let randInt = Math.floor(Math.random()*3+1);
        switch(randInt){
            case 1:
                return "rock";
            case 2:
                return "paper";
            case 3:
                return "scissors";
            default:
                return "fehler";
        }
    }
    function getUserChoice(){
        let guess = "";
        do{
            guess= prompt("Rock, Scissor, Paper");
            guess = guess.toLowerCase();
        }while(guess!= "rock"&& guess!= "scissors" && guess != "paper")
        
        return guess;
    }
    //const getComputerChoiceButton = document.getElementById("getComputerChoice");
    //getComputerChoiceButton.addEventListener("click", ()=> console.log(getComputerChoice()));
    
    function playRound(user, computer){
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
    playGame();
});
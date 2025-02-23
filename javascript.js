let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let probability = Math.random();
    let computerChoice;
    if(probability < 0.33){
        computerChoice = "rock";
    }
    else if(probability < 0.66){
        computerChoice = "paper"
    }
    else{
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Rock, paper or scissors?");
    return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    let outcome;
    if (humanChoice === computerChoice){
        outcome = "It's a tie!";
    }
    else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice==="rock" || humanChoice === "scissors" && computerChoice === "paper"){
        outcome = `You win! ${humanChoice} beats ${computerChoice}.`;
        ++humanScore;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors"){
        outcome = `You lose! ${computerChoice} beats ${humanChoice}.`;
        ++computerScore;
    }
    else {
        outcome = "Invalid input. Please input rock, paper or scissors.";
    }
    return outcome;
}

function playGame(){
    for(i = 0; i < 5; i++){
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }
    if(humanScore > computerScore){
        console.log(`You have a score of ${humanScore}, while the computer has a score of ${computerScore}. You win!`);
    }
    else if (computerScore > humanScore){
        console.log(`You have a score of ${humanScore}, while the computer has a score of ${computerScore}. You lose!`);
    }
    else {
        console.log(`You have a score of ${humanScore}, while the computer has a score of ${computerScore} as well. It's a tie!`);
    }
}

playGame();

/*
let string outcome.
If humanChoice and computerChoice are same, outcome is a tie.
(humanChoice, computerChoice)
If (rock, scissors), (paper, rock), (scissors, paper), outcome is win.
If (scissors, rock), (rock, paper), (paper, scissors), outcome is loss.
Else invalid input.
*/
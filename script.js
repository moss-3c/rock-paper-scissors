function getComputerChoice () {
    
    //randomly return rock paper scissors
    let choice = Math.floor((Math.random() * 100)) % 3;
    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return "error: computer chose: "+choice;
    }
}

function getHumanChoice() {
    let humanChoice = prompt("rock, paper, or scissors?"); //console
    return humanChoice.toLowerCase().trim();
}

function playRound (humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();
    choiceDisplay.textContent = "You chose: "+ humanChoice +". Computer chose: "+computerChoice;

    roundsPlayed++;
    switch (humanChoice) {
        case computerChoice:
            matchResult.textContent = "Tie! Both players chose " + humanChoice;
            break;
        case "rock":
            switch (computerChoice) {
                case "scissors":
                    humanScore++;
                    matchResult.textContent = "You win! Rock beats scissors";
                    break;
                case "paper":
                    computerScore++;
                    matchResult.textContent = "You lose! Paper beats rock";
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    humanScore++;
                    matchResult.textContent = "You win! Paper beats rock";
                    break;
                case "scissors":
                    computerScore++;
                    matchResult.textContent = "You lose! Scissors beats paper";
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    computerScore++;
                    matchResult.textContent = "You lose! Rock beats scissors";
                    break;
                case "paper":
                    humanScore++;
                    matchResult.textContent = "You win! Paper beats scissors";
                    break;
            }
            break;
        default:
            matchResult.textContent = "something went wrong while computing score..";
    }
    }

function playGame () {

    let humanChoice, computerChoice;

    //play 5 rounds
    // for (let i = 0; i < 5; i++) {
    //     humanChoice = getHumanChoice();
    //     computerChoice = getComputerChoice();
    //     playRound(humanChoice, computerChoice);
    // }


}

function declareWinner () {
    if (humanScore === computerScore)
        return "Tie! Your score: "+ humanScore + ". Computer's score: "+computerScore;
    else if (humanScore > computerScore)    
        return "You win! Your score: "+ humanScore + ". Computer's score: "+computerScore;
    else {
        return "You lose! Your score: "+ humanScore + ". Computer's score: "+computerScore;
    }
}

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const currentScore = document.querySelector(".currentScore");
const matchResult = document.querySelector(".matchResult");
const choiceDisplay = document.querySelector(".choiceDisplay");
const winnerDisplay = document.querySelector(".winnerDisplay");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent, getComputerChoice());
        currentScore.textContent = "Your score: " + humanScore + ". Computer's score: " + computerScore;
        if (roundsPlayed >= 5) {   //declare winner
            winnerDisplay.textContent = declareWinner();
        }
    })
});






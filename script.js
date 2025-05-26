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
            return "error: choice is "+choice;
    }
}

function getHumanChoice() {
    let humanChoice = prompt("rock, paper, or scissors?");
    return humanChoice;
}

function playRound (humanChoice, computerChoice) {

    console.log("You chose: "+humanChoice+". Computer chose: "+computerChoice);

    switch (humanChoice) {
        case computerChoice:
            console.log("Tie! Both players chose", humanChoice);
            break;
        case "rock":
            switch (computerChoice) {
                case "scissors":
                    humanScore++;
                    console.log("You win! Rock beats scissors")
                    break;
                case "paper":
                    computerScore++;
                    console.log("You lose! Paper beats rock")
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    humanScore++;
                    console.log("You win! Paper beats rock")
                    break;
                case "scissors":
                    computerScore++;
                    console.log("You lose! Scissors beats paper")
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    computerScore++;
                    console.log("You lose! Rock beats scissors");
                    break;
                case "paper":
                    humanScore++;
                    console.log("You win! Paper beats scissors");
                    break;
            }
            break;
        default:
            console.log("smth went wrong..");
            console.log("computer", computerChoice, "human", humanChoice);
    }
    }

function playGame () {

    let humanChoice, computerChoice;

    //play 5 rounds
    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    //declare winner
    humanScore === computerScore  ? console.log("Tie! Your score: "+ humanScore + ". Computer's score: "+computerScore):
    humanScore > computerScore    ? console.log("You win! You score: "+ humanScore + ". Computer's score: "+computerScore):
    console.log("You lose! Your score: "+ humanScore + ". Computer's score: "+computerScore);

}

let humanScore = 0;
let computerScore = 0;

playGame(); //5 rounds




console.log("Hello World");

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


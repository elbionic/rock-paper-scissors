// console.log("Hello World");

// 1. Write a function that randomly returns "rock", "paper", "scissors".
// 2. This is done by randomly picking an index of an array containing the 3 terms


// Globale variable declaration and initialisation
let computerChoice = "";
let humanChoice = "";
let humanScore = 0;
let computerScore = 0;


// Functions declaration
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        computerChoice = "rock";
    } else if (randomNumber === 1) {
        computerChoice = "paper";
    } else if (randomNumber === 2) {
        computerChoice = "scissors";
    } else {
        console.log("Some unknown error has occured!")
    }
    return computerChoice;
}


function getHumanChoice() {
    let humanInput = "";

    humanInput = prompt(`Please choose "rock" by typing "r"
        "paper" by typing "p"
        or "scissors" by typing "s"`, ``);

    if (humanInput === "r") {
        humanChoice = "rock";
    } else if (humanInput === "p") {
        humanChoice = "paper";
    } else if (humanInput === "s") {
        humanChoice = "scissors";
    } else {
        console.log(`Please only use "r", "p" or "s" for a valid input!`)
    }
    return humanChoice;
}


function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        console.log("Tie, try again!");
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore = humanScore + 1;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        computerScore = computerScore + 1;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        computerScore = computerScore + 1;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore = humanScore + 1;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore = humanScore + 1;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        computerScore = computerScore + 1;
    } else {
        console.log("An error occured!");
    }
    console.log(`Your choise was ${humanChoice} and the computer chose ${computerChoice}`);
    console.log(`Your score is ${humanScore}`);
    console.log(`The score of the computer is ${computerScore}`);
}


function playGame() {
    let gameRounds = 0;
    while (gameRounds < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        gameRounds = gameRounds + 1;
    }
    if (humanScore < computerScore) {
        console.log("---------------------------------");
        console.log("Sorry but you have lost the game!");
    } else if (humanScore > computerScore) {
        console.log("---------------------------------");
        console.log("Congrats, you have won!");
    } else {
        console.log("---------------------------------");
        console.log("It's a human, machine tie!");
    }
}


// Invoke the function
playGame();
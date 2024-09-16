// console.log("Hello World");

// 1. Write a function that randomly returns "rock", "paper", "scissors".
// 2. This is done by randomly picking an index of an array containing the 3 terms

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = "";
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


// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());

function getHumanChoice() {
    let humanInput = "";
    humanInput = prompt(`Please choose "rock" by typing "r"
        "paper" by typing "p"
        or "scissors" by typing "s"`, ``);
    let humanChoice = "";
    if  (humanInput === "r") {
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


    console.log(getHumanChoice());
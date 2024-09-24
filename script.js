// console.log("Hello World");

// 1. Write a function that randomly returns "rock", "paper", "scissors".
// 2. This is done by randomly picking an index of an array containing the 3 terms


// Globale variable declaration and initialisation
let computerChoice = "";
let humanScore = 0;
let computerScore = 0;
let humanChoice;



// function getHumanChoice() {

//     // AFTER working this out make a group call out of this repeating 
//     // code like tought in the lesso on event handlers

//     let rockBtn = document.querySelector("#rockBtn");
//     rockBtn.addEventListener("click", () => {
//         humanChoice = "rock";
//         console.log(`You chose: ${humanChoice}`);
//         return humanChoice;
//     });

//     let paperBtn = document.querySelector("#paperBtn");
//     paperBtn.addEventListener("click", () => {
//         humanChoice = "paper";
//         console.log(`You chose: ${humanChoice}`);
//         return humanChoice;
//     });

//     let scissorsBtn = document.querySelector("#scissorsBtn");
//     scissorsBtn.addEventListener("click", () => {
//         humanChoice = "scissors";
//         console.log(`You chose: ${humanChoice}`);
//         return humanChoice;
//     });
//     return humanChoice;
// }

// This is a shorter more performance and memory safing way to do
// the same as the commented code function getHumanChoice(); above
function getHumanChoice() {
    const buttons = document.querySelectorAll("button");
    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
        // and for each one we add a 'click' listener
        button.addEventListener("click", () => {
            console.log(`You chose: ${button.id}`);
            humanChoice = button.id;
            computerChoice = getComputerChoice();
            // console.log(humanChoice);
            playRound(humanChoice, computerChoice);
            // return humanChoice;
        });
        return humanChoice;
    });
    return humanChoice;
}



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
    console.log(`The computer chose: ${computerChoice}`);
    return computerChoice;
}

// computerChoice = getComputerChoice();
// console.log(computerChoice);
// humanChoice = getHumanChoice();
getHumanChoice();


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
    let container = document.querySelector(".container");
    const para = document.createElement("p");
    para.setAttribute('style', 'white-space: pre;');
    para.textContent = `Your choise was ${humanChoice} and the computer chose ${computerChoice} \r\n`;
    para.textContent += `Your score is ${humanScore} \r\n`;
    para.textContent += `The score of the computer is ${computerScore}`;
    container.appendChild(para);
}



// function playGame() {
//     let gameRounds = 0;
//     while (gameRounds < 5) {
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//         gameRounds = gameRounds + 1;
//     }
//     if (humanScore < computerScore) {
//         console.log("---------------------------------");
//         console.log("Sorry but you have lost the game!");
//     } else if (humanScore > computerScore) {
//         console.log("---------------------------------");
//         console.log("Congrats, you have won!");
//     } else {
//         console.log("---------------------------------");
//         console.log("It's a human, machine tie!");
//     }
// }


// // Invoke the function
// playGame();


// Selectors:
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const choiceContainer = document.querySelector("#container2");
const resultMessage = document.querySelector("#result-message");
const gameResultContainer = document.querySelector(".game-result-container");
const mainContainer = document.querySelector("#main-container");
let playerChoiceDisplay = document.querySelector("#player-choice");
let computerChoiceDisplay = document.querySelector("#computer-choice");
let yourScore = document.querySelector("#your-score");
let machineScore = document.querySelector("#machine-score");

let gameResult = document.createElement("h1")
gameResult.id = "game-result";
gameResultContainer.appendChild(gameResult);

// New game button:
const newGameButton = document.createElement("button");
newGameButton.id = "new-game-button";
newGameButton.textContent = "Press to start a new round"
gameResultContainer.appendChild(newGameButton);
newGameButton.style.visibility = "hidden"

// Event Listeners
rockBtn.addEventListener('click', handleClick);
paperBtn.addEventListener('click', handleClick);
scissorsBtn.addEventListener('click', handleClick);
newGameButton.addEventListener('click', refreshPage);

let humanChoice = "";
let choiceVariants = ["rock", "paper", "scissors"];
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let hidden = true;

function handleClick(event) {
    playRound(event);
    playerChoiceDisplay.textContent = humanChoice;
    computerChoiceDisplay.textContent = computerChoice;
    yourScore.textContent = `Your score ${humanScore}`;
    machineScore.textContent = `Computer score ${computerScore}`;
    untilFivePoints();
}

function getHumanChoice(event) {
    if (event.target.id === 'rock') {
        humanChoice = event.target.id
        return humanChoice;
    } else if (event.target.id === 'paper') {
        humanChoice = event.target.id
        return humanChoice;
    } else if (event.target.id === 'scissors') {
        humanChoice = event.target.id
        return humanChoice;
    } else {
        return alert("sth went wrong");
    }
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerChoice = choiceVariants[0];
        return computerChoice;
    } else if (randomNumber === 1) {
        computerChoice = choiceVariants[1];
        return computerChoice;
    } else if (randomNumber === 2) {
        computerChoice = choiceVariants[2];
        return computerChoice;
    }
}

function playRound(event) {
    getHumanChoice(event);
    getComputerChoice();
    if (humanChoice === computerChoice) {
        return resultMessage.textContent = "Draw!";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore += 1
        return resultMessage.textContent = "Paper beats Rock!"
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore += 1
        return resultMessage.textContent = "Rock beats Scissors!"
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1
        return resultMessage.textContent = "Paper beats Rock!"
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore += 1
        return resultMessage.textContent = "Scissors beats Paper!"
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1
        return resultMessage.textContent = "Rock beats Scissors!"
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1
        return resultMessage.textContent = "Scissors beats Paper!"
    }
}

function untilFivePoints() {
    if (humanScore < 5 && computerScore < 5) {
    } else if (humanScore === 5) {
        mainContainer.classList.toggle("blur");
        gameResult.textContent = "You won!"
        disableButtons();
        toggleNewGameBtn();
    } else if (computerScore === 5) {
        mainContainer.classList.toggle("blur");
        gameResult.textContent = "You lost!"
        disableButtons();
        toggleNewGameBtn();
    } else {
        console.log("Error!")
    }
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function toggleNewGameBtn() {
    if (hidden === true) {
        newGameButton.style.visibility = "visible";
    } else { 
        newGameButton.style.visibility = "hidden";
    }
}

function refreshPage() {
    window.location.reload();
}
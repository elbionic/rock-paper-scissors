const userChoiceDisplay = document.createElement('h1');
const computerChoiceDisplay = document.createElement('h1');
const resultDisplay = document.createElement('h1');
const playUntil5PointsDisplay = document.createElement('h1');
playUntil5PointsDisplay.setAttribute('style', 'white-space: pre;');
const gameGrid = document.getElementById('game');
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay, playUntil5PointsDisplay);


const choices = ['rock', 'paper', 'scissors'];
let userChoice;
let computerChoice;
let computerScore = 0;
let userScore = 0;

const handleClick = (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.textContent = 'User choice: ' + userChoice;
    generateComputerChoice();
    getResults();
    playUntil5Points();
}

const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoice = randomChoice;
    computerChoiceDisplay.textContent = 'Computer choice: ' + randomChoice; 
}

for (let i = 0; i < choices.length; i++) {
    const button = document.createElement('button');
    button.id = choices[i];
    button.textContent = choices[i];
    button.addEventListener('click', handleClick);
    gameGrid.appendChild(button);
}

const getResults = () => {
    switch (userChoice + computerChoice) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            resultDisplay.textContent = "YOU WIN!"  
            userScore += 1;
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            resultDisplay.textContent = "YOU LOSE!"
            computerScore += 1;
            break
        case 'paperpaper':
        case 'scissorsscissors':
        case 'rockrock':
            resultDisplay.textContent = "IT\'S A DRAW!!"
            break
    }
}

const playUntil5Points = () => {
        if (userScore < 5 && computerScore < 5) {
            playUntil5PointsDisplay.textContent = `Your score is ${userScore} the computer's score is ${computerScore}\r\n`;
            playUntil5PointsDisplay.textContent += `Go on playing! We play until 5 points are reached!`;
        } else if (userScore === 5 && computerScore < userScore) {
            playUntil5PointsDisplay.textContent = `Your score is ${userScore} the computer scored ${computerScore}.\r\n`; 
            playUntil5PointsDisplay.textContent += `YOU WON! \r\n`;
            playUntil5PointsDisplay.textContent += `Refresh the site to play again!`;
        } else if (computerScore === 5 && userScore < computerScore) {
            playUntil5PointsDisplay.textContent = `Your score is ${userScore} the computer scored ${computerScore}.\r\n`;
            playUntil5PointsDisplay.textContent += `YOU LOST! \r\n`;
            playUntil5PointsDisplay.textContent += `Refresh the site to play again!`;
        } else {
            playUntil5PointsDisplay.textContent = `Refresh the site to play again, HOMEY!`;
        }
}







// possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
//     userChoice = event.target.id;
//     userChoiceDisplay.textContent = userChoice;
//     generateComputerChoice();
//     getResult();
// }))

// function generateComputerChoice() {
//     const randomNumber = Math.floor(Math.random() * 3) + 1;
    
//     if (randomNumber === 1) {
//         computerChoice = 'rock';
//     } else if (randomNumber === 2) {
//         computerChoice = 'scissors';
//     } else if (randomNumber === 3) {
//         computerChoice = 'paper';
//     }
//     computerChoiceDisplay.textContent = computerChoice;
// }

// function getResult() {
//     if (computerChoice === userChoice) {
//         result = 'it\'s a draw!';
//     } else if (computerChoice === 'rock' && userChoice === 'paper') {
//         result = 'you\'ve won!';
//     } else if (computerChoice === 'rock' && userChoice === 'scissors') {
//         result = 'you\'ve lost!';
//     } else if (computerChoice === 'paper' && userChoice === 'scissors') {
//         result = 'you\'ve won!';
//     } else if (computerChoice === 'paper' && userChoice === 'rock') {
//         result = 'you\'ve lost!';
//     } else if (computerChoice === 'scissors' && userChoice === 'paper') {
//         result = 'you\'ve lost!';
//     } else if (computerChoice === 'scissors' && userChoice === 'rock') {
//         result = 'you\'ve won!';
//     }
//     resultDisplay.textContent = result;
// }
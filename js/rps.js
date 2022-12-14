let cpuScore = 0;
let playerScore = 0;
let winOrLose = "";

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    winOrLose = "Tie!";
    return playerSelection + " ties with " + computerSelection;
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    ++playerScore;
    winOrLose = "Winner!";
    return playerSelection + " beats " + computerSelection;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    ++playerScore;
    winOrLose = "Winner!";
    return playerSelection + " beats " + computerSelection;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    ++playerScore;
    winOrLose = "Winner!";
    return playerSelection + " beats " + computerSelection;
  } else {
    ++cpuScore;
    winOrLose = "Loser!";
    return computerSelection + " beats " + playerSelection;
  }
}

const container = document.querySelector("#container");
const result = document.querySelector("#result");
const winnerOrLoser = document.querySelector("#winnerOrLoser");
const playerScoreDisplay = document.querySelector("#player");
const cpuScoreDisplay = document.querySelector("#cpu");
const playerEmojiDisplay = document.querySelector("#playerEmoji");
const cpuEmojiDisplay = document.querySelector("#cpuEmoji");

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
  getPlayerChoice("Rock");
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
  getPlayerChoice("Paper");
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
  getPlayerChoice("Scissors");
});

const btn = document.querySelectorAll("Button");

function game() {
  if (playerScore == 5 && playerScore > cpuScore) {
    winnerOrLoser.textContent = "Congrats! You won the game!";
    btn.forEach((elem) => {
      elem.disabled = true;
    });
  }

  if (cpuScore == 5 && cpuScore > playerScore) {
    winnerOrLoser.textContent = "Game Over! You Lost the game!";
    console.log("loser");
    btn.forEach((elem) => {
      elem.disabled = true;
    });
  }
}

//Randomly chooses index to return rock paper or scissor
function getComputerChoice() {
  let arr = ["Rock", "Paper", "Scissors"];
  let random = arr[Math.floor(Math.random() * arr.length)];
  if (random == "Rock") {
    cpuEmojiDisplay.textContent = "????";
  }
  if (random == "Paper") {
    cpuEmojiDisplay.textContent = "????";
  }
  if (random == "Scissors") {
    cpuEmojiDisplay.textContent = "??????";
  }
  return random;
}

function getPlayerChoice(playerSelection) {
  result.textContent = playRound(playerSelection, getComputerChoice());
  winnerOrLoser.textContent = winOrLose;
  playerScoreDisplay.textContent = playerScore;
  cpuScoreDisplay.textContent = cpuScore;
  game();
  if (playerSelection == "Rock") {
    playerEmojiDisplay.textContent = "????";
  }

  if (playerSelection == "Paper") {
    playerEmojiDisplay.textContent = "????";
  }

  if (playerSelection == "Scissors") {
    playerEmojiDisplay.textContent = "??????";
  }
}

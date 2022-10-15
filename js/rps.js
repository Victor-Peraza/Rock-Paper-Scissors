//Randomly chooses index to return rock paper or scissor
let getComputerChoice = function () {
  let arr = ["Rock", "Paper", "Scissors"];
  let random = arr[Math.floor(Math.random() * arr.length)];
  return random;
};

let cpuScore = 0;
let playerScore = 0;
let winOrLose = "";

//Checks what beats what and returns winner or loser
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

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
  playRound("Rock", getComputerChoice());
  result.textContent = playRound("Rock", getComputerChoice());
  winnerOrLoser.textContent = winOrLose;
  console.log(winOrLose);
  console.log(result);
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
  playRound("Paper", getComputerChoice());
  result.textContent = playRound("Paper", getComputerChoice());
  winnerOrLoser .textContent = winOrLose;
  console.log(winOrLose);
  console.log(result);
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
  playRound("Scissors", getComputerChoice());
  result.textContent = playRound("Scissors", getComputerChoice());
  winnerOrLoser .textContent = winOrLose;
  console.log(winOrLose);
  console.log(result);
});

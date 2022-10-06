//Randomly chooses index to return rock paper or scissor
let getComputerChoice = function () {
  let arr = ["Rock", "Paper", "Scissors"];
  let random = arr[Math.floor(Math.random() * arr.length)];
  return random;
};

var cpuScore = 0;
var playerScore = 0;

//Checks what beats what and returns winner or loser
function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

  if (playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors") {

    if (playerSelection == computerSelection) {
      return "It's a Tie!";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
      ++playerScore;
      return "You Win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
      ++playerScore;
      return "You Win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
      ++playerScore;
      return "You Win! " + playerSelection + " beats " + computerSelection;
    } else {
      ++cpuScore;
      return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
  } else {
    return "Invalid Input. Nobody Wins."
  }
}

//driver
function game() {
  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt("pick").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log("CPU:"+computerSelection);
    console.log("Player: " + playerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log("CPU Score: " + cpuScore);
    console.log("Player Score: " + playerScore);
  }
  if (playerScore > cpuScore) {
    console.log("Player Wins!");
  } else {
    console.log("CPU Wins...");
  }
}

//driver
game();

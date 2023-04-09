//Rock beats scissors, scissors beat paper, and paper beats rock.

//getComputerChoice: A function that generates a random number from 0 - 3

function getComputerChoice() {
  let result;
  let value = Math.floor(Math.random() * 3);
  if (value === 0) {
    result = "rock";
  } else if (value === 1) {
    result = "paper";
  } else {
    result = "scissors";
  }
  return result;
}

//playRound: A function that allows a playe Selectionto play the Roock, paper, scissors game with the computerSelection

function playRound(playerSelection, computerSelection) {
  let caseInsensitive = playerSelection.toLowerCase();

  let winner;

  if (caseInsensitive == computerSelection) {
    console.log(`It is a DRAW`);
    winner = "DRAW";
  } else if (caseInsensitive == "rock") {
    if (computerSelection == "paper") {
      console.log("Paper beats Rock you loose!");
      winner = "Computer";
    } else {
      console.log("rock beats scissors you WIN!");
      winner = "Player";
    }
  } else if (caseInsensitive == "paper") {
    if (computerSelection == "scissors") {
      console.log(`${computerSelection} beats ${caseInsensitive}, you loose!`);
      winner = "Computer";
    } else {
      console.log(`${caseInsensitive} beats ${computerSelection}, you win`);
      winner = "Player";
    }
  } else if (caseInsensitive == "scissors") {
    if (computerSelection == "paper") {
      console.log(`${caseInsensitive} beats ${computerSelection}, you win`);
      winner = "Player";
    } else {
      console.log(`${computerSelection} beats ${caseInsensitive}, you loose`);
      winner = "Computer";
    }
  }
  return winner;
}

function game() {
  let gameResponse,
    computerScores = 0,
    playerScores = 0,
    highestScore;
  for (let i = 1; i <= 5; i++) {
    gameResponse = playRound("rock", getComputerChoice());

    if (gameResponse == "Computer") {
      computerScores++;
    } else if (gameResponse == "Player") {
      playerScores++;
    }
  }
  if (computerScores > playerScores) {
    highestScore = `Computer score of ${computerScores} is higher than Player score of ${playerScores}`;
  } else if (playerScores > computerScores)
    highestScore = `Player score of ${playerScores} is higher than computer score of ${computerScores}`;
  else {
    highestScore = `Computer score = ${computerScores}\nPlayer scores = ${playerScores} NO WINNER`;
  }
  return highestScore;
}

console.log(game());

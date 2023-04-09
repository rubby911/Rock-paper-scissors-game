//Rock beats scissors, scissors beat paper, and paper beats rock.

//getComputerChoice: A function that generates a random number from 0 - 2, both numbers, (0 and 2) inclussive.

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

/*playRound: A function that allows a player to play the Roock, paper, scissors game with the computerSelection

PlayerSelection: The input that will be recieved from the player.

ComputerSelection: A randomnly generated input by the computer, that will be received from the computer.

return: Return either Player (player wins), Computer (computer wins) or Draw (draw game)


*/

function playRound(playerSelection, computerSelection) {
  let caseInsensitive = playerSelection.toLowerCase(); // makes the playerselection input case insensitive

  let winner; // Stores The winner of the game

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

/*
game : A function that plays the Rock, paper scissors game, over a given number of times. (5 in this case) and keeps a score of the winner of each round.

return: Returns the player with the highest score or a draw
*/

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

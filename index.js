/*The Rock paper scissors game logic is as follow:
Rock beats scissors, scissors beat paper, and paper beats rock.
*/

//getComputerChoice: A function that generates a random number from 0 - 2, both numbers, (0 and 2) inclussive.

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let options = ['rock', 'paper', 'scissors']
  return options[randomNumber];
}

/*playRound: A function that allows a player to play the Roock, paper, scissors game with the computer

PlayerSelection: The input that will be recieved from the player.

ComputerSelection: A randomnly generated input by the computer, that will be received from the computer.

return: Returns either Player (player wins), Computer (computer wins) or Draw (draw game)



*/


function playRound(userSelection, computerSelection) {
  let result;
  let playerSelection = userSelection.toLowerCase()
  if((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')){
   result = `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${userSelection}. You loose!`
  }
  else if((computerSelection === "rock" && playerSelection === "paper") || (computerSelection === "paper" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "rock")){
    result = `${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)}. You WIN`
  }
  else if(playerSelection === computerSelection){
    result = `You chose ${playerSelection}, computer also chose ${computerSelection}. So it is a TIE`
  }
  else{
    result = `Invalid input ${playerSelection}, check your input and try again`
  }
  return result;
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
    let userSelection = prompt("Enter either Rock, paper or scissors")
    gameResponse = playRound(userSelection, getComputerChoice());
    console.log(gameResponse)

    if (gameResponse.includes('You loose!')) {
      
      computerScores++;
    } else if (gameResponse.includes('You WIN')) {
      playerScores++;
    }
  }
  if (computerScores > playerScores) {
    highestScore = `Computer WON with a total score of = ${computerScores}\n VS your score of = ${playerScores}`;
  } else if (playerScores > computerScores)
    highestScore = `You WON with a total score of ${playerScores}. VS computer score of ${computerScores}`;
  else {
    highestScore = `Computer score = ${computerScores} VS your score = ${playerScores} NO WINNER`;
  }
  return highestScore;
}

/*The Rock paper scissors game logic is as follow:
Rock beats scissors, scissors beat paper, and paper beats rock.
*/

//getComputerChoice: A function that generates a random number from 0 - 2, both numbers, (0 and 2) inclussive.

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let options = ['rock', 'paper', 'scissors']
  return options[randomNumber];
}








let playerScore = 0;
let computerScore = 0;






function playRound(userSelection, computerSelection) {
  
  let result;
  let playerSelection = userSelection.toLowerCase()
  if((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')){
    computerScore += 1;
   
   result = `${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${userSelection}. You loose!`
  }
  else if((computerSelection === "rock" && playerSelection === "paper") || (computerSelection === "paper" && playerSelection === "scissors") || (computerSelection === "scissors" && playerSelection === "rock")){
    playerScore += 1;
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






let buttons = document.querySelectorAll('button')
let resultp = document.querySelector('p')
let resultDiv = document.getElementById('resultdiv')





function disableButton(){
  buttons.forEach(button =>{
    button.disabled = true;
  })
}









buttons.forEach(button =>{
  button.addEventListener('click', function gameStarts(){ 
    let gamePlay = playRound(button.textContent, getComputerChoice())
    resultDiv.classList.add('resultdiv')
    
    resultp.innerHTML = gamePlay + `<br><br>` +  `Your current score = ${playerScore}` + "<br><br>" + `Computer current score = ${computerScore}`
  if(playerScore > computerScore && playerScore >= 5){
    resultp.innerHTML = gamePlay    + "<br><br>" +
    `Congratulations you WON with a total score of ${playerScore - computerScore}` + "<br><br>" + "Reload the page to play the game again"
    resultDiv.style.backgroundColor = 'green' 
    disableButton()
  }
  else if(computerScore > playerScore && computerScore >= 5){
    resultp.innerHTML = gamePlay  + "<br><br>" +
    `Better luck next time. Computer WON with a total score of ${computerScore - playerScore}` + "<br><br>" + "Reload the page to play the game again"
    resultDiv.style.backgroundColor = "red";
    disableButton()
  }

}
)
}
) 


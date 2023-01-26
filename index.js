//Rock beats scissors, scissors beat paper, and paper beats rock.

function getComputerChoice(){
    let result = ""
    let value = Math.floor(Math.random() * 3)
    if (value === 0){
        result += "Rock"
    }
    else if(value === 1){
        result += "Paper"
    }
    else{
        result += "Scissors"
    }
    return result;
}


//console.log(getComputerChoice())


function playerRound(player, computer){
   let convertedPlayer = player.toLowerCase()
   let convertedComputer = computer.toLowerCase()
   let result = ""
   if(convertedPlayer === convertedComputer){
       result += `It is a DRAW`
   }
   else if(convertedPlayer === "rock"){
       if(convertedComputer === "scissors"){
           result += "Rock beat scissors, you WIN"
       }
       else if(convertedComputer === "paper"){
           result += "Paper beats roack, Computer WIN"
       }

   }
   else if(convertedPlayer === "paper"){
       if(convertedComputer === "scissors"){
           result += "Scissors beats paper, Computer WIN"
       }
       else if(convertedComputer === "rock"){
           result += "Paper beats rock, You WIN"
       }
   }
   else if(convertedPlayer === "scissors"){
       if(convertedComputer === "rock"){
           result += "Rock beats scissors, Computer win"
       }
       else if(convertedComputer === "paper"){
           result += "Scissors beats paper, You win"
       }
   }




   return result
}








//console.log(playerRound("paPEr", "SCissorS"))


function game(){
    let computerScore = 0;
    let playerScore = 0;
    let message = ""
    let result = ""
    for (let i = 1; i <= 5; i++){
        let playerInput = prompt("Enter either ROCK, Paper, or Scissors")
        result += playerRound(playerInput, getComputerChoice())
        if(result === `It is a DRAW`){
            //message += "No WINNER"
            console.log(`Round ${i} is a DRAW`)
        }
        else if (result === "Rock beat scissors, you WIN"){
            playerScore += 1;
            console.log(`You WIN round ${i}`)
            
        }
        else if(result === "Paper beats roack, Computer WIN"){
            computerScore += 1;
            console.log(`Computer WIN round ${i}`)
        }
        else if(result === "Scissors beats paper, Computer WIN"){
            computerScore += 1;
            console.log(`Computer WIN round ${i}`)
        }
        else if(result === "Paper beats rock, You WIN"){
            playerScore += 1;
            console.log(`You Win round ${i}`)
        }
        else if(result === "Rock beats scissors, Computer win"){
            computerScore += 1
            console.log(`Computer WIN round ${i}`)
        }
        else{
            playerScore += 1;
            console.log(`You WIN round ${i}`)

        }
    }
    if(computerScore > playerScore){
        message += `Computer WIN with a score of ${computerScore}`
    }
    else if(computerScore < playerScore){
        message += `You WIN with a score of ${playerScore}`
    }
    else{
        message += `YOU and computer = ${playerScore} it is a DRAW`
    }

    return message;
}

console.log(game())
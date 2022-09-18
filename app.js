// // getComputerChoice function

// function getComputerChoice(){
//  var compchoice = Math.floor(Math.random() * 3)

// var computerSelection = "random"

// if (compchoice === 0){
//     computerSelection = "Rock"
// } else if(compchoice === 1){
//     computerSelection = "Paper"
// } else{
//     computerSelection = "Scissors"
// }

// console.log(computerSelection)
// }


// // playGame function

// function playGame(computerSelection,playerSelection){
// if (computerSelection === "Rock" && playerSelection === "Paper"){
// console.log("You have chosen Paper---You Wonn!!") 
// }else if (computerSelection === "Rock" && playerSelection === "Scissors"){
// console.log("You have chosen Scissors---You Lost!!")
// }else if (computerSelection === "Rock" && playerSelection === "Rock" || computerSelection === "Scissors" && playerSelection === "Scissors" || computerSelection === "Paper" && playerSelection === "Paper"){
// console.log(`You have chosen ${playerSelection} --- you Tie!!`)
// }else if(computerSelection === "Paper" && playerSelection === "Rock"){
// console.log("You have chosen Rock --- you Lost!!!")
// }else if(computerSelection === "Paper" && playerSelection === "Scissors"){
// console.log("You have chosen Scissors --- You Won")    
// }else if(computerSelection === "Scissors" && playerSelection === "Paper"){
// console.log("You have chosen Paper --- You Lost!!!")
// }else if(computerSelection === "Scissors" && playerSelection === "Rock"){
// console.log("You chose Rock --- You won!!!")
// }
// }




function playRound(playerSelection, computerSelection) {
if (computerSelection === "Rock" && playerSelection === "Paper"){
return "You have chosen Paper---You Wonn!!" 
}else if (computerSelection === "Rock" && playerSelection === "Scissors"){
return "You have chosen Scissors---You Lost!!"
}else if (computerSelection === "Rock" && playerSelection === "Rock" || computerSelection === "Scissors" && playerSelection === "Scissors" || computerSelection === "Paper" && playerSelection === "Paper"){
return `You have chosen ${playerSelection} --- you Tie!!`
}else if(computerSelection === "Paper" && playerSelection === "Rock"){
return "You have chosen Rock --- you Lost!!!"
}else if(computerSelection === "Paper" && playerSelection === "Scissors"){
return "You have chosen Scissors --- You Won"    
}else if(computerSelection === "Scissors" && playerSelection === "Paper"){
return "You have chosen Paper --- You Lost!!!"
}else if(computerSelection === "Scissors" && playerSelection === "Rock"){
return "You chose Rock --- You won!!!"

}
}

function getComputerChoice(){
  
        let compChoices = ["Rock", "Paper", "Scissors"]; 
        let i = Math.floor(Math.random() * 3);
        var choice = compChoices[i];
      
        return choice;        
      
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))
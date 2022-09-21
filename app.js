// playRound function 2.0

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

// // getComputerChoice function

function getComputerChoice(){
  
        let compChoices = ["Rock", "Paper", "Scissors"]; 
        let i = Math.floor(Math.random() * 3);
        var choice = compChoices[i];
      
        return choice;        
      
}
// let playerInput = window.prompt("What do you choose? Rock,Paper,Scissors")
const playerSelection = playerInput
const computerSelection = getComputerChoice();

// console.log(playRound(playerSelection, computerSelection))


// game function

var i = 0
function game(){
    while(i<5){
        const playerSelection = playerInput;
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        i++
    }
}

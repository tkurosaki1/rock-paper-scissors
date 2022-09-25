// // getComputerChoice function

function getComputerChoice(){
  
        let compChoices = ["Rock", "Paper", "Scissors"]; 
        let i = Math.floor(Math.random() * 3);
        var choice = compChoices[i];
      
        return choice;        
      
}
<<<<<<< HEAD
let playerInput = window.prompt("What do you choose? Rock,Paper,Scissors")
const playerSelection = playerInput
const computerSelection = getComputerChoice();
=======
// let playerInput = window.prompt("What do you choose? Rock,Paper,Scissors")
let playerInput = ""
// const playerSelection = playerInput
// const computerSelection = getComputerChoice();
>>>>>>> rps-ui

// Paper Button Code
const pbtn = document.querySelector("#myBtn");
pbtn.addEventListener("click",() =>{
    const computerSelection = getComputerChoice();
    if(computerSelection === "Rock"){
        scoreDiv.innerHTML="Yaaaay You won against Paper!! --- Click To Play Again";
    }if(computerSelection === "Paper"){
        scoreDiv.innerHTML = "Awww You Tie to Paper!--- Click To Play Again";
    }if(computerSelection === "Scissors"){
        scoreDiv.innerHTML= "Awww you lost against Scissors--- Click To Play Again";
    }
});

// Rock Button Code
const rbtn = document.querySelector("#myBtn1");
rbtn.addEventListener("click",() =>{
    const computerSelection = getComputerChoice();
    if(computerSelection === "Rock"){
        scoreDiv.innerHTML="Tie --- Click To Play Again";
    }if(computerSelection === "Paper"){
        scoreDiv.innerHTML="Awww You lost to Paper!--- Click To Play Again";
    }if(computerSelection === "Scissors"){
        scoreDiv.innerHTML="Yaaay you won against Scissors --- Click To Play Again";
    }
});

// Scissors Button Code
const sbtn = document.querySelector("#myBtn2");
sbtn.addEventListener("click",() =>{
    const computerSelection = getComputerChoice();
    if(computerSelection === "Rock"){
        scoreDiv.innerHTML="Awwww You lost to Rock--- Click To Play Again";
    }if(computerSelection === "Paper"){
        scoreDiv.innerHTML="Yaaaaay You won to Paper!--- Click To Play Again";
    }if(computerSelection === "Scissors"){
        scoreDiv.innerHTML ="you Tie against Scissors--- Click To Play Again";
    }
});

const scoreDiv = document.querySelector("#scoreBoard");

 
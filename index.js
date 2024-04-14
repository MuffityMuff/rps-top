
function getComputerChoice(){
    let array = ["rock", "paper", "scissors"];
   let computerChoices = array[Math.floor(Math.random()* 3)];
   return computerChoices
}

let playerScore = 0;
let computerScore = 0;



function ROCK(){
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    document.getElementById('p1').innerHTML = `Computer's Choice is ${computerSelection}`
    if(document.getElementById('r').addEventListener){
        let playerChoice = "rock"
        console.log(playerChoice)
    }
    if(computerSelection === "rock"){
        playerScore++;
        computerScore++;
        console.log(`User Score is: ${playerScore} and Computer Score is ${computerScore}`)
        getScore();
    } else if (computerSelection === "paper"){
        playerScore++
        console.log(`User Score is: ${playerScore} and Computer Score is ${computerScore}`)
        getScore();
    } else {
        computerScore++
        console.log(`User Score is: ${playerScore} and Computer Score is ${computerScore}`)
        getScore();
    }
    if (playerScore == 5 && computerScore == 5){
        alert("It is a draw!!");
        playerScore = 0;
        computerScore = 0;
    } else if (playerScore === 5){
        alert("You Won!")
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5){
        alert("Computer Won!")
        playerScore = 0;
        computerScore = 0;
    }
}

function PAPER(){
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    document.getElementById('p1').innerHTML = `Computer's Choice is ${computerSelection}`
    if(document.getElementById('p').addEventListener){
        let playerChoice = "paper"
        console.log(playerChoice)
    }
    if(computerSelection === "paper"){
        playerScore++;
        computerScore++;
        console.log(`User Score is: ${playerScore} and Computer Score is ${computerScore}`)
        getScore();
        
    } else if (computerSelection === "rock"){
        playerScore++
        console.log(`User Score is: ${playerScore} and Computer Score is ${computerScore}`)
        getScore();
    } else {
        computerScore++
        console.log(`User Score is: ${playerScore} and Computer Score is ${computerScore}`)
        getScore();
    }
    if (playerScore == 5 && computerScore == 5){
        alert("It is a draw!!");
        playerScore = 0;
        computerScore = 0;
    } else if (playerScore === 5){
        alert("You Won!")
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5){
        alert("Computer Won!")
        playerScore = 0;
        computerScore = 0;
    }
    
}
function SCISSORS(){
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    document.getElementById('p1').innerHTML = `Computer's Choice is ${computerSelection}`
    if(document.getElementById('r').addEventListener){
        let playerChoice = "scissors"
        console.log(playerChoice)
    }
    if(computerSelection === "scissors"){
        playerScore++;
        computerScore++;
        console.log(`User Score is: ${playerScore} and Computer Score is ${computerScore}`)
        getScore();
        
    } else if (computerSelection === "paper"){
        playerScore++
        console.log(`User Score is: ${playerScore} and Computer Score is ${computerScore}`)
        getScore();
    } else {
        computerScore++
        console.log(`User Score is: ${playerScore} and Computer Score is ${computerScore}`)
        getScore();
    }
    if (playerScore == 5 && computerScore == 5){
        alert("It is a draw!!");
        playerScore = 0;
        computerScore = 0;
    } else if (playerScore === 5){
        alert("You Won!")
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5){
        alert("Computer Won!")
        playerScore = 0;
        computerScore = 0;
    }
}
function getScore(){
    document.getElementById('userScore').innerHTML = playerScore;
    document.getElementById('aiScore').innerHTML = computerScore;
}

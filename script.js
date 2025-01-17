import { startConfetti,stopConfetti,removeConfetti } from "./confetti.js";

const playerScoreEl = document.getElementById('playerScore');
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore');
const computerChoiceEl =  document.getElementById('computerChoice');
const resultText = document.getElementById('result-text');

const computerRock =  document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const playerRock =  document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;

let computerChoice = '';

// Resetting Selected Icons
function resetIcons(){
  allGameIcons.forEach((icons)=>{
    icons.classList.remove('selected');
  });
}
// Reset score , platyer choice and computer choice

function resetAll(){
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  resultText.textContent = '';
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  
  resetIcons(); 
}
window.resetAll = resetAll;



// Random Computer choice

function computerRandomChoice(){
  const computerChoiceNumber = Math.random();

  if(computerChoiceNumber < 0.2){
    computerChoice = 'rock';
  }
  else if(computerChoiceNumber <= 0.4){
    computerChoice = 'paper'
  }
  else if( computerChoiceNumber <= 0.6){
    computerChoice = 'scissors';
  }
  else if(computerChoiceNumber <= 0.8){
    computerChoice = 'lizard';
  }
  else {
    computerChoice = 'spock';
  }
}

//  Add computer choice / selected styling

function displayComputerChoice(){
  
 switch (computerChoice){
   case 'rock':
     computerRock.classList.add('selected');
     computerChoiceEl.textContent = ' ---Rock';
     break;  
 
   case 'paper':
       computerPaper.classList.add('selected');
       computerChoiceEl.textContent = ' ---Paper';
       break;  
 
   case 'scissors':
         computerScissors.classList.add('selected');
         computerChoiceEl.textContent = ' ---Scissors';
         break;   
 
   case 'lizard':
           computerLizard.classList.add('selected');
           computerChoiceEl.textContent = ' ---lizard';
           break;  
 
   case 'spock':
     computerSpock.classList.add('selected');
     computerChoiceEl.textContent = ' ---Spock';
     break;          
   }
 }


//  Check result, increase scores, update resultText..
function updateScore(playerChoice){
  
  if(playerChoice === computerChoice){
    resultText.textContent = "It's a Tie!"
  }else{
    const choice = choices[playerChoice];
    
    if(choice.defeats.indexOf(computerChoice)> -1){
      // startConfetti();
      resultText.textContent = 'You Won!';
      playerScoreNumber ++;
      playerScoreEl.textContent = playerScoreNumber;
    }
    else {
      resultText.textContent = 'You Lost!';
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }

}
     

//  Call functions to process turn
function checkResult(playerChoice){
  resetIcons();
  computerRandomChoice(); 
  displayComputerChoice();  
  updateScore(playerChoice);
}


// Passing player selection value and styling icons

function select(playerChoice){
 checkResult(playerChoice);
//  Add Selected styling & playerChoice
switch (playerChoice){
  case 'rock':
    playerRock.classList.add('selected');
    playerChoiceEl.textContent = ' ---Rock';
    break;  

  case 'paper':
      playerPaper.classList.add('selected');
      playerChoiceEl.textContent = ' ---Paper';
      break;  

  case 'scissors':
        playerScissors.classList.add('selected');
        playerChoiceEl.textContent = ' ---Scissors';
        break;   

  case 'lizard':
          playerLizard.classList.add('selected');
          playerChoiceEl.textContent = ' ---lizard';
          break;  

  case 'spock':
    playerSpock.classList.add('selected');
    playerChoiceEl.textContent = ' ---Spock';
    break;          
  }
}
window.select = select;
     
// on Load. set initial values
resetAll();
// startConfetti();
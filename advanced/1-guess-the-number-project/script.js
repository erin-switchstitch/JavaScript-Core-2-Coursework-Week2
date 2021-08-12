//const { clearLine } = require("readline");
const cl = console.log;

let randomNumber = Math.floor(Math.random() * 100 + 1);

let randomTries = Math.floor(Math.random() * 10 + 1);
let triesCounter = randomTries;


const noTriesLeft = document.getElementById("noTriesLeft");
noTriesLeft.innerText = `Number of Tries : ${randomTries}`;

const noTriesRemove = document.getElementById("noTriesRemove");

function guessNumber() {

  let guess = document.querySelector(".inputs-Values").value;
  cl("Guess Input : " + guess)
  cl("Random Number : " + randomNumber)
  cl("tries counter :" + triesCounter)

  if (triesCounter > 1) {
    if ((guess <= 0) || (guess == NaN)) {
     console.log("Please enter a number between 1 and 100")
     noTriesRemove.innerText = "Please enter a number between 1 and 100";
    } else if (guess > randomNumber){
      console.log("Number is too high, try again")
      noTriesRemove.innerText = "Number is too high, try again";
      triesCounter = triesCounter - 1 ;
    } else if (guess < randomNumber){
      console.log("Number is too low, try again")
      noTriesRemove.innerText = "Number is too low, try again";
      triesCounter = triesCounter - 1 ;
    } else {
      cl("Guess is correct. You win!");
      noTriesRemove.innerText = "Guess is correct. You win!";
    }

  noTriesLeft.innerText = `Number of Tries : ${triesCounter}`;

  } else {
    noTriesLeft.innerText = `You Lose, the number was ${randomNumber}`;
    noTriesRemove.innerText = "";
  }
  
  cl("Tries Left : " + triesCounter)
}


const newGameButton = document.getElementById("newGameID");

function newGame() {
  cl ("New Game Clicked")
  randomNumber = Math.floor(Math.random() * 100 + 1);
  document.querySelector(".inputs-Values").value = "";
  randomTries = Math.floor(Math.random() * 10 + 1);
  cl("New tries : " + randomTries)
  triesCounter = randomTries;
  noTriesLeft.innerText = `Number of Tries : ${randomTries}`;
  noTriesRemove.innerText = "Guess a number between 1 and 100";
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
newGameButton.addEventListener("click",newGame)
document.addEventListener("keypress", keyBoardEvents);

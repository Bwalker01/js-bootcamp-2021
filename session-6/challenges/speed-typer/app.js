const words = [
  "apple",
  "little",
  "mint",
  "closed",
  "bought",
  "fickle",
  "long",
  "developed",
  "done",
  "cannot",
  "gondola",
  "veneered",
];

let time = 5; // time left on round
let score = 0; // keeps track of the score
let isPlayingGame; // determines if user is playing or not

// ========= Selectors =========
const wordInput = document.querySelector("#word-input"); //gets the input field
const currentWord = document.querySelector("#current-word"); //gets where the current word will be displayed
const scoreDisplay = document.querySelector("#score"); //gets where the score will be displayed
const timeDisplay = document.querySelector("#time"); //gets where the time will be displayed
const message = document.querySelector("#message"); //gets where the message to the user will be displayed
const seconds = document.querySelector("#seconds");

//========= Initialise Game ==========
const initialise = () => {
  console.log("Initialised Game.");

  //fetch new random word and display it
  showWord();

  //fetch the user's input
  wordInput.addEventListener("input", checkInput);

  //do count down by one second
  setInterval(countDownTimer, 1000);

  //check the status of the game
  setInterval(checkGameStatus, 500);
};

const checkGameStatus = () => {
  if (!isPlayingGame && time === 0) {
    message.innerHTML = "Game Over";
    score = -1;
  }
};

const countDownTimer = () => {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlayingGame = false;
  }
};

const checkWordsMatch = () => {
  let matched = false;

  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "CORRECT";
  } else {
    message.innerHTML = "";

    return matched;
  }
};

const checkInput = () => {
  if (checkWordsMatch()) {
    //True -- there was a match
    isPlayingGame = true;
    time = 6;

    showWord();

    wordInput.value = "";
    score++;
  }
  if (scoreDisplay.innerHTML === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
};

const showWord = () => {
  const wordSelected = words[Math.floor(Math.random() * words.length)];
  currentWord.innerHTML = wordSelected;
};

window.addEventListener("load", initialise);

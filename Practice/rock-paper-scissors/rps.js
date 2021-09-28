function play(userChoice) {
  const options = ["Rock", "Paper", "Scissors"];
  const compChoice = options[Math.floor(Math.random() * 3)];

  console.log("User: ", userChoice);
  document.getElementById("users").innerHTML = userChoice;
  console.log("Computer: ", compChoice);
  document.getElementById("comps").innerHTML = compChoice;
  if (userChoice === compChoice) {
    console.log("Draw");
    document.getElementById("winner").innerHTML = "Draw!";
  } else if (
    (userChoice === "Rock" && compChoice === "Scissors") ||
    (userChoice === "Paper" && compChoice === "Rock") ||
    (userChoice === "Scissors" && compChoice === "Paper")
  ) {
    document.getElementById("winner").innerHTML = "You win!";
    let userScore = document.getElementById("userScore").innerText;
    userScore++;
    document.getElementById("userScore").innerText = userScore;
    console.log("User wins");
  } else {
    document.getElementById("winner").innerHTML = "I win!";
    let compScore = document.getElementById("compScore").innerText;
    compScore++;
    document.getElementById("compScore").innerText = compScore;
    console.log("Computer wins");
  }
}

const userChoice = "Scissors";
const options = ["Rock", "Paper", "Scissors"];
const compChoice = options[Math.floor(Math.random() * 3)];

console.log("User: ", userChoice);
console.log("Computer: ", compChoice);
if (userChoice === compChoice) {
  console.log("Draw");
} else if (
  (userChoice === "Rock" && compChoice === "Scissors") ||
  (userChoice === "Paper" && compChoice === "Rock") ||
  (userChoice === "Scissors" && compChoice === "Paper")
) {
  console.log("User wins");
} else {
  console.log("Computer wins");
}

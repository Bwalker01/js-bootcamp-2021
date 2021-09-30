function play(userChoice) {
  const options = ["Rock", "Paper", "Scissors"];
  const compChoice = options[Math.floor(Math.random() * 3)];

  document.getElementById("inp1").disabled = true;
  document.getElementById("inp2").disabled = true;
  document.getElementById("inp3").disabled = true;
  console.log("User: ", userChoice);
  if (document.getElementById("u")) {
    ani = document
      .getElementById("u")
      .animate([{ opacity: 1 }, { opacity: 0 }], 500);
    ani.onfinish = () => {
      return false;
    };
    while (ani.onfinish()) {}
  }
  document.getElementById(
    "users"
  ).innerHTML = `<img src='${userChoice}.png' class="center" id="u">`;
  document.getElementById("u").animate([{ opacity: 0 }, { opacity: 1 }], 500);
  console.log("Computer: ", compChoice);
  if (document.getElementById("c")) {
    ani = document
      .getElementById("c")
      .animate([{ opacity: 1 }, { opacity: 0 }], 500);
    ani.onfinish = () => {
      return false;
    };
    while (ani.onfinish()) {}
  }
  document.getElementById(
    "comps"
  ).innerHTML = `<img src='${compChoice}.png' class="center" id="c">`;
  document.getElementById("c").animate([{ opacity: 0 }, { opacity: 1 }], 500);
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
    document.getElementById("winner").innerHTML = "Comp wins!";
    let compScore = document.getElementById("compScore").innerText;
    compScore++;
    document.getElementById("compScore").innerText = compScore;
    console.log("Computer wins");
  }
  document.getElementById("inp1").disabled = false;
  document.getElementById("inp2").disabled = false;
  document.getElementById("inp3").disabled = false;
}

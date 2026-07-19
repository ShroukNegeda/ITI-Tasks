var PlayerOneChoice = null;
var PlayerTwoChoice = null;

const choiceButtons = document.querySelectorAll(".choice-btn");
const playBtn = document.getElementById("play-btn");
const resetBtn = document.getElementById("reset-btn");
const resultEl = document.getElementById("result");
const p1ChoiceEl = document.getElementById("p1-choice");
const p2ChoiceEl = document.getElementById("p2-choice");

choiceButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const player = btn.getAttribute("data-player");
    const choice = btn.getAttribute("data-choice");

    if (player === "1") {
      PlayerOneChoice = choice;
      p1ChoiceEl.textContent = choice;
    } else if (player === "2") {
      PlayerTwoChoice = choice;
      p2ChoiceEl.textContent = choice;
    }
  });
});

playBtn.addEventListener("click", function () {
  if (!PlayerOneChoice || !PlayerTwoChoice) {
    resultEl.textContent = "Please choose for both players first!";
    resultEl.className = "mt-4 text-warning";
    return;
  }

  let message = "";

  if (PlayerOneChoice === PlayerTwoChoice) {
    message = "It's a tie! Both players chose " + PlayerOneChoice + ".";

  } else if (
    (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Paper") ||
    (PlayerOneChoice === "Paper" && PlayerTwoChoice === "Rock")
  ) {
    message = "Paper beats Rock! The player who chose Paper wins.";

  } else if (
    (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Scissors") ||
    (PlayerOneChoice === "Scissors" && PlayerTwoChoice === "Rock")
  ) {
    message = "Rock beats Scissors! The player who chose Rock wins.";

  } else if (
    (PlayerOneChoice === "Paper" && PlayerTwoChoice === "Scissors") ||
    (PlayerOneChoice === "Scissors" && PlayerTwoChoice === "Paper")
  ) {
    message = "Scissors beats Paper! The player who chose Scissors wins.";
  }

  resultEl.textContent = message;
  resultEl.className = "mt-4 text-success";
  console.log(message);
});

resetBtn.addEventListener("click", function () {
  PlayerOneChoice = null;
  PlayerTwoChoice = null;
  p1ChoiceEl.textContent = "-";
  p2ChoiceEl.textContent = "-";
  resultEl.textContent = "";
});
const choices = ["rock", "paper", "scissors"];
let gameActive = true;

function play(userChoice) {
  if (!gameActive) return;

  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result =
    userChoice === computerChoice
      ? "It's a tie! 🤝"
      : (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
      ? "You win! 🎉"
      : "Computer wins! 💻";

  document.getElementById("result").innerHTML = `
    You chose: <b>${userChoice}</b><br>
    Computer chose: <b>${computerChoice}</b><br>
    <h3>${result}</h3>
  `;

  document.getElementById("play-again").style.display = "block";
  gameActive = false;
}

function resetGame() {
  document.getElementById("result").innerHTML = "Make your move!";
  document.getElementById("play-again").style.display = "none";
  gameActive = true;
}

let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg"); // Make sure msg targets a single element, not a NodeList

const userScorepara = document.querySelector("#user-score");
const computerScorepara = document.querySelector("#computer-score");

// GENERATE COMPUTER CHOICE ---> MODULAR PROGRAMMING
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"]; // Ensure lowercase for consistency
  const randIndex = Math.floor(Math.random() * 3);
  return options[randIndex];
};

const drawGame = () => {
  // console.log("Game was Draw");
  msg.innerText = "Game Draw! Play Again!";
  msg.style.backgroundColor = "rgb(239, 239, 177)";
};

const showWinner = (userwin, userchoice, compChoice) => {
  if (userwin) {
    userScore++;
    userScorepara.innerText = userScore;
    // console.log("You win!");
    msg.innerText = `You win! Your ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore++;
    computerScorepara.innerText = computerScore;
    // console.log("You Lost");
    msg.innerText = `You lost! ${compChoice} beats your ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userchoice) => {
  // console.log("User choice=", userchoice);
  const compChoice = genCompChoice();
  // console.log("Computer choice=", compChoice);

  if (userchoice === compChoice) {
    drawGame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compChoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compChoice === "rock" ? true : false;
    } else if (userchoice === "scissors") {
      userwin = compChoice === "rock" ? false : true;
    }
    showWinner(userwin, userchoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id").toLowerCase(); // Ensure case consistency
    playGame(userchoice);
  });
});

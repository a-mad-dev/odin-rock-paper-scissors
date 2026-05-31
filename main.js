const rockbtn = document.querySelector(".rock");
const paperbtn = document.querySelector(".paper");
const scissorsbtn = document.querySelector(".scissors");
const info = document.querySelector(".info");

let humanScore = 0;
let computerScore = 0;

rockbtn.addEventListener("click", () => {
	computerChoice = getComputerChoice();
	playRound('rock', computerChoice);
});

paperbtn.addEventListener("click", () => {
	computerChoice = getComputerChoice();
	playRound('paper', computerChoice);
});

scissorsbtn.addEventListener("click", () => {
	computerChoice = getComputerChoice();
	playRound('scissors', computerChoice);
});



function getComputerChoice() {
	const randChoice = Math.floor(Math.random() * 3);
	if (randChoice === 0) {
		return "rock";
	} else if (randChoice === 1) {
		return "paper";
	} else {
		return "scissors";
	}
}

function getHumanChoice() {
	const choice = prompt("Rock, Paper, or Scissors?");
	if (!choice) return null;
	return choice.trim().toLowerCase();
}

function playRound(humanChoice, computerChoice) {
	if (humanChoice === computerChoice) {
		console.log(`Draw. Player chose ${humanChoice} and computer chose ${computerChoice}`)
	} else {
		if (humanChoice === "paper" && computerChoice !== "scissors") {
			humanScore += 1;
			info.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
		} else if (humanChoice === "rock" && computerChoice !== "paper") {
			humanScore += 1;
			info.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
		} else if (humanChoice === "scissors" && computerChoice !== "rock") {
			humanScore += 1;
			info.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
		} else {
			computerScore += 1;
			info.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
		}
	}
}

if (humanScore === 5 || computerScore === 5) {
	calcWinner()
}

function calcWinner() {
	if (humanScore === computerScore) {
		console.log("Draw!");
	} else if (humanScore > computerScore) {
		console.log("Player Won!");
	} else {
		console.log("Computer Won!");
	}
}

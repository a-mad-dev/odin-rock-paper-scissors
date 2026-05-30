// Old JS
let pScore, cScore = 0;

function getComputerChoice() {
	const randChoice = Math.floor(Math.random() * 3);
	let choice;
	if (randChoice === 0) {
		choice = "rock";
	} else if (randChoice === 1) {
		choice = "paper";
	} else if (randChoice === 2) {
		choice = "scissors";
	}
	return choice;
}

function getUserChoice() {
	const userChoice = parseInt(prompt("Rock, paper or scissors? (0, 1 or 2)"));
	let userChose;
	if (userChoice === 0) {
		userChose = "rock";
	} else if (userChoice === 1) {
		userChose = "paper";
	} else if (userChoice === 2) {
		userChose = "scissors";
	} else {
		userChose = "unknown input";
		console.log("Error occured!");
	}
	return userChose;
}

function game() {
	let computer = getComputerChoice();
	let player = getUserChoice();
	if (player === computer) {
		console.log("Draw!");
	} else {
		if (player === "rock") {
			if (computer === "paper") {
				console.log("Computer wins!");
			} else {
				console.log("player wins!");
			}
		} else if (player === "paper") {
			if (computer === "scissors") {
				console.log("Computer wins!");
			} else {
				console.log("Player wins!");
			}
		} else if (player === "scissors") {
			if (computer === "rock") {
				console.log("Computer wins!");
			} else {
				console.log("Player wins!");
			}
		}
	}
}


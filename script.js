const selection = ["rock", "paper", "scissors"]

function capitalize(string) {
	return string.replace(/^\w/, c => c.toUpperCase())
}

function computerPlay() {
	return selection[Math.round(Math.random() * 2)]
}

function playerPlay()  {
	return prompt("Type your selection: [rock, paper, scissors]").toLowerCase()
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) return 0
	
	switch (playerSelection) {
		case "rock":
			return computerSelection === "scissors" ? 1 : 2
		case "paper":
			return computerSelection === "rock" ? 1 : 2
		case "scissors":
			return computerSelection === "paper" ? 1 : 2
	}
}

function game() {
	for (let i = 0; i < 5; i++) {
		const computerSelection = computerPlay()
		const playerSelection = playerPlay()
		const winningPlayer = playRound(playerSelection, computerSelection)
	
		if (winningPlayer == 0) console.log(`It's a tie!`)
		else if (winningPlayer == 1) {
			console.log(`You Win! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`)
		}	else {
			console.log(`You Lose! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`)
		}
	}
}

game()

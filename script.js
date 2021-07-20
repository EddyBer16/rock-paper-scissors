const selection = ["rock", "paper", "scissors"]

function computerPlay() {
	return selection[Math.round(Math.random() * 2)]
}

function playRound(playerSelection, computerSelection) {

}

const playerSelection = null
const computerSelection = computerPlay()

console.log(playRound(playerSelection, computerSelection))

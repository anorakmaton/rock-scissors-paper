
function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0){
        return "Rock";
    }
    else if (randomNum === 1) {
        return "Sccisors";
    }
    else {
        return "Paper"
    }
}

var capitalize = function(str) {
	if (typeof str !== 'string' || !str) return str;
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

function playRound(playerSelection, computerSelection) {
    playerSelection_lower = playerSelection.toLowerCase();
    computerSelection_lower = computerSelection.toLowerCase();
    if (playerSelection_lower === "rock" && computerSelection_lower === "sccisors" ||
        playerSelection_lower === "sccisors" && computerSelection_lower === "paper" ||
        playerSelection_lower === "paper" && computerSelection_lower === "rock") {
        let result = "You win! " + capitalize(playerSelection_lower) + "beats " + capitalize(computerSelection_lower);
        playerWin++;
        return result;
    }
    else if (playerSelection_lower === computerSelection) {
        
        return "Drow";
    }
    else {
        computerWin++;
        let result = "You lose! " + capitalize(computerSelection_lower) + " beats " + capitalize(playerSelection_lower);
        return result;
    }
}

function playGame(rounds) {
    var playerWin = 0; // グローバル変数として playerWin を宣言
    var computerWin = 0;
    for (let i = 0; i < rounds; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Enter your selection.(Rock Sccisors Paper)")
        console.log(playRound(computerSelection, playerSelection));
    }
    console.log("Game End. Score = (You)" + playerWin + " - " + computerWin + "(Cpu)");
}

var rounds = 3;
playGame(rounds);

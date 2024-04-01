
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

function playRound(playerSelection) {
    computerSelection = getComputerChoice()
    playerSelection_lower = playerSelection.toLowerCase();
    computerSelection_lower = computerSelection.toLowerCase();
    let result = "";
    if (playerSelection_lower === "rock" && computerSelection_lower === "sccisors" ||
        playerSelection_lower === "sccisors" && computerSelection_lower === "paper" ||
        playerSelection_lower === "paper" && computerSelection_lower === "rock") {
        playerWin++;
        result = `You win! ${capitalize(playerSelection_lower)}  beats ${capitalize(computerSelection_lower)} (You)  ${playerWin} - ${computerWin}  (Cpu)`;
    }
    else if (playerSelection_lower === computerSelection) {
        result = `Drow (You)  ${playerWin} - ${computerWin}  (Cpu)`
        
    }
    else {
        computerWin++;
        result = `You lose! ${capitalize(computerSelection_lower)}  beats ${capitalize(playerSelection_lower)} (You)  ${playerWin} - ${computerWin}  (Cpu)`;
    }
    return result;
}

function showGameWinner() {
    winner = computerWin > playerWin ? "Computer" : "You" 
    result = `Game Winner is ${winner}`
    return result;
    
}

var computerWin = 0;
var playerWin = 0;
const buttons = document.querySelectorAll(".selectButton");
var resultText = document.querySelector(".resultText");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        text = playRound(event.target.id);
        if (computerWin >= 5 || playerWin >= 5) {
            text = showGameWinner()
        }
        resultText.textContent = text;
    })
});

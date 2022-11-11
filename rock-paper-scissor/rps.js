function getComputerChoice() {

    let choice = ['Rock', 'Paper', 'Scissors'];
    let rand = Math.floor(Math.random() * 3);
    return choice[rand];

}

function playRound(playerSelection, computerSelecion) {
    
    playerSelection = playerSelection.toLowerCase();
    computerSelecion = computerSelecion.toLowerCase();

    switch (playerSelection) {
        case 'rock':
            if (computerSelecion === "scissors") {
                return 1;
            }
            if (computerSelecion === "paper") {
                return 0;
            }
            if (computerSelecion === "rock") {
                return 2;
            }
            break;
        case 'paper':
            if (computerSelecion === "scissors") {
                return 0;
            }
            if (computerSelecion === "rock") {
                return 1;
            }
            if (computerSelecion === "paper") {
                return 2;
            }
            break;
        case 'scissors':
            if (computerSelecion === "rock") {
                return 0;
            }
            if (computerSelecion === "paper") {
                return 1;
            }
            if (computerSelecion === "scissors") {
                return 2;
            }
            break;
        default:
            return -1;
    }

}


function gameSummary(playerWinCount, computerWinCount) {

    if (playerWinCount > computerWinCount) console.log(`You win ${playerWinCount} times | Computer wins ${computerWinCount} times | You Win!`);
    if (playerWinCount < computerWinCount) console.log(`You win ${playerWinCount} times | Computer wins ${computerWinCount} times | You Lost!`);
    if (playerWinCount === computerWinCount) console.log(`You win ${playerWinCount} times | Computer wins ${computerWinCount} times | It is a Tie!`);

}

function game() {

    let playerWinCount = 0;
    let computerWinCount = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Make Your Choice: ")
        const computerSelecion = getComputerChoice();
      
        switch (playRound(playerSelection, computerSelecion)) {
            case 0:
                computerWinCount++;
                console.log(`You Loose! ${computerSelecion} beats ${playerSelection}`)
                break;
            case 1:
                playerWinCount++;
                console.log(`You Win! ${playerSelection} beats ${computerSelecion}`)
                break;
            case 2:
                console.log(`It is a Tie! ${playerSelection} and ${computerSelecion} have no effect on each other`);
                break;
            default:
                console.log(`You have not made the correct chioice. Please check for typo`);
                break;
        }

    }

    gameSummary(playerWinCount, computerWinCount);

}

game();
    




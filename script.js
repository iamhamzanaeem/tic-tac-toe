function GameBoard() {
    const gameBoard = ["", "", "",
        "", "", "",
        "", "", ""
    ];
    return gameBoard;
}
const gameBoard = GameBoard();

function Player(player1, player2) {
    return { player1, player2 };
}
const player1 = { name: "shaha", marker: "X" };
const player2 = { name: "sjsai", marker: "O" };
console.log(player1);
console.log(player2);

function playerTurn(currentPlayer) {
    const box = document.querySelectorAll("button");
    for(let i = 0; i < gameBoard.length; i++){
        box[i].addEventListener("click", (e) => {
            if (currentPlayer === player1) {
                gameBoard[i] = `${player1.marker}`;
                box[i].textContent = "X";
                box[i].disabled = true;
                checkWinner();
                currentPlayer = player2;
                
            } else if (currentPlayer === player2) {
                gameBoard[i] = `${player2.marker}`;
                box[i].textContent = "O";
                box[i].disabled = true;
                checkWinner();
                currentPlayer = player1;
    
            }
        });
    }

    function checkWinner() {
        const logsWinner = document.querySelector(".logs-winner");
        const boxes = document.querySelectorAll("button");
        if
            ((gameBoard[0] !== "" &&
                gameBoard[0] === gameBoard[1] &&
                gameBoard[1] === gameBoard[2]) ||
            (gameBoard[3] !== "" &&
                gameBoard[3] === gameBoard[4] &&
                gameBoard[4] === gameBoard[5]) ||
            (gameBoard[6] !== "" &&
                gameBoard[6] === gameBoard[7] &&
                gameBoard[7] === gameBoard[8]) ||
            (gameBoard[0] !== "" &&
                gameBoard[0] === gameBoard[3] &&
                gameBoard[3] === gameBoard[6]) ||
            (gameBoard[1] !== "" &&
                gameBoard[1] === gameBoard[4] &&
                gameBoard[4] === gameBoard[7]) ||
            (gameBoard[2] !== "" &&
                gameBoard[2] === gameBoard[5] &&
                gameBoard[5] === gameBoard[8]) ||
            (gameBoard[0] !== "" &&
                gameBoard[0] === gameBoard[4] &&
                gameBoard[4] === gameBoard[8]) ||
            (gameBoard[2] !== "" &&
                gameBoard[2] === gameBoard[4] &&
                gameBoard[4] === gameBoard[6])) {
            logsWinner.textContent = `${currentPlayer.name} is the winner`;
                    boxes.forEach((button) => {
                        button.disabled = true;
                    });
                    
        } else if (gameBoard[0] && gameBoard[1] && gameBoard[2] && gameBoard[3] && gameBoard[4] && gameBoard[5] && gameBoard[6] && gameBoard[7] && gameBoard[8] !== 0){
            const logsGameOver = document.querySelector(".logs-gameOver");
            logsGameOver.textContent = "Game Over, Refresh to Restart";
        }
    }
};
playerTurn(player1);
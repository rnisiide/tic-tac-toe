const board = [
    ['-', '-', '-'],
    ['-', '-', '-'],
    ['-', '-', '-']
]

const playerOne = {
    name: 'Player One',
    marker: 'X'
};

const playerTwo = {
    name: 'Player Two',
    marker: 'O'
};


let currentPlayer = playerOne;

const turn = document.getElementById('turn');
turn.innerText = currentPlayer.name + "'s turn, with the marker " + currentPlayer.marker;


function showClick(row, column) {
    const selector = document.getElementById(row + "-" + column);
    console.log('you clicked row ' + row + ' and column ' + column);
    selector.innerText = currentPlayer.marker;
    selector.style.cssText = "background-color: grey; pointer-events:none";
    board[row][column] = currentPlayer.marker;
    checkWinner();
    changePlayer();
}


function changePlayer() {
    if (currentPlayer == playerOne) { currentPlayer = playerTwo } else { currentPlayer = playerOne }
    turn.innerText = currentPlayer.name + "'s turn, with the marker " + currentPlayer.marker;
}

const winner = document.getElementById('winner');
function checkWinner() {
    if (
        //rows
        (board[0][0] == 'X' && board[0][1] == 'X' && board[0][2] == 'X') ||
        (board[1][0] == 'X' && board[1][1] == 'X' && board[1][2] == 'X') ||
        (board[2][0] == 'X' && board[2][1] == 'X' && board[2][2] == 'X') ||
        //columns
        (board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X') ||
        (board[0][1] == 'X' && board[1][1] == 'X' && board[2][1] == 'X') ||
        (board[0][2] == 'X' && board[1][2] == 'X' && board[2][2] == 'X') ||
        //diagonals
        (board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X') ||
        (board[0][2] == 'X' && board[1][1] == 'X' && board[2][0] == 'X')
    ) {
        winner.innerText = 'Player One wins';
        const endgame = document.querySelectorAll('.board-item');
        console.log(endgame);
        for (let i = 0; i < endgame.length; i++) {
            endgame[i].style.cssText = "background-color: grey; pointer-events:none";
        }
    } else if (
        //rows
        (board[0][0] == 'O' && board[0][1] == 'O' && board[0][2] == 'O') ||
        (board[1][0] == 'O' && board[1][1] == 'O' && board[1][2] == 'O') ||
        (board[2][0] == 'O' && board[2][1] == 'O' && board[2][2] == 'O') ||
        //columns
        (board[0][0] == 'O' && board[1][0] == 'O' && board[2][0] == 'O') ||
        (board[0][1] == 'O' && board[1][1] == 'O' && board[2][1] == 'O') ||
        (board[0][2] == 'O' && board[1][2] == 'O' && board[2][2] == 'O') ||
        //diagonals
        (board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O') ||
        (board[0][2] == 'O' && board[1][1] == 'O' && board[2][0] == 'O')

    ) {
        winner.innerText = 'Player Two wins';
    } else { winner.innerText = 'Nobody has won yet' }

}
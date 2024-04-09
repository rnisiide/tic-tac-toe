function Player(name, marker, color, score) {
    let playerName = name;
    score = 0;
    this.marker = marker;
    this.color = color;
    const SetPlayerName = (newName) => playerName = newName;
    const GetPlayerName = () => playerName;
    const GetPlayerMarker = () => marker;
    const GetColor = () => color;
    const SetScore = () => score++;
    const GetScore = () => score;
    return {
        SetPlayerName, GetPlayerName, GetPlayerMarker, GetColor, GetScore, SetScore
    }

};

const PlayGame = (function () {

    const board = [
        '-', '-', '-',
        '-', '-', '-',
        '-', '-', '-'
    ]


    const playerOne = new Player('Player One', 'X', 'blue');
    const playerTwo = new Player('Player Two', 'O', 'red');
    let currentPlayer = playerOne;
    let matchOngoing = true;

    const p1Score = document.getElementById('p1-score');
    const p2Score = document.getElementById('p2-score');
    const winner = document.getElementById('winner');
    const turn = document.getElementById('turn');
    const p1name = document.getElementById('p1-name');
    const p2name = document.getElementById('p2-name');
    const p1input = document.getElementById('p1-input');
    const p2input = document.getElementById('p2-input');
    p1input.addEventListener('change', function () { changeName(p1input.value, playerOne) })
    p2input.addEventListener('change', function () { changeName(p2input.value, playerTwo) })

    function changeName(newName, newPlayer) {
        newPlayer.SetPlayerName(newName);
        p1name.innerText = playerOne.GetPlayerName() + ': ';
        p2name.innerText = playerTwo.GetPlayerName() + ': ';
        turn.innerText = currentPlayer.GetPlayerName() + "'s turn, with the marker " + currentPlayer.GetPlayerMarker();
        p1input.value = '';
        p2input.value = '';

    }


    function changePlayer() {
        if (matchOngoing == true) {
            if (currentPlayer == playerOne) { currentPlayer = playerTwo } else { currentPlayer = playerOne }
            turn.innerText = currentPlayer.GetPlayerName() + "'s turn, with the marker " + currentPlayer.GetPlayerMarker();
        }
    }

    const buttons = document.querySelectorAll('.game-button')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () { placeMarker(i) });
    }

    const placeMarker = (cell) => {
        console.log('you clicked on cell ' + cell);
        buttons[cell].innerText = currentPlayer.GetPlayerMarker();
        buttons[cell].style.cssText = "background-color: " + currentPlayer.GetColor() + "; pointer-events:none";
        board[cell] = currentPlayer.GetPlayerMarker();
        checkWinner();
        changePlayer();
    }




    function checkWinner() {
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        if (!board.includes('-')) {
            winner.innerText = "It's a draw!";
            endGame();
        } else {
            for (let i = 0; i < winningConditions.length; i++)
                if (board[winningConditions[i][0]] == currentPlayer.GetPlayerMarker() &&
                    board[winningConditions[i][1]] == currentPlayer.GetPlayerMarker() &&
                    board[winningConditions[i][2]] == currentPlayer.GetPlayerMarker()) {
                    winner.innerText = currentPlayer.GetPlayerName() + ' wins!';
                    currentPlayer.SetScore();
                    endGame();
                }
        }
    }

    function endGame() {
        matchOngoing = false;
        turn.innerText = 'The game has ended. Would you like to restart?';
        p1Score.innerText = playerOne.GetScore();
        p2Score.innerText = playerTwo.GetScore();
        for (let i = 0; i < buttons.length; i++)
            if (
                !(buttons[i].innerText == playerOne.GetPlayerMarker()) &&
                !(buttons[i].innerText == playerTwo.GetPlayerMarker())) {
                buttons[i].style.cssText = "background-color: grey; pointer-events:none";
            }

    }

})
PlayGame();




















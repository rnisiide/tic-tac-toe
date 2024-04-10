function Player(name, marker, color, score) {
    let playerName = name;
    score = 0;
    this.marker = marker;
    this.color = color;
    const SetPlayerName = (newName) => playerName = newName;
    const GetPlayerName = () => playerName;
    const GetPlayerMarker = () => marker;
    const GetColor = () => color;
    const SetScore = () => score += 1;
    const GetScore = () => score;
    return {
        SetPlayerName, GetPlayerName, GetPlayerMarker, GetColor, GetScore, SetScore
    }

};


function PlayGame() {

    //creating players and board
    const playerOne = new Player('Player One', 'X', '#348ceb');
    const playerTwo = new Player('Player Two', 'O', '#eb3a34');
    let currentPlayer = playerOne;
    let matchOngoing = true;
    const board = [
        '-', '-', '-',
        '-', '-', '-',
        '-', '-', '-'
    ]

    //query selectors/binders
    const p1Score = document.getElementById('p1-score');
    const p2Score = document.getElementById('p2-score');
    const turn = document.getElementById('turn');
    const p1name = document.getElementById('p1-name');
    const p2name = document.getElementById('p2-name');
    const p1input = document.getElementById('p1-input');
    const p2input = document.getElementById('p2-input');
    const p1button = document.getElementById('p1-button');
    const reset = document.getElementById('resetButton');
    const buttons = document.querySelectorAll('.game-button')

    //event listeners
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () { placeMarker(i) });
    }
    p1button.addEventListener('click', function () { changeName(p1input.value, p2input.value) })
    reset.addEventListener('click', function () { resetBoard() });

    function changeName(newPlayerOne, newPlayerTwo) {
        if (newPlayerOne != '') { playerOne.SetPlayerName(newPlayerOne) };
        if (newPlayerTwo != '') { playerTwo.SetPlayerName(newPlayerTwo) };
        p1name.innerText = `${playerOne.GetPlayerName()}'s score`;
        p2name.innerText = `${playerTwo.GetPlayerName()}'s score`;
        turn.innerText = `${currentPlayer.GetPlayerName()}'s turn, with the marker ${currentPlayer.GetPlayerMarker()}`;
        p1input.value = '';
        p2input.value = '';

    }

    const placeMarker = (cell) => {
        buttons[cell].innerText = currentPlayer.GetPlayerMarker();
        buttons[cell].style.cssText = "background-color: " + currentPlayer.GetColor() + "; pointer-events:none";
        board[cell] = currentPlayer.GetPlayerMarker();
        checkWinner();
        if (matchOngoing == true) {
            if (currentPlayer == playerOne) { currentPlayer = playerTwo } else { currentPlayer = playerOne }
            turn.innerText = currentPlayer.GetPlayerName() + "'s turn, with the marker " + currentPlayer.GetPlayerMarker();
        }

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

        for (let i = 0; i < winningConditions.length; i++)
            if (board[winningConditions[i][0]] == currentPlayer.GetPlayerMarker() &&
                board[winningConditions[i][1]] == currentPlayer.GetPlayerMarker() &&
                board[winningConditions[i][2]] == currentPlayer.GetPlayerMarker()) {
                turn.innerText = currentPlayer.GetPlayerName() + ' wins!';
                currentPlayer.SetScore();
                endGame();

                break;
            }

        if (!board.includes('-') && matchOngoing == true) {
            turn.innerText = "It's a draw! Would you like to restart?";
            endGame();
        }
    }

    function endGame() {
        reset.style.display = 'inline';
        p1button.style.display = 'none';
        matchOngoing = false;
        p1Score.innerText = playerOne.GetScore();
        p2Score.innerText = playerTwo.GetScore();
        for (let i = 0; i < buttons.length; i++)
            if (
                !(buttons[i].innerText == playerOne.GetPlayerMarker()) &&
                !(buttons[i].innerText == playerTwo.GetPlayerMarker())) {
                buttons[i].style.cssText = "background-color: grey; pointer-events:none";
            }

    }

    function resetBoard() {

        reset.style.display = 'none';
        p1button.style.display = 'inline';
        currentPlayer = playerOne;
        turn.innerText = currentPlayer.GetPlayerName() + "'s turn, with the marker " + currentPlayer.GetPlayerMarker();
        for (let i = 0; i < board.length; i++) {
            board[i] = '-';
        }

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].innerText = '';
            buttons[i].style.cssText = "";
        }
        matchOngoing = true;

    }
}
PlayGame();




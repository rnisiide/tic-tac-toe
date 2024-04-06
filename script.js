const board = [
    rowOne = ['', '', ''],
    rowTwo = ['', '', ''],
    rowThree = ['', '', '']
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
    changePlayer();

}


function changePlayer() {
    if (currentPlayer == playerOne) { currentPlayer = playerTwo } else { currentPlayer = playerOne }
    turn.innerText = currentPlayer.name + "'s turn, with the marker " + currentPlayer.marker;
}

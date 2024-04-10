# tic-tac-toe

* {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
}

body {
	display: flex;
    flex-direction: column;
    min-height: 100svh;
}

h1 {
    color: blue;
    text-align: center;
}

#wrapper {
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-between; */
}

#players {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h2 {
    text-align: center;
    margin: 20px 0;
}

.row {
    display: flex;
    margin: 1px;
    /* padding: 0; */
}

.game-button {
    /* border-radius: 0;
    margin: 0;
    padding: 0; */
    cursor: pointer;
    width: 100px;
    height: 100px;
    margin: 1px;
}

.game-button:hover {
    background-color: white;
}

#score {
    display: flex;
    flex-direction: column;
    align-items: center;
}

footer {
    text-align: center;
    margin-top: auto;
    /* position: fixed;
    left: 0;
    bottom: 0;
    width: 100%; */
    background-color: #363636;
    color: #ebebeb;
}

a {
    color: #ebebeb;
    text-decoration: none;
}


a:visited {
    text-decoration: none;
}

a:link {
    text-decoration: none;
}
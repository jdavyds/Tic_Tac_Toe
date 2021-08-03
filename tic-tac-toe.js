const player1Input = document.querySelector(".player1-input")
const player2Input = document.querySelector(".player2-input")
const submitName = document.querySelector(".submit")
const player1Name = document.querySelector(".player1-label")
const player2Name = document.querySelector(".player2-label")

const p1X = document.querySelector(".p1-X")
const p1O = document.querySelector(".p1-O")
const p2X = document.querySelector(".p2-X")
const p2O = document.querySelector(".p2-O")

const cells = document.querySelectorAll(".cell")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const four = document.querySelector(".four")
const five = document.querySelector(".five")
const six = document.querySelector(".six")
const seven = document.querySelector(".seven")
const eight = document.querySelector(".eight")
const nine = document.querySelector(".nine")


const reset = document.querySelector(".reset")
const winner = document.querySelector(".winner")
const p1Score = document.querySelector(".p1-score")
const p2Score = document.querySelector(".p2-score")


let playerOne;
let playerTwo;
let gameStatus;

p1X.addEventListener("click", () => {
    playerOne = "X";
    playerTwo = "O";
    p1O.disabled = true;
    p2X.disabled = true;
    p1X.style.cssText = "background: green; transform: scale(1.3);"
    p2O.style.cssText = "background: red; transform: scale(1.3);"

})
p1O.addEventListener("click", () => {
    playerOne = "O";
    playerTwo = "X";
    p1X.disabled = true;
    p2O.disabled = true;
    p1O.style.cssText = "background: green; transform: scale(1.3);"
    p2X.style.cssText = "background: red; transform: scale(1.3);"
})

let option = false;

function currentPlayer() {
    if(option === true) {
       return  option = false
    }
    else if(option === false) {
        return option = true
    }
}


one.addEventListener("click", () => {
    currentPlayer()
    if(option === true) {
        one.textContent = playerOne;
    }
    else if(option === false) {
        one.textContent = playerTwo;
    }

    if(one.textContent === playerOne || playerTwo) {

        one.style.pointerEvents = "none";
    }
    checkWinner()
})
two.addEventListener("click", () => {
    currentPlayer()
    if(option === true) {
        two.textContent = playerOne;
    }
    else if(option === false) {
        two.textContent = playerTwo
    }
    if(one.textContent === playerOne || playerTwo) {

        two.style.pointerEvents = "none";
    }
    checkWinner()
})
three.addEventListener("click", () => {
    currentPlayer()
    if(option === true) {
        three.textContent = playerOne;
    }
    else if(option === false) {
        three.textContent = playerTwo
    }
    if(one.textContent === playerOne || playerTwo) {

        three.style.pointerEvents = "none";    
    }
    checkWinner()
    
})
four.addEventListener("click", () => {
    currentPlayer()
    if(option === true) {
        four.textContent = playerOne;
    }
    else if(option === false) {
        four.textContent = playerTwo
    }
    if(one.textContent === playerOne || playerTwo) {

        four.style.pointerEvents = "none";
    }
    checkWinner()

})
five.addEventListener("click", () => {
    currentPlayer()
    if(option === true) {
        five.textContent = playerOne;
    }
    else if(option === false) {
        five.textContent = playerTwo
    }
    if(one.textContent === playerOne || playerTwo) {

        five.style.pointerEvents = "none";
    }
    checkWinner()

})
six.addEventListener("click", () => {
    currentPlayer()
    if(option === true) {
        six.textContent = playerOne;
    }
    else if(option === false) {
        six.textContent = playerTwo
    }
    if(one.textContent === playerOne || playerTwo) {

        six.style.pointerEvents = "none";
    }
    checkWinner()

})
seven.addEventListener("click", () => {
    currentPlayer()
    if(option === true) {
        seven.textContent = playerOne;
    }
    else if(option === false) {
        seven.textContent = playerTwo
    }
    if(one.textContent === playerOne || playerTwo) {

        seven.style.pointerEvents = "none";
    }
    checkWinner()

})
eight.addEventListener("click", () => {
    currentPlayer()
    if(option === true) {
        eight.textContent = playerOne;
    }
    else if(option === false) {
        eight.textContent = playerTwo
    }
    if(one.textContent === playerOne || playerTwo) {

        eight.style.pointerEvents = "none";
    }
    checkWinner()

})
nine.addEventListener("click", () => {
    currentPlayer()
    if(option === true) {
        nine.textContent = playerOne;
    }
    else if(option === false) {
        nine.textContent = playerTwo
    }
    if(one.textContent === playerOne || playerTwo) {

        nine.style.pointerEvents = "none";
    }
    checkWinner()
})
function checkWinner() {

    if((one.textContent === playerOne) && (two.textContent === playerOne) && (three.textContent === playerOne)) {
        one.style.cssText = "background: lightgreen; color: white;"
        two.style.cssText = "background: lightgreen; color: white;"
        three.style.cssText = "background: lightgreen; color: white;"
        cells.forEach(cell => cell.style.pointerEvents = "none")
        winner.textContent = `${player1Input.value} Wins`
        incrementPlayer1Score(p1Score)
        gameStatus = false;
    }
    else if((one.textContent === playerTwo) && (two.textContent === playerTwo) && (three.textContent === playerTwo)) {
        one.style.cssText = "background: lightgreen; color: white;"
        two.style.cssText = "background: lightgreen; color: white;"
        three.style.cssText = "background: lightgreen; color: white;"
        cells.forEach(cell => cell.style.pointerEvents = "none")
        winner.textContent = `${player2Input.value} Wins`
        incrementPlayer2Score(p2Score)
        gameStatus = false;

    }
    else if((one.textContent === playerOne) && (four.textContent === playerOne) && (seven.textContent === playerOne)) {
        one.style.cssText = "background: lightgreen; color: white;"
        four.style.cssText = "background: lightgreen; color: white;"
        seven.style.cssText = "background: lightgreen; color: white;"
        cells.forEach(cell => cell.style.pointerEvents = "none")
        winner.textContent = `${player1Input.value} Wins`
        incrementPlayer1Score(p1Score)
        gameStatus = false;

    }
    else if((one.textContent === playerTwo) && (four.textContent === playerTwo) && (seven.textContent === playerTwo)) {
        one.style.cssText = "background: lightgreen; color: white;"
        four.style.cssText = "background: lightgreen; color: white;"
        seven.style.cssText = "background: lightgreen; color: white;"
        cells.forEach(cell => cell.style.pointerEvents = "none")
        winner.textContent = `${player2Input.value} Wins`
        incrementPlayer2Score(p2Score)
        gameStatus = false;

    }
    else if((seven.textContent === playerOne) && (eight.textContent === playerOne) && (nine.textContent === playerOne)) {
        seven.style.cssText = "background: lightgreen; color: white;"
        eight.style.cssText = "background: lightgreen; color: white;"
        nine.style.cssText = "background: lightgreen; color: white;"
        cells.forEach(cell => cell.style.pointerEvents = "none")
        winner.textContent = `${player1Input.value} Wins`
        incrementPlayer1Score(p1Score)
        gameStatus = false;

    }
    else if((seven.textContent === playerTwo) && (eight.textContent === playerTwo) && (nine.textContent === playerTwo)) {
        seven.style.cssText = "background: lightgreen; color: white;"
        eight.style.cssText = "background: lightgreen; color: white;"
        nine.style.cssText = "background: lightgreen; color: white;"
        cells.forEach(cell => cell.style.pointerEvents = "none")
        winner.textContent = `${player2Input.value} Wins`
        incrementPlayer2Score(p2Score)
        gameStatus = false;

    }
    else if((three.textContent === playerOne) && (six.textContent === playerOne) && (nine.textContent === playerOne)) {
        three.style.cssText = "background: lightgreen; color: white;"
        six.style.cssText = "background: lightgreen; color: white;"
        nine.style.cssText = "background: lightgreen; color: white;"
        cells.forEach(cell => cell.style.pointerEvents = "none")
        winner.textContent = `${player1Input.value} Wins`
        incrementPlayer1Score(p1Score)
        gameStatus = false;

    }
    else if((three.textContent === playerTwo) && (six.textContent === playerTwo) && (nine.textContent === playerTwo)) {
        three.style.cssText = "background: lightgreen; color: white;"
        six.style.cssText = "background: lightgreen; color: white;"
        nine.style.cssText = "background: lightgreen; color: white;"
        cells.forEach(cell => cell.style.pointerEvents = "none")
        winner.textContent = `${player2Input.value} Wins`
        incrementPlayer2Score(p2Score)
        gameStatus = false;

    }
    else if((one.textContent === playerOne) && (five.textContent === playerOne) && (nine.textContent === playerOne)) {
        one.style.cssText = "background: lightgreen; color: white;"
        five.style.cssText = "background: lightgreen; color: white;"
        nine.style.cssText = "background: lightgreen; color: white;"
        cells.forEach(cell => cell.style.pointerEvents = "none")
        winner.textContent = `${player1Input.value} Wins`
        incrementPlayer1Score(p1Score)
        gameStatus = false;

    }
    else if((one.textContent === playerTwo) && (five.textContent === playerTwo) && (nine.textContent === playerTwo)) {
        one.style.cssText = "background: lightgreen; color: white;"
        five.style.cssText = "background: lightgreen; color: white;"
        nine.style.cssText = "background: lightgreen; color: white;"
        cells.forEach(cell => cell.style.pointerEvents = "none")
        winner.textContent = `${player2Input.value} Wins`
        incrementPlayer2Score(p2Score)
        gameStatus = false;

    }
    else if((three.textContent === playerOne) && (five.textContent === playerOne) && (seven.textContent === playerOne)) {
        three.style.cssText = "background: lightgreen; color: white;"
        five.style.cssText = "background: lightgreen; color: white;"
        seven.style.cssText = "background: lightgreen; color: white;"
        cells.forEach(cell => cell.style.pointerEvents = "none")
        winner.textContent = `${player1Input.value} Wins`
        incrementPlayer1Score(p1Score)
        gameStatus = false;

    }
    else if((three.textContent === playerTwo) && (five.textContent === playerTwo) && (seven.textContent === playerTwo)) {
        three.style.cssText = "background: lightgreen; color: white;"
        five.style.cssText = "background: lightgreen; color: white;"
        seven.style.cssText = "background: lightgreen; color: white;"
        cells.forEach(cell => cell.style.pointerEvents = "none")
        winner.textContent = `${player2Input.value} Wins`
        incrementPlayer2Score(p2Score)
        gameStatus = false;

    }
    else if((four.textContent === playerOne) && (five.textContent === playerOne) && (six.textContent === playerOne)) {
        four.style.cssText = "background: lightgreen; color: white;"
        five.style.cssText = "background: lightgreen; color: white;"
        six.style.cssText = "background: lightgreen; color: white;"
        cells.forEach(cell => cell.style.pointerEvents = "none")
        winner.textContent = `${player1Input.value} Wins`
        incrementPlayer1Score(p1Score)
        gameStatus = false;

    }
    else if((four.textContent === playerTwo) && (five.textContent === playerTwo) && (six.textContent === playerTwo)) {
        four.style.cssText = "background: lightgreen; color: white;"
        five.style.cssText = "background: lightgreen; color: white;"
        six.style.cssText = "background: lightgreen; color: white;"
        cells.forEach(cell => cell.style.pointerEvents = "none")
        winner.textContent = `${player2Input.value} Wins`
        incrementPlayer2Score(p2Score)
        gameStatus = false;

    }
    else if((two.textContent === playerOne) && (five.textContent === playerOne) && (eight.textContent === playerOne)) {
        two.style.cssText = "background: lightgreen; color: white;"
        five.style.cssText = "background: lightgreen; color: white;"
        eight.style.cssText = "background: lightgreen; color: white;"
        cells.forEach(cell => cell.style.pointerEvents = "none")
        winner.textContent = `${player1Input.value} Wins`
        incrementPlayer1Score(p1Score)
        gameStatus = false;

    }
    else if((two.textContent === playerTwo) && (five.textContent === playerTwo) && (eight.textContent === playerTwo)) {
        two.style.cssText = "background: lightgreen; color: white;"
        five.style.cssText = "background: lightgreen; color: white;"
        eight.style.cssText = "background: lightgreen; color: white;"
        cells.forEach(cell => cell.style.pointerEvents = "none")
        winner.textContent = `${player2Input.value} Wins`
        incrementPlayer2Score(p2Score)
        gameStatus = false;

    }
}

function incrementPlayer1Score(p1Score) {
        
    p1Score.textContent = parseInt(p1Score.textContent) + 1
    
}
function incrementPlayer2Score(p2Score) {
    
    p2Score.textContent = parseInt(p2Score.textContent) + 1
}

reset.addEventListener("click", () => {
    
    gameStatus = true;
    currentPlayer()
    document.querySelectorAll(".cell").forEach(cell => {cell.textContent = " "
       cell.style.cssText = "background: darkgoldenrod;"
       cell.style.pointerEvents = "auto"
})

})


submitName.addEventListener("click", () => {
    document.querySelector(".welcome").style.cssText = "display: none"
    document.querySelector("section").style.cssText = "display: flex;"
    player1Name.textContent = player1Input.value + " : ";
    player2Name.textContent =  " : " + player2Input.value  ;

    document.querySelector(".p1-score-label").textContent = player1Input.value;
    document.querySelector(".p2-score-label").textContent = player2Input.value;

})


let turn = 1;
let squares = Array(9).fill("");
let isEndGame = false;

function updateTurn(numOfTurn) {
    if (numOfTurn > 9) {
        alert("OMG");
    } else {
        turn = numOfTurn;
        noticeBoard.innerHTML = `${getCurrentPlayerName()} Turn`;
    }
}

function updateSquaresUI() {
    for (let i = 0; i < 9; i++) {
        document.querySelector(`#box-${i + 1}`).innerHTML = squares[i];
    }
}

function reset() {
    squares = Array(9).fill("");
    updateSquaresUI();
    updateTurn(1);
    isEndGame = false;
}

function checkIsWin() {
    const conditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (const condition of conditions) {
        // const i = condition[0];//use json here better
        // const j = condition[1];
        // const k = condition[2];
        const [i, j, k] = condition;
        if (squares[i] !== "" && squares[i] === squares[j] && squares[j] === squares[k]) {
            return turn;
        }
    }
    return false;
}

// function getCurrentPlayerName() {
//     return turn % 2 === 0 ? "O" : "X";
// }
const getCurrentPlayerName = () => (turn % 2 === 0 ? "O" : "X");
const noticeBoard = document.querySelector(".notification-board");

window.onload = () => {
    document.querySelector(".control-board").addEventListener("click", (e) => {
        reset();
    });

    for (let i = 0; i < 9; i++) {
        document.querySelector(`#box-${i + 1}`).addEventListener("click", (e) => {
            if (e.currentTarget.innerText === "" && !isEndGame) {
                // e.currentTarget.innerHTML = getCurrentPlayerName();
                squares[i] = getCurrentPlayerName();
                updateSquaresUI();
                isEndGame = checkIsWin();
                if (isEndGame) {
                    alert(`${getCurrentPlayerName()} Win!!! `);
                } else {
                    updateTurn(turn + 1);
                }
            }
        });
    }
};

// window.onload = () => {
//     document.querySelector(".game-container").addEventListener("click", (e) => {
//         // console.log(e.target);
//         // console.log(e.currentTarget);
//         e.target.innerHTML = "X";
//     });
// };

// window.onload = () => {
//     document.querySelectorAll(".box").forEach((ele) => {
//         ele.addEventListener("click", (e) => {
//             e.target.innerHTML = "X";
//         });
//     });
// };
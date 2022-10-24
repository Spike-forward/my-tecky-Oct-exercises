let turn = 1
const a = 'x'
turn;
const b = 'o'
turn // step 4
const winningList = [
    [0, 1, 2],


]
const boxes = document.querySelectorAll('.box')
    // simple version
for (let box of boxes) {
    box.addEventListener('click', (event) => {
        console.log(event.target) //known who is triggered
        console.log(event.currentTarget.dataset.id) // box content changed from X 
            //to O so need to use function to surround it
        const selection = event.currentTarget
        updateUI(selection, )
    })
}

//box content changed from X 
//to O so need to use function to surround it
function updatedUI(node) {
    if (turn % 2) {
        // X turn
        console.log('x turn')
        node.removeChild(node.querySelector('.box-content'))
        const image = document.createElement('img')
        image.setAttribute('src', './x.svg')
        image.classList.add('box-content')
        node.appendChild(image) //prevent cross side street method
    } else {
        console.log('o turn')
        node.removeChild(node.querySelector('.box-content'))
        const image = document.createElement('img')
        image.setAttribute('src', './x.svg')
        image.classList.add('box-content')
        node.appendChild(image)
        turn = turn + 1
    }
}

function isFilled(id) {
    if (P)

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
        for checkIsWin(us) {
            // const i = condition[0];
            // const j = condition[1];
            // const k = condition[2];
            const [i, j, k] = condition;
            if (squares[i] !== "" && squares[i] === squares[j] && squares[j] ===
                squares[k]) {
                // if(JSON.stringify(list) == JSON.stringify(user))   
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
}

function reset() {
    //document.querySelectorAll('.box').forEach(elem => elem.removeChild(firstChild))
} //
function reset() {
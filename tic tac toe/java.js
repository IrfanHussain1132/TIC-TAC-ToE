// Player Form Handling
const playerForm = document.getElementById('playerform');
if (playerForm) {
    playerForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const name1 = document.getElementById('name1').value;
        const name2 = document.getElementById('name2').value;
        
        localStorage.setItem('player1', name1);
        localStorage.setItem('player2', name2);

        window.location.href = 'http://127.0.0.1:5500/index.html';
    });
}

// Tic Tac Toe Game Logic
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let NEW=document.querySelector(".NEW")
let newgamebtn = document.querySelector(".NEW");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
msg.innerText = `TIC TAC TOE`;
const player1 = localStorage.getItem('player1');
const player2 = localStorage.getItem('player2');
const playersDisplay = document.getElementById('players');
if (playersDisplay) {
    playersDisplay.innerText = `Playing: ${player1} (O) vs ${player2} (X)`;
}

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        console.log("Clicked on box");
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const showwinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
};

const checkwinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos1val);
                if(pos1val=="O")
                showwinner(player1);
                else
                showwinner(player2);
            }
        }
    }
};

reset.addEventListener('click', function() {
    location.reload();
});
NEW.addEventListener('click', function() {
    window.history.back();
});

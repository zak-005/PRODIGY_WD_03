let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],  
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];

let xTurn = true;
let count = 0;

const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    popupRef.classList.remove("hide");
};

const enableButtons = () => {
    btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = false;
    });
    popupRef.classList.add("hide");
    msgRef.innerHTML = "";  // Clear message and Luffy image
};

const winFunction = (letter) => {
    disableButtons();
    let luffyGif;
    
    if (letter == "X") {
        luffyGif = "<img src='luffy.gif' alt='Luffy Thumbs Up' class='Gifs-image'>";
        msgRef.innerHTML = `'X' wins! <br>${luffyGif}`;
    } else {
        luffyGif = "<img src='zoro.gif' alt='zoro wins' class='Gifs-image'>";
        msgRef.innerHTML = `'O' wins! <br>${luffyGif}`;
    }
};


const drawFunction = () => {
    disableButtons();
    let lnzGif = "<img src='l&z.gif' alt='Luffy and zoro dance' class='Gifs-image'>";
    msgRef.innerHTML = `It's a draw! <br>${lnzGif}`;
};

newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

const winChecker = () => {
    for (let i of winningPattern) {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
        if (element1 !== "" && element2 !== "" && element3 !== "") {
            if (element1 === element2 && element2 === element3) {
                winFunction(element1);
                return;
            }
        }
    }
};

btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            element.innerText = "X";
            element.disabled = true;
        } else {
            xTurn = true;
            element.innerText = "O";
            element.disabled = true;
        }
        count += 1;
        if (count === 9) {
            drawFunction();
        }
        winChecker();
    });
});

window.onload = enableButtons;

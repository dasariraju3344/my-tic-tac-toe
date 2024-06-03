let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

let messContainer = document.querySelector(".messcont");
let para = document.querySelector("#message");
let newGame = document.querySelector("#new-but");

let turn = true;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turn = true;
    enableBoxes();
    messContainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn) {
            box.innerText = "X";
            turn = false;
        } else {
            box.innerText = "O";
            turn = true;
        }
        box.disabled = true;
        checkwinner();
    });
});


const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};


const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {
    para.innerText = `Congratulations, Winner is ${winner}`;
    messContainer.classList.remove("hide");
    disableBoxes();
}

const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
            }
        }

    }
}

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
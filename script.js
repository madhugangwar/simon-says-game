let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let scoreText = document.querySelector(".score");
let restartBtn = document.getElementById("restartBtn");

document.addEventListener("keypress", function () {
    if (!started) {
        started = true;
        levelUp();
    }
});

restartBtn.addEventListener("click", function () {
    reset();
    levelUp();
    restartBtn.style.display = "none";
});

function playSound(name) {
    let audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
}

function gameFlash(btn) {
    btn.classList.add("flash");
    playSound(btn.id);
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    playSound(btn.id);
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 150);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    scoreText.innerText = `Score: ${level - 1}`;

    let randIdx = Math.floor(Math.random() * 4); // FIXED to 4 instead of 3
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log("Sequence: ", gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        playSound("wrong");
        document.body.style.backgroundColor = "red";
        setTimeout(() => {
            document.body.style.backgroundColor = "white";
        }, 200);

        h2.innerHTML = `Game Over! Your Score was <b>${level - 1}</b>`;
        restartBtn.style.display = "inline-block";
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    scoreText.innerText = "Score: 0";
}




// let gameSeq = [];
// let userSeq = [];

// let btns = ["red", "yellow", "green", "purple"];

// let started = false;
// let level = 0;

// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function () {
//     if(started == false) {
//         console.log("Game is started")
//         started = true;
         
//         levelUp();
//     }
// });

// function gameFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("flash");
//     }, 250);
// }


// function userFlash(btn) {
//     btn.classList.add("userflash");
//     setTimeout(function () {
//         btn.classList.remove("userflash");
//     },250);
// }

// function levelUp() {
//     userSeq =[];
//     level++;
//     h2.innerText = `level ${level}`;
  
//     //random btn choose
//     let randIdx = Math.floor(Math.random() * 3);
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`);
//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     gameFlash(randBtn);
// }

// function checkAns(idx) {
  
//     if(userSeq[idx] == gameSeq[idx]){
//         if(userSeq.length == gameSeq.length){
//           setTimeout(levelUp, 1000);
//         }
//     } else{
//         h2.innerHTML = `Game over! Your Score was <b>${level}</b>  Press any key toStart again.`;
//         document.querySelector("body"). style.backgroundColor = "red";
//         setTimeout(function () {
//             document.querySelector("body"). style.backgroundColor = "white";
//         }, 150);
//         reset();
//     }
// }

// function btnPress(){

//     let btn = this;
//     userFlash(btn);

//     userColor = btn.getAttribute("id");
//     userSeq.push(userColor);

//     checkAns(userSeq.length - 1);
// }  

// let allBtns  = document.querySelectorAll(".btn");
// for(btn of allBtns){
//     btn.addEventListener("click", btnPress);
// }

// function reset() {
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
// }

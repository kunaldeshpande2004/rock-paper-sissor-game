let rockbtn = document.querySelector("#rock");
let paperbtn = document.querySelector("#paper");
let sissorbtn = document.querySelector("#sissor");
let msgupdate = document.querySelector("#msg");
let compscr = document.querySelector("#comp-scr");
let userscr = document.querySelector("#user-scr");

let i = 0;

compscr.innerHTML = "0";
userscr.innerHTML = "0";

function result() {
    // Generate a random number for the computer's choice
    const compChoice = Math.floor(Math.random() * 3); // 0 for rock, 1 for paper, 2 for scissors

    // Generate a random number for the user's choice
    const userChoice = Math.floor(Math.random() * 3); // 0 for rock, 1 for paper, 2 for scissors

    // Compare user's choice with computer's choice to determine the winner
    if (userChoice === compChoice) {
        msgupdate.innerHTML = "DRAW";
    } else if ((userChoice + 1) % 3 === compChoice) {
        msgupdate.innerHTML = "COMP WINS";
        compscr.innerHTML = `${parseInt(compscr.innerHTML) + 1}`; // Increment computer's score
    } else {
        msgupdate.innerHTML = "YOU WIN";
        userscr.innerHTML = `${parseInt(userscr.innerHTML) + 1}`; // Increment user's score
    }

    i++; // Increment the round counter
}
rockbtn.addEventListener("click", result);
paperbtn.addEventListener("click", result);
sissorbtn.addEventListener("click", result);

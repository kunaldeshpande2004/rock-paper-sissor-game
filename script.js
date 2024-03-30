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
    if (i % (i+2) === 0) {
        msgupdate.innerHTML = "DRAW";
    } else if (i % (i+3) === 1 || i % (i+6) === 2) {
        msgupdate.innerHTML = "COMP WINS";
        compscr.innerHTML = `${++compscr.innerHTML}`;
    } else {
        msgupdate.innerHTML = "YOU WIN";
        userscr.innerHTML = `${++userscr.innerHTML}`;
    }
    i++;
}

rockbtn.addEventListener("click", result);
paperbtn.addEventListener("click", result);
sissorbtn.addEventListener("click", result);

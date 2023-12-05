let gmse = [];
let user = [];
let btns = ["o", "tw", "th", "f"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btn = document.querySelector(".box");
document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    levelup();
  }
});

function usfl(btn) {
  btn.classList.add("usfl");
  setTimeout(function () {
    btn.classList.remove("usfl");
  }, 250);
}

function btnfl(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function levelup() {
  user = [];
  level++;
  h2.innerText = `level ${level}`;
  let a = Math.floor(Math.random() * 3);
  let randcol = btns[a];
  let ranbtn = document.querySelector(`.${randcol}`);
  gmse.push(randcol);
  btnfl(ranbtn);
  console.log(gmse);
}

function chans(ind) {
  if (user[ind] == gmse[ind]) {
    if (user.length == gmse.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    document.querySelector("body").style.backgroundImage = "none";
    h2.innerText = `Game over! Your score is ${level}. Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundImage = "url('game.png')";
    }, 1000);
    reset();
  }
}

function btnpre() {
  usfl(this);
  uscl = this.getAttribute("id");
  user.push(uscl);
  chans(user.length - 1);
}

let allb = document.querySelectorAll(".box");
for (let x of allb) {
  x.addEventListener("click", btnpre);
}

function reset() {
  started = false;
  gmse = [];
  level = 0;
  user = [];
}

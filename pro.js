"use strict";

function restgame() {
  rand = Math.trunc(Math.random() * 100);
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = "5";
  let a = 1
  document.querySelector(".score").textContent = score;
  document.body.style.backgroundColor = "#222";
  console.log("new number:", rand);
}

let rand = Math.trunc(Math.random() * 100);
console.log("new number:", rand);
let score = 5;

document.querySelector(".again").addEventListener("click", restgame);

document.querySelector(".check").addEventListener("click", function () {
  const num = Number(document.querySelector(".guess").value);
  if (score === 0) {
    console.log("worst");
    document.querySelector(".number").textContent = "😔😔";
    setTimeout(restgame, 2000);
  } else {
    if (!num) {
      document.querySelector(".number").textContent = "no NUM";
      console.log("No Num");
    } else if (num === rand) {
      // console.log("nice");
      document.querySelector(".number").textContent = "NICE😍😍";
      document.querySelector(".message").textContent = "you are winnnn❤️";
      console.log("Player is win");
      setTimeout(restgame, 3000);
    } else if (num > rand) {
      score--;
      document.querySelector(".message").textContent = "smaler⬇️⬆";
      document.querySelector(".score").textContent = score;
    } else if (num < rand) {
      score--;
      document.querySelector(".message").textContent = "biger⬆️";
      document.querySelector(".score").textContent = score;
    } else {
      console.log("NOT TRUE");
      console.log("Not True");
    }
  }
});

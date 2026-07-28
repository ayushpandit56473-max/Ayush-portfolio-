// ============================
// Typing Animation
// ============================

const typing = document.getElementById("typing");

const message = [
  "Creating Modern Websites...",
  "Welcome To My Portfolio 🚀"
];

let line = 0;
let char = 0;

function typeEffect() {

  if (line < message.length) {

    if (char < message[line].length) {

      typing.innerHTML += message[line].charAt(char);
      char++;

      setTimeout(typeEffect, 70);

    } else {

      typing.innerHTML += "<br>";
      line++;
      char = 0;

      setTimeout(typeEffect, 700);

    }

  }

}

typeEffect();


// ============================
// Hide Intro After 10 Seconds
// ============================

setTimeout(() => {

  document.getElementById("intro").style.display = "none";

}, 10000);


// ============================
// Smooth Scroll
// ============================

document.querySelectorAll('nav a').forEach(link => {

  link.addEventListener('click', function(e) {

    e.preventDefault();

    const target = 

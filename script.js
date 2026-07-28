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

    const target = document.querySelector(this.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth"
    });

  });

});


// ============================
// Navbar Background Change
// ============================

window.addEventListener("scroll", () => {

  const nav = document.querySelector("nav");

  if (window.scrollY > 50) {

    nav.style.background = "#000";

  } else {

    nav.style.background = "rgba(0,0,0,.5)";

  }

});


// ============================
// Project Card Hover Animation
// ============================

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

  card.addEventListener("mouseenter", () => {

    card.style.transform = "translateY(-10px) scale(1.03)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = "translateY(0) scale(1)";

  });

});


// ============================
// Profile Circle Glow
// ============================

const circle = document.querySelector(".profile-circle");

setInterval(() => {

  circle.style.boxShadow = "0 0 60px cyan";

  setTimeout(() => {

    circle.style.boxShadow = "0 0 25px cyan";

  }, 500);

}, 1200);


// ============================
// Console Message
// ============================

console.log("🚀 Welcome To Ayush Tripathi Portfolio");

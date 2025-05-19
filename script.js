document.addEventListener("DOMContentLoaded", () => {
  visaValkommenAlert();
  skrivKokKommentar();
  initieraKnappAnimationer();
});

function visaValkommenAlert() {
  alert("🍰 Välkommen till Gladkakan – låt oss baka med ett leende!");
}

function skrivKokKommentar() {
  const kommentarer = [
    "Kaka är livet 🍪",
    "Baka med kärlek 💛",
    "Gladkakan blir ännu gladare med dig!",
    "Hoppas du är hungrig på kod – och kaka!",
    "Klicka så bjuder vi på magi ✨"
  ];
  const random = kommentarer[Math.floor(Math.random() * kommentarer.length)];
  console.log("👩‍🍳 " + random);
}

function initieraKnappAnimationer() {
  document.addEventListener("click", (event) => {
    const knapp = event.target;
    if (knapp.tagName === "BUTTON" && knapp.innerText.includes("Dags att göra en gladkaka")) {
      alert("🎉 Nu börjar det roliga! Vi tar det steg för steg.");
      flygandeEmoji(knapp, "🍰");
    }
  });
}

function flygandeEmoji(element, emojiSymbol) {
  const emoji = document.createElement("div");
  emoji.innerText = emojiSymbol;
  emoji.style.position = "fixed";

  const rect = element.getBoundingClientRect();
  emoji.style.left = rect.left + "px";
  emoji.style.top = rect.top + "px";
  emoji.style.fontSize = "2.5rem";
  emoji.style.pointerEvents = "none";
  emoji.style.transition = "transform 1s ease-out, opacity 1s ease-out";
  emoji.style.zIndex = 9999;
  document.body.appendChild(emoji);

  requestAnimationFrame(() => {
    emoji.style.transform = "translateY(-120px)";
    emoji.style.opacity = "0";
  });

  setTimeout(() => {
    emoji.remove();
  }, 1000);
}

  // klar.js
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    window.location.href = "dag-ate.html"; // Gå vidare efter 5 sek
  }, 5000);
});
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const thankYouMessage = document.getElementById('thankYouMessage');

  if (contactForm && thankYouMessage) {
      contactForm.addEventListener('submit', function (e) {
          e.preventDefault(); // Förhindra vanlig formulärsändning
          contactForm.style.display = 'none'; // Dölj formuläret
          thankYouMessage.style.display = 'block'; // Visa tackmeddelandet
      });
  }
});
 
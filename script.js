const surpriseBtn = document.querySelector("#surpriseBtn");
const confettiBtn = document.querySelector("#confettiBtn");
const modalConfetti = document.querySelector("#modalConfetti");
const modal = document.querySelector("#surpriseModal");
const closeModal = document.querySelector("#closeModal");
const heartsContainer = document.querySelector("#hearts");

function openSurprise() {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  launchConfetti(55);
}

function hideSurprise() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

function launchConfetti(amount = 90) {
  const colors = ["#e88eaa", "#f5c2ce", "#f5d49b", "#c8a4c9", "#ffffff"];

  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    piece.style.animationDuration = `${2 + Math.random() * 1.8}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(piece);

    piece.addEventListener("animationend", () => piece.remove());
  }
}

function createFloatingHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.5 ? "♡" : "♥";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 20}px`;
  heart.style.animationDuration = `${5 + Math.random() * 5}s`;
  heartsContainer.appendChild(heart);

  heart.addEventListener("animationend", () => heart.remove());
}

surpriseBtn.addEventListener("click", openSurprise);
confettiBtn.addEventListener("click", () => launchConfetti(110));
modalConfetti.addEventListener("click", () => launchConfetti(120));
closeModal.addEventListener("click", hideSurprise);

modal.addEventListener("click", (event) => {
  if (event.target === modal) hideSurprise();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") hideSurprise();
});

setInterval(createFloatingHeart, 850);

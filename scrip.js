const button = document.getElementById('chase-btn');
const status = document.getElementById('status');
const continueBtn = document.getElementById('continue-btn');

let clickCount = 0;
let hoverAttempts = 0;
const maxClicks = 10;

// Move button randomly
function moveButton() {
  const x = Math.random() * (window.innerWidth - 150);
  const y = Math.random() * (window.innerHeight - 100);
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}

// Hover = maybe dodge
button.addEventListener('mouseover', () => {
  hoverAttempts++;

  if (hoverAttempts <= 3 || Math.random() < 0.7) {
    moveButton();
  }
});

// Click handler
button.addEventListener('click', () => {
  clickCount++;
  hoverAttempts = 0;

  const messages = [
    "Nice catch!",
    "You're getting good at this!",
    "Not bad!",
    "Click ninja!",
    "Halfway there!",
    "So close!",
    "You're unstoppable!",
    "Master clicker!",
    "One more to go!",
    "You did it! 🎉"
  ];

  status.innerText = messages[clickCount - 1] || "";

  if (clickCount >= maxClicks) {
    button.style.display = "none";
    status.innerText = "You win! Great reflexes!";
    continueBtn.style.display = "inline-block"; // Show the link
  } else {
    moveButton();
  }
});

// Initial position
moveButton();
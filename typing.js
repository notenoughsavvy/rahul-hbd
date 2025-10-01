// Update this URL to where you want the user to go after winning:
const resultsRedirectURL = "index6.html";

// Words to be typed (about ~60 words total)
const words = [
  "hello", "world", "typing", "game", "fast", "keyboard",
  "focus", "practice", "speed", "test", "improve", "skills",
  "accuracy", "smart", "move", "challenge", "think", "quick",
  "type", "words", "minute", "clock", "winner", "try", "again"
];

let currentWordIndex = 0;
let timeLeft = 60;
let timerInterval = null;

const timerEl = document.getElementById("timer");
const wordDisplayEl = document.getElementById("word-display");
const inputBoxEl = document.getElementById("input-box");
const startBtn = document.getElementById("start-btn");
const resultsBtn = document.getElementById("results-btn");
const playAgainBtn = document.getElementById("play-again-btn");

startBtn.addEventListener("click", startGame);
inputBoxEl.addEventListener("input", handleInput);
playAgainBtn.addEventListener("click", () => location.reload());
resultsBtn.addEventListener("click", () => {
  window.location.href = resultsRedirectURL;
});

function startGame() {
  // UI changes
  startBtn.classList.add("hidden");
  wordDisplayEl.classList.remove("hidden");
  inputBoxEl.classList.remove("hidden");
  inputBoxEl.disabled = false;
  inputBoxEl.focus();
  timerEl.classList.remove("hidden");

  // Show first word
  wordDisplayEl.textContent = words[currentWordIndex];

  // Start timer
  timerEl.textContent = `Time Left: ${timeLeft}s`;
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Time Left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endGame(false);
    }
  }, 1000);
}

function handleInput() {
  const typed = inputBoxEl.value.trim();
  const currentWord = words[currentWordIndex];

  if (typed === currentWord) {
    currentWordIndex++;
    inputBoxEl.value = "";

    if (currentWordIndex < words.length) {
      wordDisplayEl.textContent = words[currentWordIndex];
    } else {
      clearInterval(timerInterval);
      endGame(true);
    }
  }
}

function endGame(won) {
  inputBoxEl.disabled = true;
  wordDisplayEl.classList.add("hidden");

  if (won) {
    resultsBtn.classList.remove("hidden");
  } else {
    playAgainBtn.classList.remove("hidden");
  }
}
const questions = [
  {
    question: "What's your favorite color?",
    options: ["🔴 Red", "🟢 Green", "🔵 Blue"],
  },
  {
    question: "What's your preferred programming language?",
    options: ["🐍 Python", "🚀 JavaScript", "💻 C++"],
  },
  {
    question: "What's your spirit animal?",
    options: ["🐺 Wolf", "🐦 Eagle", "🐬 Dolphin"],
  },
  {
    question: "What's your go-to snack?",
    options: ["🍕 Pizza", "🍔 Burger", "🍣 Sushi"],
  },
  {
    question: "Which emoji best represents your mood right now?",
    options: ["😊 Happy", "😡 Angry", "😎 Cool"],
  }
];

let currentQuestion = 0;
let answers = [];

const welcomeScreen = document.getElementById("welcome-screen");
const questionScreen = document.getElementById("question-screen");
const resultsScreen = document.getElementById("results-screen");
const startBtn = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const resultText = document.getElementById("result-text");
const shareOptions = document.getElementById("share-options");

function showQuestion() {
  const question = questions[currentQuestion];
  questionText.textContent = question.question;
  optionsContainer.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => selectOption(index));
    optionsContainer.appendChild(button);
  });
}

function selectOption(index) {
  answers.push(index);
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  const result = calculateResult();
  resultText.textContent = `Your Result: ${result}`;
  questionScreen.style.display = "none";
  resultsScreen.style.display = "block";
  shareOptions.classList.remove("hidden");
}

function calculateResult() {
  const total = answers.reduce((acc, curr) => acc + curr, 0);
  if (total < 5) return "You're a Chill Person!";
  if (total < 10) return "You're Energetic and Creative!";
  return "You're a Wise and Thoughtful Person!";
}

startBtn.addEventListener("click", () => {
  welcomeScreen.style.display = "none";
  questionScreen.style.display = "block";
  showQuestion();
});

// functions for sharing options

document.getElementById("whatsapp-btn").addEventListener("click", shareViaWhatsApp);
document.getElementById("facebook-btn").addEventListener("click", shareViaFacebook);
document.getElementById("instagram-btn").addEventListener("click", shareViaInstagram);
document.getElementById("copy-link-btn").addEventListener("click", copyLinkToClipboard);

function shareViaWhatsApp() {
  const message = encodeURIComponent("Check out my result on the Personality Quiz: Your Result. Click here: Share URL");
  window.open(`https://wa.me/?text=${message}`);
}

function shareViaFacebook() {
  const shareURL = encodeURIComponent("Share URL");
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareURL}`);
}

function shareViaInstagram() {
  const shareURL = encodeURIComponent("Share URL");
  window.open(`https://www.instagram.com/?url=${shareURL}`);
}

function copyLinkToClipboard() {
  const shareURL = "Share URL";
  navigator.clipboard.writeText(shareURL);
  alert("Link copied to clipboard!");
}
function selectEmoji(emoji) {
  document.getElementById("result-icon").innerHTML = `<span>${emoji}</span>`;
}

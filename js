const triviaQuestions = [
    { question: "Is the sky blue?", answer: true },
    { question: "Is the grass red?", answer: false },
];

let currentQuestionIndex = 0;

function startTrivia() {
    document.getElementById('trivia-container').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const question = triviaQuestions[currentQuestionIndex].question;
    document.getElementById('question').innerText = question;
}

function answerTrivia(userAnswer) {
    const correctAnswer = triviaQuestions[currentQuestionIndex].answer;
    if (userAnswer === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
    currentQuestionIndex = (currentQuestionIndex + 1) % triviaQuestions.length;
    showQuestion();
}

const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');
let drawing = false;

canvas.addEventListener('mousedown', () => { drawing = true; });
canvas.addEventListener('mouseup', () => { drawing = false; ctx.beginPath(); });
canvas.addEventListener('mousemove', draw);

function draw(event) {
    if (!drawing) return;
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';

    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

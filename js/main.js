export function QuizApp(questions) {
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-button");
  const nextButton = document.getElementById("next-btn");
  const countDownTimeElement = document.getElementById("time-count");
  const countHouseElement = document.getElementById("count-house");
  const startBtn = document.getElementById("start-btn");
  const showQuiz = document.getElementById("show-quiz");
  let currentQuestionIndex = 0;
  let score = 0;
  let timeCountDown = 30;
  let countdownInterval;

  function startCountdown() {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
      if (timeCountDown > 0) {
        timeCountDown--;
        countDownTimeElement.innerHTML = `Time Left: ${timeCountDown}s`;
      } else {
        clearInterval(countdownInterval);
        countDownTimeElement.innerHTML = "Countdown expired!";
        handleNextButton();
      }
    }, 1000); // Update every second
  }

  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    startCountdown();
    showQuestion();
  }

  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML =
      "Q" + questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerHTML = answer.text;
      button.classList.add("btn");
      answerButtons.appendChild(button);
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
    });
  }

  function resetState() {
    nextButton.style.display = "none";
    countHouseElement.style.display = "block";

    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }

  function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
      selectedBtn.classList.add("correct");
      score++;
    } else {
      selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      }
      button.disabled = true;
    });

    nextButton.style.display = "block";
  }

  function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    questionElement.style.color = "#fff"
    questionElement.style.textAlign = "center"

    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
  }

  function handleNextButton() {
    clearInterval(countdownInterval);
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
      timeCountDown = 30;
      startCountdown();
    } else {
      showScore();
      countHouseElement.style.display = "none";
    }
  }

  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      handleNextButton();
    } else {
      startQuiz();
    }
  });

  startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    showQuiz.style.display = "block";
    startQuiz();
  });
//   startQuiz();

}



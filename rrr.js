const questions = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "None of the above"],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which tag is used for a line break?",
      options: ["<br>", "<break>", "<lb>", "<line>"],
      answer: "<br>"
    },
    {
      question: "Which property is used to change text color in CSS?",
      options: ["color", "font-color", "text-color", "bg-color"],
      answer: "color"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const resultBox = document.getElementById("result-box");
  const quizBox = document.getElementById("quiz-box");
  const scoreEl = document.getElementById("score");
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
  
    q.options.forEach(option => {
      const li = document.createElement("li");
      li.textContent = option;
      li.onclick = () => selectAnswer(option);
      optionsEl.appendChild(li);
    });
  }
  
  function selectAnswer(option) {
    const correct = questions[currentQuestion].answer;
    if (option === correct) {
      score++;
    }
    nextBtn.disabled = false;
  }
  
  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
      nextBtn.disabled = true;
    } else {
      quizBox.classList.add("hide");
      resultBox.classList.remove("hide");
      scoreEl.textContent = `${score} / ${questions.length}`;
    }
  });
  
  showQuestion();
  nextBtn.disabled = true;
  
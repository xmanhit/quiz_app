const questions = [
  {
    question: "Javascript is _________ language.",
    answers: {
      a: "Programming",
      b: "Application",
      c: "None of These",
      d: "Scripting"
    },
    multi: false,
    correctAnswer: "d"
  },
  {
    question: "Which of the following is a valid type of function javascript supports?",
    answers: {
      a: "named function",
      b: "anonymous function",
      c: "both of the above",
      d: "none of the above"
    },
    multi: false,
    correctAnswer: "c"
  },
  {
    question: "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
    answers: {
      a: "getIndex()",
      b: "location()",
      c: "indexOf()",
      d: "getLocation()"
    },
    multi: false,
    correctAnswer: "c"
  },
  {
    question: "Which one of the following is valid data type of JavaScript",
    answers: {
      a: "number",
      b: "void",
      c: "boolean",
      d: "nothing"
    },
    multi: false,
    correctAnswer: "c"
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: {
      a: "<script>",
      b: "<javascript>",
      c: "<scripting>",
      d: "<javascripting>"
    },
    multi: false,
    correctAnswer: "a"
  },
  {
    question: "What is the correct JavaScript syntax to change the content of the HTML element below? <p id=\"demo\">This is a demonstration.</p>",
    answers: {
      a: "document.getElementById(\"demo\").innerHTML = \"Hello World!\";",
      b: "document.getElement(\"p\").innerHTML = \"Hello World!\";",
      c: "document.getElementByName(\"p\").innerHTML = \"Hello World!\";",
      d: "#demo.innerHTML = \"Hello World!\";"
    },
    multi: false,
    correctAnswer: "a"
  },
  {
    question: "Which function is used to load the next URL in the history list?",
    answers: {
      a: "window.history.next();",
      b: "window.history.load_next();",
      c: "window.history.forward();",
      d: "window.history.load_forward();"
    },
    multi: false,
    correctAnswer: "c"
  },
  {
    question: "Which function is used to load the previous URL in the history list?",
    answers: {
      a: "window.history.back();",
      b: "window.history.load_back();",
      c: "window.history.backward();",
      d: "window.history.load_backward();"
    },
    multi: false,
    correctAnswer: "a"
  },
  {
    question: "How do you open a confirm window in JavaScript?",
    answers: {
      a: "confirm()",
      b: "location.confirm()",
      c: "window.open_confirm()",
      d: "window.open_confirm()"
    },
    multi: false,
    correctAnswer: "a"
  },
  {
    question: "How do you open a prompt window in JavaScript?",
    answers: {
      a: "prompt()",
      b: "location.prompt()",
      c: "window.open_prompt()",
      d: "window.open_prompt()"
    },
    multi: false,
    correctAnswer: "a"
  },
  {
    question: "How do you write anything into the web page in JavaScript?",
    answers: {
      a: "window.write(...)",
      b: "document.write(...)",
      c: "window.page.write(...)",
      d: "document.page.write(...)"
    },
    multi: false,
    correctAnswer: "b"
  },
  {
    question: "How do you get the DOM element with id in JavaScript?",
    answers: {
      a: "window.getElementById(...)",
      b: "document.getElementById(...)",
      c: "window.getElement(...)",
      d: "document.getElement(...)"
    },
    multi: false,
    correctAnswer: "b"
  },
  {
    question: "How do you create a new function in JavaScript?",
    answers: {
      a: "new.function() {}",
      b: "function myFunction() {}",
      c: "function:myFunction() {}",
      d: "function = myFunction() {}"
    },
    multi: false,
    correctAnswer: "b"
  },
  {
    question: "How do you create a JavaScript array?",
    answers: {
      a: "var fruits = \"banana\", \"apple\", \"peach\";,
      b: "var fruits = [\"banana\", \"apple\", \"peach\"];,
      c: "var fruits = (1:\"banana\", 2:\"apple\", 3:\"peach\");,
      d: "var fruits = 1 = (\"banana\"), 2 = (\"apple\"), 3 = (\"peach\");
    },
    multi: false,
    correctAnswer: "b"
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: {
      a: "The <body> section",
      b: "The <head> section",
      c: "The <footer> section",
      d: "both the <head> section and the <body> section are correct"
    },
    multi: false,
    correctAnswer: "d"
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: {
      a: "The <body> section",
      b: "The <head> section",
      c: "The <section> section",
      d: "The <footer> section"
    },
    multi: true,
    correctAnswer: "ab"
  },
  {
    question: "What is the correct syntax for referring to an external script called \"xxx.js\"?,
    answers: {
      a: "<script href=\"xxx.js\">,
      b: "<script src=\"xxx.js\">,
      c: "<script name=\"xxx.js\">
    },
    multi: false,
    correctAnswer: "b"
  },
  {
    question: "The external JavaScript file must contain the <script> tag.",
    answers: {
      a: "True",
      b: "False"
    },
    multi: false,
    correctAnswer: "b"
  },
  {
    question: "How do you write \"Hello World\" in an alert box?,
    answers: {
      a: "alertBox(\"Hello World\");,
      b: "msg(\"Hello World\");,
      c: "alert(\"Hello World\");,
      d: "msgBox(\"Hello World\");
    },
    multi: false,
    correctAnswer: "c"
  },
  {
    question: "How to write an IF statement in JavaScript?",
    answers: {
      a: "if i = 5",
      b: "if i == 5 then",
      c: "if (i == 5)",
      d: "if i = 5 then"
    },
    multi: false,
    correctAnswer: "c"
  }
];

// import questions from "./data/quiz.json" assert { type: "json" };

/**
 * Represents a question in a quiz.
 */
class Question {
  /**
   * Creates a new question.
   * @param {String} question - The question to ask.
   * @param {Object} answers - An object containing the possible answers.
   * @param {Boolean} multi - Whether or not multiple answers can be selected.
   * @param {String} correctAnswer - The correct answer.
   */
  constructor(question, answers, multi, correctAnswer) {
    this.question = question; // The question to ask.
    this.answers = answers; // An object containing the possible answers.
    this.multi = multi; // Whether or not multiple answers can be selected.
    this.correctAnswer = correctAnswer; // The correct answer.
  }

  /**
   * Checks if the given choice is the correct answer to this question.
   * @param {String} choice - The answer to check.
   * @returns {Boolean} Whether or not the choice is correct.
   */
  isCorrectAnswer(choice) {
    return this.correctAnswer === choice; // Whether or not the choice is correct.
  }
}

/**
 * Quiz class representing a quiz.
 * @class
 */
class Quiz {
  /**
   * Quiz class constructor.
   * @constructor
   * @param {Array<Question>} questions - An array of questions.
   * @property {Array<Question>} questions - An array of questions.
   * @property {Array<String>} userAnswers - An array of strings representing the user's guesses for each question.
   * @property {Number} score - The user's score.
   * @property {Number} currentQuestionIndex - The index of the current question.
   * @property {Number} totalQuestions - The total number of questions.
   * @property {Number} seconds - The number of seconds elapsed since the quiz started.
   * @property {Date} startTime - The start time of the quiz.
   */
  constructor(questions) {
    this.questions = questions;
    this.userAnswers = [];
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.totalQuestions = questions.length;
    this.seconds = 0;
    this.startTime = new Date();
  }

  /**
   * Returns the current question.
   * @returns {Question} - The current question.
   */
  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  /**
   * Saves the user's choice for the current question.
   *
   * @param {string} choice - The user's choice for the current question.
   */
  set saveChoice(choice) {
    this.userAnswers[this.currentQuestionIndex] = choice;
  }

  /**
   * Calculates user's score based on their guesses.
   */
  setScore() {
    let count = 0;
    for (const [questionId, userAnswer] of Object.entries(this.userAnswers)) {
      if (this.questions[questionId].isCorrectAnswer(userAnswer)) {
        count++;
      }
    }
    this.score = count;
  }

  /**
   * Returns true if the user has answered all questions.
   * @returns {Boolean} - True if the user has answered all questions, false otherwise.
   */
  get hasAnsweredAllQuestions() {
    const choice = this.userAnswers.filter(Boolean);
    return choice.length === this.totalQuestions;
  }

  /**
   * Determines whether the quiz has ended.
   *
   * @returns {boolean} - true if the quiz has ended, false otherwise.
   */
  get isLastQuestion() {
    return this.currentQuestionIndex >= this.totalQuestions - 1;
  }

  /**
   * Converts seconds to a formatted time string.
   * @param {Number} seconds - The number of seconds to convert.
   * @returns {String} - A formatted time string.
   */
  secondsToHHMMSS(seconds) {
    const date = new Date(seconds * 1000).toISOString();
    const formattedTime =
      seconds < 3600 ? date.slice(14, 19) : date.slice(11, 16);

    return formattedTime;
  }
}

/**
 * Define a class `App` that extends `Quiz`
 * @class
 */
class App extends Quiz {
  /**
   * Creates an instance of App with an array of questions.
   * @param {Array} questions - An array of question objects.
   */
  constructor(questions) {
    super(questions);
    console.log(`Strat time: ${this.startTime}`);
    this.intervalId = setInterval(() => {
      console.log("Runtime!");
      this.changeTimeSpent(++this.seconds);
    }, 1000);
  }

  /**
   * Renders the quiz on the page.
   */
  get renderQuiz() {
    const main = document.createElement("main");

    main.classList.add("container");

    main.append(this.renderQuizHeader, this.renderQuestion, this.renderForm);
    document.body.append(this.renderHeader, main);
  }

  /**
   * Returns the main element with updated quiz content.
   * Re-renders the quiz with new question and answer options.
   * @returns {Element}
   */
  get reRenderingQuiz() {
    const main = document.querySelector("main"),
      form = document.querySelector("form"),
      quizHeader = document.querySelector(".header"),
      question = document.querySelector(".question-text");
    
    form.replaceChildren(this.renderAnswer, this.renderAction);
    quizHeader.replaceWith(this.renderQuizHeader);
    question.replaceWith(this.renderQuestion);

    return main;
  }

  /**
   * Returns a header element with a container class and a title.
   * @returns {HTMLElement} - The header element.
   */
  get renderHeader() {
    const header = document.createElement("header"),
      title = document.createElement("h1");
    
    header.classList.add("container");
    title.id = "title";
    title.textContent = "JavaScript Online Quiz";
    header.appendChild(title);
    return header;
  }

/**
 * Returns the quiz header DOM element.
 * @returns {HTMLElement}
 */
get renderQuizHeader() {
  const { currentQuestionIndex, totalQuestions } = this,
    quizHeader = document.createElement("div"),
    quizTitle = document.createElement("h3"),
    quizTimeSpent = document.createElement("p");
  
  quizHeader.classList.add("header");
  quizTitle.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
  quizTimeSpent.id = "time-spent";
  quizTimeSpent.textContent = super.secondsToHHMMSS(this.seconds);

  quizHeader.append(quizTitle, quizTimeSpent);

  return quizHeader;
}

  /**
   * Returns a DOM element containing the text of the current question.
   * @returns {HTMLElement} - DOM element containing the question text.
   */
  get renderQuestion() {
    const { question } = this.currentQuestion;
    const questionText = document.createElement("p");
    
    questionText.classList.add("question-text");
    questionText.textContent = question;

    return questionText;
  }

/**
 * Returns a form element with a specific set of properties.
 * @returns {HTMLFormElement} The form element with the specified properties.
 */
get renderForm() {
  const form = document.createElement("form");
  
  form.name = "quizform";
  form.id = "quizform";
  form.action = "quizform";
  form.method = "post";

  // Appends child elements to the form element.
  form.append(this.renderAnswer, this.renderAction);

  return form;
}

  /**
   * Returns a div element containing all answer options as radio or checkbox inputs,
   * depending on the question type.
   * The selected answer is pre-checked if the user already answered the question.
   * @returns {HTMLDivElement} - A div element containing all answer options for the current question.
   */
  get renderAnswer() {
    const { answers, multi } = this.currentQuestion,
      userAnswer = this.userAnswers[this.currentQuestionIndex],
      container = document.createElement("div");

    container.id = "answers";

    for (const [answer, text] of Object.entries(answers)) {
      const answerContainer = document.createElement("div"),
        input = document.createElement("input"),
        label = document.createElement("label"),
        checked = (multi && userAnswer?.includes(answer)) || userAnswer === answer;

      answerContainer.classList.add("answer");
      input.type = multi ? "checkbox" : "radio";
      input.name = multi ? answer : "answer";
      input.value = answer;
      input.id = answer;
      input.checked = checked;
      if (multi) label.classList.add("multi");
      label.setAttribute("for", answer);
      label.textContent = text;

      answerContainer.append(input, label);
      container.appendChild(answerContainer);
    }

    return container;
  }

  /**
   * This function generates and returns the HTML element for the action bar of
   * the quiz. The action bar includes buttons to navigate to the previous and next question, and to submit the quiz.
   *
   * @returns {HTMLElement} The HTML element for the action bar.
   */
  get renderAction() {
    const createButton = (text, id) => {
      const button = document.createElement("button");
      button.type = "button";
      button.id = id;
      button.textContent = text;
      return button;
    };

    const saveChoiceAnswers = () => {
      super.saveChoice = Array.from(document.querySelectorAll("input:checked")).map(input => input.value).join('');
    };

    const handleNavigation = (direction) => {
      saveChoiceAnswers();
      this.currentQuestionIndex += direction;
      this.reRenderingQuiz;
    };

    const handleSubmission = (e) => {
      saveChoiceAnswers();
      if (super.hasAnsweredAllQuestions) {
        super.setScore();
        clearInterval(this.intervalId);
        this.reRenderingQuiz.replaceChildren(this.renderResults);
      } else {
        this.renderPopupCheckAndConfirm;
      }
    };

    const container = document.createElement("div"),
      actionContainer = document.createElement("div"),
      btnPrevious = createButton("Previous Question", "btn-previous"),
      btnNext = createButton("Next Question", "btn-next"),
      btnSubmit = createButton("Submit Quiz", "btn-submit");

    container.id = "action";
    actionContainer.id = "action-container";

    btnPrevious.disabled = this.currentQuestionIndex === 0;
    btnNext.disabled = this.currentQuestionIndex === this.totalQuestions - 1;
    btnNext.style.display = this.isLastQuestion ? "none" : "";
    btnSubmit.style.display = this.isLastQuestion ? "" : "none";

    btnPrevious.addEventListener("click", () => {
      handleNavigation(-1);
    });

    btnNext.addEventListener("click", () => {
      handleNavigation(1);
    });

    btnSubmit.addEventListener("click", (e) => {
      e.preventDefault();
      handleSubmission(e);
    });

    actionContainer.append(btnPrevious, btnNext, btnSubmit);
    container.appendChild(actionContainer);

    return container;
  }

  /**
   * Returns a div element with quiz results and action buttons.
   * @returns {HTMLElement} - A div element with quiz results and action buttons.
   */
  get renderResults() {
    const results = document.createElement("div"),
      header = document.createElement("h3"),
      scorePercent = document.createElement("p"),
      score = document.createElement("p"),
      timeSpent = document.createElement("p"),
      action = document.createElement("div"),
      btnTryAgain = document.createElement("button"),
      btnCheckYourAnswers = document.createElement("button");

    results.id = "results";
    header.textContent = "Results:";
    scorePercent.innerHTML = `<strong>${((this.score / this.totalQuestions) * 100).toFixed(2)}%</strong>`;
    score.innerHTML = `You got <strong>${this.score}</strong> out of <strong>${this.totalQuestions}</strong> questions correct!`;
    timeSpent.innerHTML = `Time spent <strong>${super.secondsToHHMMSS(this.seconds)}</strong>`;
    action.className = "action";
    btnTryAgain.type = "button";
    btnCheckYourAnswers.type = "button";
    btnTryAgain.id = "try-again";
    btnCheckYourAnswers.id = "check-your-answers";
    btnTryAgain.textContent = "Try again";
    btnCheckYourAnswers.textContent = "Check your answers";

    btnTryAgain.addEventListener("click", () => window.location.reload());
    btnCheckYourAnswers.addEventListener("click", () => this.renderQuizResults);

    action.append(btnTryAgain, btnCheckYourAnswers);
    results.append(header, scorePercent, score, timeSpent, action);
    return results;
  }

  /**
   * Renders the quiz results on the page
   */
  get renderQuizResults() {
    const main = document.querySelector("main"),
      header = document.querySelector("header > #title"),
      container = document.createElement("div"),
      scoreContainer = document.createElement("div"),
      score = document.createElement("h2"),
      scorePercent = document.createElement("h2"),
      hr = document.createElement("hr");
  
    header.textContent = "JavaScript Quiz Results";
    container.className = "container";
    scoreContainer.className = "score-container";
    score.innerHTML = `Score <strong>${this.score}</strong> of <strong>${this.totalQuestions}</strong>`;
    scorePercent.textContent = `${(this.score / this.totalQuestions * 100).toFixed(2)}% Correct`;
  
    scoreContainer.append(score, scorePercent);
    container.append(scoreContainer, hr);
  
    for (const [index, { question, answers, multi, correctAnswer }] of this.questions.entries()) {
      const titleQuestion = document.createElement("h3"),
        questionContent = document.createElement("p"),
        answersContainer = document.createElement("div"),
        hr = document.createElement("hr");
  
      answersContainer.className = "answers-container";
      titleQuestion.textContent = `Question ${Number(index) + 1}:`;
      questionContent.textContent = question;
  
      for (const [key, answer] of Object.entries(answers)) {
        const answerElement = document.createElement("div"),
          markcontainer = document.createElement("span"),
          answerContent = document.createElement("span"),
          answerComment = document.createElement("span");
  
        markcontainer.className = "mark-container";
        answerElement.className = "answer-element";
        answerComment.className = "answer-comment";
        answerContent.textContent = answer;
  
        if (multi) {
          const letters = this.userAnswers[index].split("");
  
          if (correctAnswer.includes(key)) {
            answerElement.classList.add("correct");
            answerComment.textContent = "Correct answer";
          }
  
          for (const letter of letters) {
            if (key === letter) {
              answerElement.classList.add("selected");
              answerComment.textContent = "Your answer";
              markcontainer.textContent = correctAnswer.includes(letter) ? "✔" : "✖";
              
              if (!correctAnswer.includes(letter)) {
                answerElement.classList.add("wrong");
              }
            }
          }
        } else {
          if (key === correctAnswer) {
            answerElement.classList.add("correct");
            answerComment.textContent = "Correct answer";
          }
  
          if (key === this.userAnswers[index]) {
            answerElement.classList.add("selected");
            answerComment.textContent = "Your answer";
            markcontainer.textContent = this.userAnswers[index] === correctAnswer ? "✔" : "✖";

            if (this.userAnswers[index] !== correctAnswer) {
              answerElement.classList.add("wrong");
            }
          }
        }
        
        answerElement.append(
          markcontainer.textContent && markcontainer,
          answerContent,
          answerComment.textContent && answerComment
        );
        answersContainer.appendChild(answerElement);
      }
  
      container.append(titleQuestion, questionContent, answersContainer, hr);
    }
    main.replaceChildren(container);
  }

  /**
   * Renders a popup that checks if the user wants to submit the quiz.
   * If there are unanswered questions, it displays them in the popup.
   * If the user confirms the submission, it sets the score, stops the timer, and renders the results.
   * If the user cancels, it removes the popup and enables the submit button.
   */
  get renderPopupCheckAndConfirm() {
    const popupContainer = document.createElement("div"),
      popup = document.createElement("div"),
      title = document.createElement("h3"),
      body = document.createElement("p"),
      action = document.createElement("div"),
      cancelButton = document.createElement("button"),
      continueButton = document.createElement("button"),
      submitButton = document.getElementById("btn-submit");
    let emptyAnswers = [];
  
    for (const [key, value] of Object.entries(this.userAnswers)) {
      if (value === "") emptyAnswers.push(Number(key) + 1);
    }

    popupContainer.id = "popup-container";
    popup.id = "popup";
    title.textContent = "Do you want to submit?";
    body.className = "popup-body";
    body.textContent = `${
      emptyAnswers.length === 1 ? "Unanswered question" : "Unanswered questions"
    }: ${emptyAnswers.join(", ")}`;
    action.className = "popup-action";
    cancelButton.classList.add("cancel-button");
    cancelButton.textContent = "Cancel";
    continueButton.classList.add("continue-button");
    continueButton.textContent = "Continue";
    action.appendChild(cancelButton);
    action.appendChild(continueButton);
    popup.append(title, body, action);

    cancelButton.addEventListener("click", () => {
      popupContainer.remove();
      submitButton.disabled = false;
    });
  
    continueButton.addEventListener("click", () => {
      popupContainer.remove();
      super.setScore();
      clearInterval(this.intervalId);
      this.reRenderingQuiz.replaceChildren(this.renderResults);
    });
  
    submitButton.disabled = true;
    popupContainer.appendChild(popup);
    document.body.appendChild(popupContainer);
  }

  /**
   * Update the time spent displayed on the DOM
   * @param {number} seconds - The amount of seconds to convert and display
   * @param {HTMLElement} timeSpentElement - The DOM element where the time should be displayed
   */
  changeTimeSpent(seconds) {
    const timeSpentElement = document.getElementById("time-spent");
    // Convert seconds to formatted time
    const formattedTime = super.secondsToHHMMSS(seconds);
    // Update the DOM element with the new time
    timeSpentElement.textContent = formattedTime;
  }
}

/**
 * Maps an array of objects representing questions to an array of Question objects.
 * @param {Object} question - The question object with properties question, answers, multi, and correctAnswer.
 * @returns {Array} An array of Question objects.
 */
const listQuestion = questions.map(
  ({ question, answers, multi, correctAnswer }) =>
    new Question(question, answers, multi, correctAnswer)
);

/**
 * Creates a new App instance with the list of questions and renders the quiz.
 */
const app = new App(listQuestion);
app.renderQuiz;

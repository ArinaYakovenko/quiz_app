const questions = [
      {
        "question": "What is the capital of France?",
        "options": ["London", "Berlin", "Paris", "Madrid"],
        "correctAnswer": "Paris"
      },
      {
        "question": "Which planet is known as the Red Planet?",
        "options": ["Earth", "Mars", "Jupiter", "Venus"],
        "correctAnswer": "Mars"
      },
      {
        "question": "What is the largest mammal in the world?",
        "options": ["Elephant", "Giraffe", "Blue Whale", "Lion"],
        "correctAnswer": "Blue Whale"
      },
      {
        "question": "Who wrote the play 'Romeo and Juliet'?",
        "options": ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
        "correctAnswer": "William Shakespeare"
      },
      {
        "question": "What is the chemical symbol for gold?",
        "options": ["Ag", "Fe", "Au", "Hg"],
        "correctAnswer": "Au"
      },
      {
        "question": "How many continents are there on Earth?",
        "options": ["4", "5", "6", "7"],
        "correctAnswer": "7"
      },
      {
        "question": "What is the tallest mountain in the world?",
        "options": ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount McKinley"],
        "correctAnswer": "Mount Everest"
      },
      {
        "question": "Which gas do plants absorb from the atmosphere?",
        "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "correctAnswer": "Carbon Dioxide"
      },
      {
        "question": "Who painted the Mona Lisa?",
        "options": ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Rembrandt"],
        "correctAnswer": "Leonardo da Vinci"
      },
      {
        "question": "What is the largest planet in our solar system?",
        "options": ["Mars", "Venus", "Jupiter", "Saturn"],
        "correctAnswer": "Jupiter"
      }
]

const questionString = document.getElementById('question');
const answerBlock = document.querySelector('.answer_block');
const nextButton = document.querySelector('.next_btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

startQuiz()

function resetState(){
    nextButton.style.display = 'none';
    while(answerBlock.firstChild){
        answerBlock.removeChild(answerBlock.firstChild)
    }
}
function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionString.innerHTML = questionNo + '. ' + currentQuestion.question;

    currentQuestion.options.forEach(answer => {
        const button = document.createElement('div');
        button.innerHTML = answer;
        button.classList.add('answer');
        answerBlock.appendChild(button);

        if(answer === currentQuestion.correctAnswer){
            button.dataset.correct = true
        }
        button.addEventListener('click', selectAnswer)
    }
    )
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === 'true';
    if(isCorrect){
        selectBtn.classList.add('correct');
        score ++;
    } else{
        selectBtn.classList.add('incorrect')
    }

    Array.from(answerBlock.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct')
        }
        button.classList.add('disabled-answer')
    })
    nextButton.style.display = 'block'

}

function showScore() {
    resetState();
    questionString.innerHTML = `You're score ${score} out of ${questions.length}!`
    nextButton.innerHTML = "play again";
    nextButton.style.display = 'block'
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion()
    } else{
        showScore()
    }
}

nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    } else{
        startQuiz()
    }
})
  
const questions = [
    {
        question: 'Столица России?',
        options: ['Москва', 'Санкт-Петербург', 'Новосибирск'],
        answer: 'Москва'
    },
    {
        question: 'Самый большой океан?',
        options: ['Атлантический', 'Индийский', 'Тихий'],
        answer: 'Тихий'
    },
    {
        question: 'Кто написал роман "Преступление и наказание"?',
        options: ['Ф.М.Достоевский', 'А.С.Пушкин', 'Н.В.Гоголь'],
        answer: 'Ф.М.Достоевский'
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Отображение текущего вопроса
function showQuestion() {
    const questionElement = document.getElementById('question');
    const optionsList = document.getElementById('options');
    
    // Очистка предыдущего содержимого
    questionElement.textContent = '';
    optionsList.innerHTML = '';

    if (currentQuestionIndex >= questions.length) {
        finishQuiz();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    for (let i = 0; i < currentQuestion.options.length; i++) {
        const optionItem = document.createElement('li');
        optionItem.textContent = currentQuestion.options[i];
        optionItem.addEventListener('click', () => checkAnswer(currentQuestion.answer === currentQuestion.options[i]));
        optionsList.appendChild(optionItem);
    }
}

// Проверка правильности ответа
function checkAnswer(isCorrect) {
    if (isCorrect) {
        score++;
    }
    nextQuestion();
}

// Переход к следующему вопросу
function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

// Завершение викторины
function finishQuiz() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Вы ответили правильно на ${score}/${questions.length} вопросов.`;
    document.getElementById('next-btn').style.display = 'none';
}

document.getElementById('next-btn').addEventListener('click', nextQuestion);
showQuestion(); // запускаем первую страницу теста
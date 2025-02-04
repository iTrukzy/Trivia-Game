const modalForm = document.getElementById('modal-form');
const modalHow = document.getElementById('modal-how');
const startPlaying = document.getElementById('start-playing');
const closeModal = document.getElementById('close-modal');
const okRules = document.getElementById('ok-rules');
const howPlay = document.getElementById('how-play');
const cancelQuestions = document.getElementById('cancel-questions');
const header = document.getElementById('header');
const questionsHeader = document.getElementById('questions-header');
const startGame = document.getElementById('start-game');
const nextQuestionAlert = document.getElementById('next-question-alert');

const questionItem =document.getElementById('question-item')
const a_text =document.getElementById('a_text')
const b_text =document.getElementById('b_text')
const c_text =document.getElementById('c_text')
const d_text =document.getElementById('d_text')
const nextQuestions = document.getElementById('next-questions');
const finishQuestions = document.getElementById('finish-questions');
const resultsContainer = document.getElementById('results-container');
const resultsHeader = document.getElementById('results-header');
const resultsText = document.getElementById('results-text');
const correctImg = document.getElementById('correct-img');
const incorrectImg = document.getElementById('incorrect-img');
const btnFinish = document.getElementById('btn-finish');



startPlaying.addEventListener('click', (e) => {
    e.preventDefault()
    modalForm.style.top = '0';
    modalHow.style.left = '-3000px'
})

closeModal.addEventListener('click', (e) => {
    e.preventDefault()
    modalForm.style.top = '-1000px';
    modalHow.style.left = '-3000px'
})
modalHow.addEventListener('click', () => {
    modalHow.style.left = '-3000px'
})

howPlay.addEventListener('click', () => {
    modalHow.style.left = '0'
    modalForm.style.top = '-1000px';
})

okRules.addEventListener('click', () => {
    modalHow.style.left = '-3000px'
    modalForm.style.top = '-1000px';
    
})
cancelQuestions.addEventListener('click', () => {
    questionsHeader.style.display = 'none'
    header.style.display = 'flex'
    nextQuestionAlert.style.left = '0'
    location.reload()
})
startGame.addEventListener('click', () => {
    questionsHeader.style.display = 'flex'
    header.style.display = 'none'
    modalForm.style.top = '-1000px' 
})




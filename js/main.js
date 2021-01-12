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
const nextQuestions = document.getElementById('next-questions');



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




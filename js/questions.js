function encode_utf8(s) {
    return unescape(encodeURIComponent(s));
  }
  
function decode_utf8(s) {
    return decodeURIComponent(escape(s));
  }

let timeLeft = 15;
function startTimer() {
    let downLoadTimer = setInterval(function() {
        if(timeLeft <= 0) {
            clearInterval(downLoadTimer);
            nextQuestionAlert.style.left = '0'
            document.getElementById('timer').innerHTML = "0:00";
    
        } else {
            document.getElementById('timer').innerHTML = "0:" + timeLeft ;
        }
        timeLeft -= 1;
        console.log(timeLeft)
        
    }, 1000);
}

function apiCategories() {
    const url = 'https://opentdb.com/api_category.php';
    fetch(url)
        .then((response) => response.json())
        .then((data) => printCategories(data.trivia_categories))
}
function printCategories(categories) {
    const categoryContainer = document.getElementById('category-Question');
    categories.forEach((category) => {
        categoryContainer.innerHTML += `<option value="${category.id}">${category.name}</option>`;
    });


    

}
apiCategories();

// let currentQuestion = {};
// let acceptingAnswers = false;
// let score = 0;
// let questionCounter = 0;
// let availableQuesions = [];




function apiQuestions(){
    const numberQuestion = document.getElementById('number-Question').value;
    const category = document.getElementById('category-Question').value;
    const difficulty = document.getElementById('difficulty-Question').value;
    const type = document.getElementById('type-Question').value;

    fetch(`https://opentdb.com/api.php?amount=${numberQuestion}&category=${category}&difficulty=${difficulty}&type=${type}`)
    .then((res) => {
        return res.json();
    })
    .then((loadedQiestions) =>  printQuestions(loadedQiestions))
    .catch((err) => {
        console.log(err)
    })

    const typeDiffiAlert = document.getElementById('type-diffi-alert')
    if (difficulty === 'easy') {
        typeDiffiAlert.style.color = 'rgb(28, 116, 6)';
    } else if (difficulty === 'mediun') {
        typeDiffiAlert.style.color = 'rgb(231, 142, 25)';
        typeDiffiAlert.innerText = 'Mediun'
    } else if (difficulty === 'hard') {
        typeDiffiAlert.style.color = 'red';
        typeDiffiAlert.innerText = 'Hard'
    }
   
}
let questions = []
let answers = []

function printQuestions(loadedQiestions) {
    const questionsContainer = document.getElementById('questions-container');


    for (let i = 0; i < loadedQiestions.results.length; i++) {
        const formattedQuestion = loadedQiestions.results[i].question
        const answerChoices = [...loadedQiestions.results[i].incorrect_answers]
    

        answerChoices.splice(Math.floor(Math.random() * 4) - 1 , 0, loadedQiestions.results[i].correct_answer)


        
        questions.push(formattedQuestion)
        questions.push(answerChoices)
        
    }
    const questionItem =document.getElementById('question-item')
    const a_text =document.getElementById('a_text')
    const b_text =document.getElementById('b_text')
    const c_text =document.getElementById('c_text')
    const d_text =document.getElementById('d_text')

    for (let j = 0; j < questions.length; j++) {
        questionItem.innerText = questions[0]
        console.log(questions[j])
            a_text.innerText = questions[1][0]
            b_text.innerText = questions[1][1]
            c_text.innerText = questions[1][2]
            d_text.innerText = questions[1][3]
        
            

    }
    // console.log(questions)
    // console.log(answers)
    // loadedQiestions.results.forEach(element => {
        
    // });((loadedQiestions) => {

    // });
        

    
    // questionItem.innerHTML = questionItems;
    startTimer()
    
}
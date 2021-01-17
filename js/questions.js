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
            setTimeout(() => {
                nextQuestionAlert.style.left = '-1000px'
                nexQuestion()       
            }, 2000)
            
    
        } else {
            document.getElementById('timer').innerHTML = "0:" + timeLeft ;
        }
        timeLeft -= 1;
        // console.log(timeLeft)
        
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
let correct = []



function printQuestions(loadedQiestions) {


    for (let i = 0; i < loadedQiestions.results.length; i++) {
        const formattedQuestion = loadedQiestions.results[i].question
        const answerChoices = [...loadedQiestions.results[i].incorrect_answers]
        const corrected = loadedQiestions.results[i].correct_answer
    

        answerChoices.splice(Math.floor(Math.random() * 4) - 1 , 0, loadedQiestions.results[i].correct_answer)

            correct.push(corrected)
            questions.push(formattedQuestion)
            questions.push(answerChoices)

        
        
        
    }
    for (let j = 0; j < questions.length; j++) {

      
        questionItem.innerText = questions[0]
            a_text.innerText = questions[1][0]
            b_text.innerText = questions[1][1]
            c_text.innerText = questions[1][2]
            d_text.innerText = questions[1][3]

    }
    // console.log(questions)
    startTimer();
    
}


let answersAll = []
let selectedAnswers = []
let contNumNext= 1;
let currentQuestion = 0;
function nexQuestion() {
    timeLeft = 15
    currentQuestion++

    const rbs = document.querySelectorAll('input[name="answer"]');
        let selectedValue;
        
        for (const rb of rbs) {
            if (rb.checked) {
                document.getElementById('a').setAttribute('value', a_text.innerText)
                document.getElementById('b').setAttribute('value', b_text.innerText)
                document.getElementById('c').setAttribute('value', c_text.innerText)
                document.getElementById('d').setAttribute('value', d_text.innerText)
                selectedValue = rb.value
                selectedAnswers.push(selectedValue)
                rb.checked = false;
            }
            
        }
      
        
        questionItem.innerText = questions[currentQuestion++ + 1]; 

        const numberQuestion = document.getElementById('number-Question').value;
        
            if (contNumNext === numberQuestion - 1) {
                finishQuestions.style.display = 'inline-block'
                nextQuestions.style.display = 'none'
            }
        
        
        if (a_text.innerHTML = questions[currentQuestion+ 1]) {
            a_text.innerText = questions[currentQuestion+ 1][0]
            b_text.innerText = questions[currentQuestion+ 1][1]
            c_text.innerText = questions[currentQuestion+ 1][2]
            d_text.innerText = questions[currentQuestion+ 1][3]

            contNumNext++

        } else {
            questionsHeader.style.display = 'none'
            
        }

        
}

let points = 0
function finishQuestion() {
    timeLeft = 0
    console.log(selectedAnswers)
    console.log(correct)
    for (let i = 0; i < selectedAnswers.length; i++) {
        for (let j = 0; j < correct.length; j++) {
            if (selectedAnswers[i] === correct[j]) {
                points += 1;
                resultsHeader.style.display = 'block';
                resultsText.innerText = `Sacastes ${points} preguntas correctas de 10`
            } 
        }
    }
    // console.log(points)

}



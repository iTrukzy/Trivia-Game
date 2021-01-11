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



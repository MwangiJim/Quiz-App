const startBtn = document.querySelector('.start-section button');
const container = document.querySelector('.container');
const optionList = document.querySelector('.optionlist');
const nextBtn = document.querySelector('#nextBtn');
const quitBtn = document.querySelector('#quitBtn');
const Timer = document.querySelector('.time-box #time');

startBtn.onclick =()=>{
    container.style.display = 'block';
    showQuestions(0);
    headerIncreament(1);
    updateTime(15);
}

let count;
let queCount = 0;
let headerCount = 1;
let startTime = 15;

nextBtn.onclick =()=>{
    if(queCount < questions.length -1){
        queCount++;
        headerCount++;
        clearInterval(count);
        updateTime(startTime);
        showQuestions(queCount);
        headerIncreament(headerCount);
    }
    else{
        alert(Date());
        alert('The End!!!');
        alert('You got '+score)
        quitBtn.style.display = 'block';
        clearInterval(count);
    }
}
quitBtn.onclick =()=>{
    container.style.display = 'none';
}


function showQuestions(index){
    let question = document.querySelector('.question');

    let questionTag = `<h3>${questions[index].question}</h3>`;
    let optionTag = `<div class = "option">${questions[index].options[0]}<span></span></div>`+
                        `<div class = "option">${questions[index].options[1]}<span></span></div>`+
                        `<div class = "option">${questions[index].options[2]}<span></span></div>`+
                        `<div class = "option">${questions[index].options[3]}<span></span></div>`;

    question.innerHTML = questionTag;
    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
     for( let i = 0;i<option.length;i++){
         option[i].setAttribute("onclick","optionSelected(this)");
     }
}

function optionSelected(answer){
    let UserAns = answer.textContent;
    let correctAns = questions[queCount].answer;
    clearInterval(count);
    let allOptions = optionList.children.length;
    if(UserAns == correctAns){
        answer.classList.add('correct')
        console.log('Correct Answer');
        addScore();
    }
    else{
        answer.classList.add('incorrect')
        console.log('Wrong Answer');
    }
    for(let i =0;i<allOptions;i++){
        optionList.children[i].classList.add('disabled')
    }
    nextBtn.style.display = 'block';
}


function headerIncreament(index){
    const header = document.querySelector('.header');
    let headerTag = `<span>Question <p>${index}</p> of <p>${questions.length}</p></span>`;
    header.innerHTML = headerTag;
}
let score = 0;
function addScore(){
    const scorelabel = document.querySelector('.score-counter');
    score += 2;
    scorelabel.innerHTML = score;
}

function updateTime(){
    count = setInterval(timecreate,1000);

    function timecreate(){
    if(startTime >= 0){
        let seconds = startTime;
        Timer.innerHTML = `${seconds}`;
        startTime--;
    }
    else{
        for(let i = 0;allOptions.length;i++)
        {
            optionList.children[i].classList.add('disabled');
        }
    }
    }
}
// quiz format, using an array of objects to store questions, choices, and answers.
const questions = [
    {
        question: "Who is the first character shown in Kagurabachi?",
        choices: ["Hakuri", "Zuko", "Chihiro","Shiba"],
        answer: "Chihiro"
    },
    {
        question: "Who is the main antagonist of the first arc?",
        choices: ["Akemura", "Sojo", "Magatsumi","Yura"], 
        answer: "Sojo"
    },
    {
        question: "In what chapter do we first see Seichi Samura?",
        choices: ["Chapter 93", "Chapter 37", "Chapter 13","Chapter 18"],
        answer: "Chapter 18"
    },
    {
        question: "Who appeared first, Kiri Shirakai or Kuguri",
        choices: ["Kuguri", "Kiri", "They arrived on the same panel and chapter"],
        answer: "Kuguri"
    }
]

let currentQuestionsIndex = 0;
let score = 0;

const targetQuestion = document.querySelector("#Quiz-1");
const answerBtn = document.getElementById("Answers");

function displayQuestion(){

const currentQuestion = questions[currentQuestionsIndex];

targetQuestion.textContent = currentQuestion.question;

answerBtn.innerHTML = "";

currentQuestion.choices.forEach(function(choices){

const button = document.createElement("button"); //wipes any old buttons from questions before

button.textContent = choices; //puts text to show answer in the button

button.classList.add("customize-answers"); //makes it so i can style the button 


button.addEventListener("click", function(){
    answerCheck(choices, currentQuestion.answer); //this took me about 15 mins to realize what this was doing lol its so simple too
});

answerBtn.appendChild(button); //puts the button inside the empty div 
 });
}

const popUpMsg = document.getElementById("Pop-Up-Msg");

//checks if button pressed is the correct answer
function answerCheck(userAnswer, rightAnswer){

    
    popUpMsg.classList.remove()
    if(userAnswer === rightAnswer){
        popUpMsg.textContent = "CORRECT!!!!";
        popUpMsg.classList.add("Correct-Answer");
        score++;
    }
    else{
        popUpMsg.textContent = "WRONG!!!!";
        popUpMsg.classList.add("Wrong-Answer");
    }


currentQuestionsIndex++;

setTimeout(function(){

    popUpMsg.textContent = "";

if(currentQuestionsIndex < questions.length){
    displayQuestion();
}
else{
    alert("You completed the quiz!" + score);
    answerBtn.innerHTML = "";
 }
},1000);
}

displayQuestion();
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

const targetQuestion = document.querySelector("#Quiz-1");

targetQuestion.textContent = questions[0].question;

const answerButton = getElementById("Answers");

const currentQuestion = questions;

answerButton.innerHTML = "";

currentQuestion.choices.forEach(function(choices){

const button = getElementById("Answers"); //wipes any old buttons from questions before

button.textContent = choices; //puts text to show answer in the button

button.classList.add("customize-answers"); //makes it so i can style the button 

answerButton.appendChild(button); //puts the button inside the empty div 
} );
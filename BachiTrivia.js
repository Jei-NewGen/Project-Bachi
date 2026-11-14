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
    },
    {
        question: "Who saves Char when Sojo kidnaps her?",
        choices: ["Samura", "Shiba", "Chihiro", "Hakuri"],
        answer: "Chihiro"
    },
     {
        question: "Who fought during the Irishima Talks?",
        choices: ["Kunshige and Urita", "Shiba and Hiroto", "Azami and Hakuri"],
        answer: "Shiba and Hiroto"
    },
     {
        question: "What chapter does Chihiro lose to Akemura?",
        choices: ["Chapter 61","Chapter 93","Chapter 108" ],
        answer: "Chapter 108"
    },
     {
        question: "Who lands the first blow in the fight between Sojo and Chihiro in their first fight?",
        choices: ["Sojo", "Chihiro",],
        answer: "Sojo"
    },
     {
        question: "Which technique does Chihiro absorb from Sojo?",
        choices: ["Mei", "Bachi no Kagura", "Nishiki", "Banquet"],
        answer: "Mei"
    },
     {
        question: "What technique does Akemura use to drill a hole into Kamunabi HQ?",
        choices: ["Super Akemura Attack", "Makankasappo", "Bee", "Centipede"],
        answer: "Bee"
    },
     {
        question: "Does Samura land a hit on Akemura during their battle?",
        choices: ["Yes","No"],
        answer: "Yes"
    },
     {
        question: "True or False: Kunishige was the strongest fighter up until his death?",
        choices: ["True", "False"],
        answer: "False"
    },
     {
        question: "True or False: Magatsumi is the blade wielded by Uruha",
        choices: ["True", "False"],
        answer: "False"
    },
     {
        question: "Who was Hakuri's abuser?",
        choices: ["Chihiro", "Kyora", "Tenri", "Soya"],
        answer: "Soya"
    },

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

//displays points on screen and stores them
let pointsTotal = Number(localStorage.getItem("pointsTotal")) //takes existing points or starts with 0 for new user
const displayPoints = document.getElementById("points-counter");
displayPoints.textContent = pointsTotal;

//checks if button pressed is the correct answer
function answerCheck(userAnswer, rightAnswer){

    
    popUpMsg.classList.remove()
    if(userAnswer === rightAnswer){
        pointsTotal += 20; //adds 20 points for right answers
        localStorage.setItem("pointsTotal", pointsTotal); //sets the points into storage so it can be used here and in the gacha section
        displayPoints.textContent = pointsTotal;  //updates points immediately on screen

        popUpMsg.textContent = "CORRECT!!!!";
        popUpMsg.classList.add("Correct-Answer");
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

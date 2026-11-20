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

let currentQuestionsIndex = Number(localStorage.getItem("savedQuestionIndex"));
const questionsPerQuiz = 5;
let score = 0;

const quizTime = 10000;
let quizUnlock = Number(localStorage.getItem("cooldownTime")) || 0;

const targetQuestion = document.querySelector("#Quiz-1");
const answerBtn = document.getElementById("Answers");
const popUpMsg = document.getElementById("Pop-Up-Msg");
const displayPoints = document.getElementById("points-counter");

let pointsTotal = Number(localStorage.getItem("pointsTotal")) || 0;
displayPoints.textContent = pointsTotal;

// checks if quiz is on cooldown
function quizStart(){
    const currentTime = Date.now();

    if(currentTime < quizUnlock){
        timeUntilQuiz(); 
    }
    else{
        localStorage.removeItem("cooldownTime");
        localStorage.removeItem("savedQuestionIndex");
        currentQuestionsIndex = 0;
        displayQuestion();
    }
}

function timeUntilQuiz(){
    const counterTime = new Date(quizUnlock).toLocaleTimeString([],{
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    answerBtn.innerHTML = "";
    popUpMsg.textContent = "";
    targetQuestion.textContent = "Next questions appear at " + counterTime;
}

function displayQuestion(){
    const currentQuestion = questions[currentQuestionsIndex];
    targetQuestion.textContent = currentQuestion.question;
    answerBtn.innerHTML = "";

    currentQuestion.choices.forEach(function(choices){
        const button = document.createElement("button"); // creates a new button
        button.textContent = choices; // puts text to show answer in the button
        button.classList.add("customize-answers"); // makes it so i can style the button 

        button.addEventListener("click", function(){
            answerCheck(choices, currentQuestion.answer); 
        });

        answerBtn.appendChild(button); // puts the button inside the empty div 
    });
}

// checks if button pressed is the correct answer
function answerCheck(userAnswer, rightAnswer){
    
    popUpMsg.classList.remove("Correct-Answer", "Wrong-Answer");

    if(userAnswer === rightAnswer){
        pointsTotal += 20; // adds 20 points for right answers
        localStorage.setItem("pointsTotal", pointsTotal); // sets the points into storage
        displayPoints.textContent = pointsTotal; // updates points immediately on screen

        popUpMsg.textContent = "CORRECT!!!!";
        popUpMsg.classList.add("Correct-Answer");
    }
    else{
        popUpMsg.textContent = "WRONG!!!!";
        popUpMsg.classList.add("Wrong-Answer");
    }

    currentQuestionsIndex++;
    localStorage.setItem("savedQuestionIndex", currentQuestionsIndex);

    setTimeout(function(){
        popUpMsg.textContent = "";

        if(currentQuestionsIndex <  questionsPerQuiz && currentQuestionsIndex < questions.length){
            displayQuestion();
        }
        else{
            quizUnlock = Date.now() + quizTime;
            localStorage.setItem("cooldownTime", quizUnlock);
            timeUntilQuiz();
        }
    }, 1000);
}

quizStart();

const dataForPoll = {
    question: "Which sword would you want to wield?",
    selections: [
        {name: "Enten", votes: 20},
        {name: "Magatsumi", votes: 10},
        {name: "Kumeyuri", votes: 10},
        {name: "Tobimune", votes: 10}     
        
    ]
};

const pollTopic = document.getElementById("Question-Poll");
const pollOptions = document.getElementById("Poll-Choices");
const pollResult = document.getElementById("Poll-Results");

let votedAlr = localStorage.getItem("alreadyVoted");

function showPoll(){
    pollTopic.textContent = dataForPoll.question;
    pollOptions.innerHTML = "";

    if(votedAlr === "true"){
        pollResultsReveal();
        return;
    }

    dataForPoll.selections.forEach(function(name, index){
        const pollButton = document.createElement("button");
        pollButton.textContent = name.name;
        pollButton.classList.add("customize-answers");

        pollButton.addEventListener("click", function(){
            deliverVote(index);
        });
        
        pollOptions.appendChild(pollButton);
    })
}

function deliverVote(selectedVote){
dataForPoll.selections[selectedVote].votes++;

localStorage.setItem("alreadyVoted","true");
votedAlr = "true";

let currentPoints = Number(localStorage.getItem("pointsTotal")) || 0;
currentPoints += 10;
localStorage.setItem("pointsTotal", currentPoints);

 document.getElementById("points-counter").textContent = currentPoints;
 pollResult.textContent = "Thanks for voting! An additional 10 Bachi coins for voting!";

 showPoll();
}

function pollResultsReveal(){
    pollOptions.innerHTML = "";
    let completeVotes = 0;
    
    dataForPoll.selections.forEach(function(name){
        completeVotes += name.votes;
    });
    
    dataForPoll.selections.forEach(function(name){
    const calculation = Math.round((name.votes / completeVotes) * 100);
    const resultsCalculated = document.createElement("div");
    resultsCalculated.classList.add("calcResultsClass");
    resultsCalculated.textContent = name.name + "-" + calculation + "% (" + name.votes + "votes";

    pollOptions.appendChild(resultsCalculated);
    });
}

showPoll();
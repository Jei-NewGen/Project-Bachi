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

function isAnswerCorrect(choice, correctAnswer){
    if(choice === correctAnswer){
        console.log("CORRECT!");
    }
    else{
        console.log("INCORRECT!, NOT VERY BACHI OF YOU");
    }
}
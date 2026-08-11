const bachiQuotes=[
"Katanas have always saved lives and slashed open eras. But...I'm sure you know...They're still tools for killing people. We are complicit in the deaths they cause. - Kunishige Rokuhira", 
"I'll cut them down, I'll cut them all down! -Chihiro Rokuhira",
"I'll face him head on... and give him an honorable death. -Chihiro Rokuhira",
"I just happened to have someone... who set me on the right path. -Hakuri Sazanami", 
"Its my fault for being so useless. I can't do anything. That's why i want to be useful...even a little bit. -Hakuri Sazanami",

];
const randomSelect = Math.floor(Math.random() * bachiQuotes.length );

const bachiSelect = bachiQuotes[randomSelect];

const helloThere = document.getElementById("quote-random");

helloThere.innerText = bachiSelect;

helloThere.style.setProperty("display","block","important");

const quoteBackgroundImages=[
    "url('assets/chihiro png.png')", "url('assets/chihiro 2.png')", "url('assets/chihiro 3.png')", "url('assets/chihiro 4.png')"
];

const randomGrab = Math.floor(Math.random() * quoteBackgroundImages.length);
document.getElementById("quote-random").style.backgroundImage = quoteBackgroundImages[randomGrab];

const authorCommentsHokazono=[
    "I did the thing where you go into a bookstore and buy your own book. It made me feel so happy.",
    "I like to think up my storyboards while I take a walk, but it's now so cold that I can't leave the house. What am I supposed to do?!",
    "When I walk around at night while listening to the soundtrack of The Batman, I become Batman.",
    "When I hear “Bling-Bang-Bang-Born,” I need to wave my arms, so I have to suddenly stop working. I can't find a solution to this.",
    "I was one of those terrible kids who would ask his parents for cash as a birthday present. But what could I do, I was addicted to DB Heroes.",
    "I’ve been watching Pixar movies during work lately. They’re great and bring back so many memories. The opening to Cars is the best!",
    "Getting Todo into my life has definitely made it much better. My weekly pleasures are disappearing one by one…",
    "Right now my hair is the longest it’s ever been. It makes my neck itchy, so I want to cut it. Also, Tom Hardy is really cool lately.",
    "I watched Thunderbolts. My first Marvel movie in theaters in a while. Florence Pugh is one of a kind.",
    "I went to NY! Thanks to all the support of the editorial department, I was able to have a blast even with my terrible English!",
    "Don’t end, Modulo!!!!!!!!!!",
    "I used Golden Week to go see a Kagurabachi anime announcement billboard, but it was already down. I went to look at a white wall!",
    
]
const messageReplace = document.getElementById("replaceText");
function commentUpdate(){
const randomComment = Math.floor(Math.random()* authorCommentsHokazono.length);
messageReplace.innerText = authorCommentsHokazono[randomComment];
};
commentUpdate();
setInterval(commentUpdate,7000);
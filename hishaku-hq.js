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
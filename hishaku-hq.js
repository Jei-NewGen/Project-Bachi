const bachiQuotes=[
"Katanas have always saved lives and slashed open eras. But...I'm sure you know...They're still tools for killing people. We are complicit in the deaths they cause. - Kunishige Rokuhira", "I'll cut them down, I'll cut them all down! - Chihiro Rokuhira",
];
const randomSelect = Math.floor(Math.random() * bachiQuotes.length );

const bachiSelect = bachiQuotes[randomSelect];

const helloThere = document.getElementById("quote-random");

helloThere.innerText = bachiSelect;

helloThere.style.setProperty("display","block","important");
const volumes = ["url('assets/kgb volume 1 cover.webp')",
  "url('assets/kgb volume 2.webp')",
  "url('assets/kgb vol 3.webp')",
  "url('assets/kgb vol 4.webp')",
  "url('assets/kgb vol 5.webp')",
  "url('assets/kgb vol 6.webp')",
  "url('assets/kgb vol 7.webp')",
  "url('assets/kgb vol 8.webp')",
  "url('assets/kgb vol 9.webp')",
  "url('assets/kgb vol 10.webp')",
  "url('assets/kgb vol 11.webp')",
  "url('assets/kgb vol 12.webp')"
]

const volumeChange = document.getElementById("Change-1");
function volumeReplace(){
const randomVolume = Math.floor(Math.random() * volumes.length);
volumeChange.style.backgroundImage = volumes[randomVolume];
}
volumeReplace();
setInterval(volumeReplace, 7000);


const memeChange = document.getElementById("Change-2");
const memes = ["url('assets/gem bachi meme 1.webp')",
  "url('assets/gem meme 2.webp')",
  "url('assets/gem meme 3.webp')",
  "url('assets/oh the memes ive seen them all bachi.jpg')",
  "url('assets/peak bachi meme.webp')",
  "url('assets/funny bachi meme.jpg')",
  "url('assets/iconic bachi meme.webp')",
  "url('assets/classic bachi meme.webp')",
  "url('assets/gojo diffed by bachi.webp')",
  "url('assets/the honored bachi.jpg')",
  "url('assets/lets lock in bachi man.webp')",
  "url('assets/kgb meme 12.jpg')",
  "url('assets/kgb meme 13.jpg')",
  "url('assets/kgb meme 14.jpg')",
  "url('assets/kgb meme 15.jpg')",
  "url('assets/kgb meme 16.jpg')",
  "url('assets/kgb meme 17.jpg')",
  "url('assets/kgb meme 18.jpg')",
  "url('assets/kgb meme 19.jpg')",
  "url('assets/kgb meme 20.jpg')"
];
function memeReplace(){
  const randomMeme = Math.floor(Math.random()* memes.length);
  memeChange.style.backgroundImage = memes[randomMeme];
}
memeReplace();
setInterval(memeReplace, 7000);

const panelChange = document.getElementById("Change-3");
const panels = [
  "url('assets/panel 1.jpg')",
  "url('assets/panel 2.jpg')",
  "url('assets/panel 3.webp')",
  "url('assets/panel 4.jpg')",
  "url('assets/panel 5.webp')",
  "url('assets/panel 6.jpeg')",
  "url('assets/panel 7.webp')",
  "url('assets/panel 8.jpg')",
  "url('assets/panel 9.jpg')",
  "url('assets/panel 10.jpg')",
  "url('assets/panel 11.jpg')",
  "url('assets/panel 12.webp')",
  "url('assets/panel 13.jpg')",
  "url('assets/panel 14.jpeg')",
  "url('assets/panel 15.webp')",
  "url('assets/panel 16.webp')",
  "url('assets/panel 17.webp')",
  "url('assets/panel 18.jpg')",
  "url('assets/panel 19.jpg')",
  "url('assets/panel 20.jpg')"
];
function panelReplace(){
  const randomPanels = Math.floor(Math.random() * panels.length);
  panelChange.style.backgroundImage = panels[randomPanels]
}
panelReplace();
setInterval(panelReplace, 7000);

const artSubmission = document.getElementById("artInput");

function handleArtFile(event){
  const artFile = event.target.files; // when user selects a file, a massive load of data is sent to the event variable, target is like a messenger that points to the element the user selected which is <input type="file">, .files is a hidden vault that the browser creates automatically.

//this next line is a if statement that checks if user actually used it, thought id type what it does here in my own words so i can learn it better when revisiting all the code.
  if(artFile.length === 0){
    console.log("No art file selected.")
    return;
  }
};

const chosenArtFile = artFile[0]; // this line stores the first file selected by the user.

//the next lines show extraction information if extraction is successful.
console.log("Art file successfully extracted.");
console.log("File name:",chosenArtFile.name);
console.log("File size:", chosenArtFile.size); //shows in bytes, 1kb = 1024 bytes, 1mb = 1024kb
console.log("File type:", chosenArtfile.type);

artSubmission.addEventListener('change', handleArtFile);
// all of this successfully extracts and shows the file but its not permanent and will go away when user resets tab.

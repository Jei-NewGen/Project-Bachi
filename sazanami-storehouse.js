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
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
  "url('assets/kgb vol 11.webp')"
]

const volumeChange = document.getElementById("Change-1");
function volumeReplace(){
const randomVolume = Math.floor(Math.random() * volumes.length);
volumeChange.style.backgroundImage = volumes[randomVolume];
}
volumeReplace();
setInterval(volumeReplace, 7000);
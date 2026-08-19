const volumes = ["url('assets/kgb volume 1 cover.webp')","url('assets/kgb volume 2.webp')","url('assets/kgb vol 3.webp')",
    "url('assets/kgb vol 4.webp')","url('assets/kgb vol 5.webp')","url('assets/kgb vol 6.webp')",
    "url('assets/kgb vol 7.webp')","url('assets/kgb vol 8.webp')","url('assets/')",
    "url('assets/')","url('assets/')"
    
]



const volumeChange = document.getElementById("Change-1");
function volumeReplace(){
const randomVolume = Math.floor(Math.random() * volumes.length);
volumeChange.innertext = volumes[randomVolume];
}
volumeReplace();
setInterval(volumeReplace, 6000);
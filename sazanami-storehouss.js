const volumes = [
    
]



const volumeChange = document.getElementById("Change-1");
function volumeReplace(){
const randomVolume = Math.floor(Math.random() * volumes.length);
volumeChange.innertext = volumes[randomVolume];
}
volumeReplace();
setInterval(volumeReplace, 6000);
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


const chosenArtFile = artFile[0]; // this line stores the first file selected by the user.

//the next lines show extraction information if extraction is successful.
console.log("Art file successfully extracted.");
console.log("File name:",chosenArtFile.name);
console.log("File size:", chosenArtFile.size); //shows in bytes, 1kb = 1024 bytes, 1mb = 1024kb
console.log("File type:", chosenArtFile.type);

const mail = new FormData(); //creates an empty form data object that can be used to send data to a server.
mail.append("artwork", chosenArtFile); // puts the art inside and labels it "artwork".
// this is like putting packaging into a box and labeling it.

//once everything is packaged, we can send it to a server using fetch(currently don't have server so uh got to learn how to get one or is it something i have to buy lol)
fetch("http://localhost:5000/upload",{
method : "POST", // tells server im giving it data
body: mail // attaches the mail containing the art 
})

.then(function(response){
  if(response.ok){
    alert("Art successfully sent.");
  }
  else{
    alert("Error occurred...TRY AGAIN.");
  }
})
 
.catch(function(error) {
        console.error("Upload Failed:", error);
    });
  }

artSubmission.addEventListener('change', handleArtFile);

//making it so the art sent is displayed in a gallery at random, this is the next stage of the process.

const artDisplay = document.getElementById("artDisplay"); 

//function that shuffles list randomly
function shuffleArt(artArray){  
  return artArray.sort(function() { //.sort is a built in tool, normally it sorts in order and decides what comes first based on certain factors. Due to function it will not sort in order since we are giving it a random number to decide.
    return 0.5 - Math.random(); // when subtracting a random from 0.5, it can be positive, negative or 0. If negative, it is left in order, if positive it is moved swaps positions, This is how it shuffles randomly.
  });
}
// after researching(scrolling forums/websites lol) i learned this method isn't perfect and can be better, but for this gallery it will work since gallerys are small. Although if the site gets very big i would have to redo this then? 

//this function will pull art from backend server
function loadRandomArt(){
  fetch("http://localhost:5000/api/artwork") // this is the endpoint thats used to get art, endpoints are dedicated urls used for a specific purpose, im using it to get art from the backend.
  .then(function(response) {
    return response.json();  // basically servers can't actually send arrays, its initially viewed as a giant string, but this line makes it readable.(Simplified it)
  })
  .then(function(artArray){
    const artRandom = shuffleArt(artArray); // this uses the earlier function to shuffle the art randomly, its like the puzzle pieces are coming together.
  
  artDisplay.innerHTML = ""; // this clears the gallery before adding any new files

  artRandom.forEach(function(art){
    const artImage = document.createElement("img"); // this creates a new img element in RAM, but since it isn't visual yet its called a floating element.
  
  artImage.src = "http://localhost:5000/uploads/" + art;
  artImage.alt = "Fan-Art";
  artImage.className = "Fan-Art-Gallery";
  
  artDisplay.appendChild(artImage); 
});
})
.catch(function(error){
  console.error("Loading art error...", error);
});
}
window.addEventListener("DOMContentLoaded", loadRandomArt); // this triggers the function to load art when page is fully loaded 

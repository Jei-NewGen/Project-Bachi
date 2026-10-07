//I'm making a clock that counts down for chapter releases. I find this will be a helpful tool for manga fans, Some don't get updates
// when the manga goes on a random hiatus due to health related issues or something else so this will be a useful tool me thinks :)

const releaseDate = new Date("October 11, 2026 10:00:00").getTime(); //sets the release date, guess ill have to update this manually.

const timerCount = setInterval(function() {

const present = new Date().getTime(); //grabs time at the current moment.

const remainingTime = releaseDate - present; // subtracts current time from release date time

const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24)); //at first looking at this i was wondering what was this math and how does it work and i took a pretty close guess.
// the four numbers calculate the milliseconds in a day, ms, s, m, h. Then dividing the remaining time by that, Math.floor says what it does so yea.

const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
// % divides by the days value but only returns the remainder fraction, then the next set of numbers then divides it by the ms in an hour, which determines the remaining hours, quite fascinating.

const minutes =  Math.floor((remainingTime % (1000 * 60 * 60) / (1000 * 60)));
//first set of numbers saves only the milliseconds it takes not to make a full hour, second set divides that by the ms in a minute which gives remaining minutes

const seconds = Math.floor((remainingTime % (1000 * 60) / 1000));
// first set of numbers discards full minutes, divide it by 1000 to get the number of seconds.


document.getElementById("days").innerText = days < 10 ? "0" + days : days;
document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
// if/else statement that determines if the numbers are double digits and how to display them if they are or aren't

if(remainingTime < 0){
    clearInterval(releaseDate);

// stops the code once release date is reached;

document.getElementById("passing").innerHTML = "<div class='Countdown-Heading'  style='font-size: 2rem;'> CHAPTER HAS BEEN RELEASED!! </div>";
// replaces the boxes with a message notifying the chapter has released!  
}
},1000);





//making a reusable function that allows image of card when pressed to chain to a secondary one, thought it would be a cool feature to add.

function screenPressed(photoId,activeSrc,normal){
    const pressedImg = document.getElementById(photoId);

    function activeImg(){
        pressedImg.src = activeSrc;
    }

    function backToNormal(){
        pressedImg.src = normal;
    }

    pressedImg.addEventListener("touchstart", activeImg);
    pressedImg.addEventListener("touchend", backToNormal);
    pressedImg.addEventListener("touchcancel", backToNormal);
}

screenPressed("Card-Img-1","assets/Chihiro-Card-2.jpg", "assets/chihiro-card.jpg");
screenPressed("Card-Img-2","assets/kunishige-2.webp","assets/kunishigeeee.webp");
screenPressed("Card-Img-3","assets/shiba-2.jpg","assets/togo shibaaaa.webp");
screenPressed("Card-Img-4","assets/hakuri-2.webp","assets/hakuriiiii.webp");
screenPressed("Card-Img-5","assets/hinao-2.webp","assets/hinaoooo.webp");
screenPressed("Card-Img-6","assets/char-2.webp","assets/CHARRRR.webp");
screenPressed("Card-Img-7","assets/hiyuki-2.jpg","assets/HIYUKIIIII.webp");
screenPressed("Card-Img-8","assets/uruha-2.webp","assets/Uruhaaa.jpg");
screenPressed("Card-Img-9","assets/samura-2.webp","assets/SAMURAAA.webp");
screenPressed("Card-Img-10","assets/akemura-2.webp","assets/akemuraaa.jpg");
screenPressed("Card-Img-11","assets/chiaki-2.webp","assets/chiakiiii.webp");
screenPressed("Card-Img-12","assets/yura-2.webp","assets/yuraaaaaa 2.jpg");
screenPressed("Card-Img-13", "assets/iori-2.jpg", "assets/iori-1.jpg",);
screenPressed("Card-Img-14", "assets/natsuki-2.jpg", "assets/natsuki-1.jpg");
screenPressed("Card-Img-15", "assets/azami-2.webp", "assets/azami-1.webp");
screenPressed("Card-Img-16", "assets/ikuto-2.jpg", "assets/ikuto-1.jpg");
screenPressed("Card-Img-17", "assets/kiri-2.jpg", "assets/kiri-1.png");
screenPressed("Card-Img-18", "assets/tafuku-2.png", "assets/tafuku-1.webp");
screenPressed("Card-Img-19", "assets/masumi-2.jpeg", "assets/masumi-1.jpg");
screenPressed("Card-Img-20", "assets/kuguri-2.webp", "assets/kuguri-1.webp");
screenPressed("Card-Img-21", "assets/hiruhiko-2.webp", "assets/hiruhiko-1.webp");
screenPressed("Card-Img-22", "assets/hokuto-2.webp", "assets/hokuto-1.jpg");
screenPressed("Card-Img-23", "assets/uran-2.webp", "assets/uran-1.webp");
screenPressed("Card-Img-24","assets/bingo-2.webp","assets/bingo-1.webp")
screenPressed("Card-Img-25", "assets/toto-2.webp", "assets/toto-1.webp");
screenPressed("Card-Img-26","assets/kyora-2.png","assets/kyora-1.png");

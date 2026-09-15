//I'm making a clock that counts down for chapter releases. I find this will be a helpful tool for manga fans, Some don't get updates
// when the manga goes on a random hiatus due to health related issues or something else so this will be a useful tool me thinks :)

const releaseDate = new Date("September 27, 2026 10:00:00").getTime(); //sets the release date, guess ill have to update this manually.

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
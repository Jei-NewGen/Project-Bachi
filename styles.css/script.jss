
function charGenerator(){
const selection = Math.floor(Math.random(1) * 6);
switch (selection) {
    case 1:
      return "CHIHIRO";
    case 2:
      return "SHIBA";
    case 3:
      return "SAMURA";
    case 4:
      return "HIYUKI";
    case 5:
      return "HAKURI";
    case 6:
      return "JOJI";
      default:
        return "ROLL AGAIN";
} }
const character = charGenerator();
console.log(character); 
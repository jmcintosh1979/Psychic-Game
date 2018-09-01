var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var comChoices = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(comChoices);


var wins = 0;
var losses = 0;
var guesses = 9;
var userEntry = [ ];


var dirText = document.getElementById("dir-text");
var userWins = document.getElementById("user-wins");
var userLoss = document.getElementById("user-loses");
var guessRemain = document.getElementById("guesses-remain");
var userGuess = document.getElementById("user-guess");
var guess = document.getElementById("user-entry");

var reset = function() {
  guesses = 9;
  comChoices = alphabet[Math.floor(Math.random() * alphabet.length)];
  userEntry = [ ]
  console.log(comChoices);
}
 
document.onkeydown = function(event) {
  userKey = event.key;
  userEntry.push(" " + userKey);
  
  if (userKey === comChoices) {
    alert("Congratulations!  You MUST be psychic too!")
    wins++;
    reset();
    
  } 
  else {
    guesses--;
  }

  if (guesses === 0) {
    alert("Too bad...not everyone can be psychic.")
    losses++;
    reset();
  } 

  // dirText.textContent = "";
  userWins.textContent = "Wins: " + wins;
  userLoss.textContent = "Losses: " + losses;
  guessRemain.textContent = "Guesses Remaining: " + guesses;
  userGuess.textContent = "Your guesses so far: ";
  guess.textContent = userEntry;

}


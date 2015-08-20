var numberToGuess;
var maxNumber;
var tries;

init();

function init(){

	tries = 0;

	// Show Page 1
	document.getElementById("page-1").style.display = 'block';

	// Reset the content
	document.getElementsByTagName("h1")[1].innerHTML = "Pick a number between 1 and ";
	document.getElementsByClassName("guesses")[0].innerHTML = "Numbers used: <br>";
	document.getElementsByClassName("tries")[0].innerHTML = "Tries: " + tries;
	document.getElementsByTagName("h2")[0].innerHTML = " ";
	document.getElementsByTagName("h2")[1].innerHTML = "It only took you ";
}

function difficulty(max){
	// easy: 10
	// medium: 100
	// hard: 1000
	maxNumber = max;

	// Set a random number to guess
	numberToGuess = Math.floor(Math.random() * (max + 1));

	// Hide Page 1 and show Page 2
	document.getElementById("page-1").style.display = 'none';
	document.getElementById("page-2").style.display = 'block';

	// Append the max number to the string "Pick a number between 1 and "
	document.getElementsByTagName("h1")[1].innerHTML += max;

	play();
}

function play(){

	// Get the value from input
	guess = parseInt(document.getElementsByTagName("input")[0].value);

	if(!isNaN(guess)){
		tries++;

		if(guess == numberToGuess){
			// You Win!

			// Hide Page 2 and show Page 3
			document.getElementById("page-2").style.display = 'none';
			document.getElementById("page-3").style.display = 'block';

			// Append the number of tries to the string "it only took you "
			document.getElementsByTagName("h2")[1].innerHTML += tries + " tries.";
		}else if(guess > numberToGuess){
			// Number is too damn high
			document.getElementsByTagName("h2")[0].innerHTML = "Too high!";
		}else if(guess < numberToGuess){
			// Number is too low
			document.getElementsByTagName("h2")[0].innerHTML = "Too low!";
		}

		// Numbers used
		if(tries == 1){
			document.getElementsByClassName("guesses")[0].innerHTML += guess;
		}else{
			document.getElementsByClassName("guesses")[0].innerHTML += ', ' + guess;
		}
		
		// Numbers of tries
		document.getElementsByClassName("tries")[0].innerHTML = "Tries: " + tries;
	}else{
		if(tries > 0){
			document.getElementsByTagName("h2")[0].innerHTML = "Please enter a number.";
		}
	}

	// Clean the input
	document.getElementsByTagName("input")[0].value = '';
}


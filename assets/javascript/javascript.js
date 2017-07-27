function startGame () {
	alert("Guess the movie title in 15 guesses or less and you win!");

	var guessesRemaining = 15;

	var wins = 0;

	var losses = 0

	// var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	document.querySelector("#wins").innerHTML = "Wins = " + wins;
	document.querySelector("#losses").innerHTML = "Losses = " + losses;
	document.querySelector("#guesses").innerHTML = "Guesses Remaining = " + guessesRemaining;
	document.querySelector("#badLetters").innerHTML = "Incorrectly Guessed Letters";

	var computerWord = [["t", "h", "e", " ", "p", "r", "i", "n", "c", "e", "s", "s", " ", "b", "r", "i", "d", "e"],
		["p", "a", "n", "'", "s", " ", "l", "a", "b", "y", "r", "i", "n", "t", "h"], 
		["f", "i", "n", "d", "i", "n", "g", " ", "n", "e", "m", "o"], 
		["t", "h", "e", " ", "s", "h", "a", "w", "s", "h", "a", "n", "k", " ", "r", "e", "d", "e", "m", "p", "t", "i", "o", "n"], 
		["t", "h", "e", " ", "g", "o", "d", "f", "a", "t", "h", "e", "r"], 
		["t", "h", "e", " ", "l", "o", "r", "d", " ", "o", "f", " ", "t", "h", "e", " ", "r", "i", "n", "g", "s"], 
		["p", "r", "o", "m", "e", "t", "h", "e", "u", "s"], 
		["p", "u", "l", "p", " ", "f", "i", "c", "t", "i", "o", "n"], 
		["f", "o", "r", "r", "e", "s", "t", " ", "g", "u", "m", "p"], 
		["m", "o", "n", "s", "t", "e", "r", "'", "s", " ", "i", "n", "c", "."], 
		["a", "m", "e", "r", "i", "c", "a", "n", " ", "h", "i", "s", "t", "o", "r", "y", " ", "x"], 
		["t", "h", "e", " ", "s", "i", "l", "e", "n", "c", "e", " ", "o", "f", " ", "t", "h", "e", " ", "l", "a", "m", "b", "s"], 
		["u", "p"], 
		["g", "l", "a", "d", "i", "a", "t", "o", "r"], 
		["s", "t", "a", "r", " ", "w", "a", "r", "s"]
		];

	var computerChoices = [
		["t", "h", "e", " ", "p", "r", "i", "n", "c", "e", "s", "s", " ", "b", "r", "i", "d", "e"],
		["p", "a", "n", "'", "s", " ", "l", "a", "b", "y", "r", "i", "n", "t", "h"], 
		["f", "i", "n", "d", "i", "n", "g", " ", "n", "e", "m", "o"], 
		["t", "h", "e", " ", "s", "h", "a", "w", "s", "h", "a", "n", "k", " ", "r", "e", "d", "e", "m", "p", "t", "i", "o", "n"], 
		["t", "h", "e", " ", "g", "o", "d", "f", "a", "t", "h", "e", "r"], 
		["t", "h", "e", " ", "l", "o", "r", "d", " ", "o", "f", " ", "t", "h", "e", " ", "r", "i", "n", "g", "s"], 
		["p", "r", "o", "m", "e", "t", "h", "e", "u", "s"], 
		["p", "u", "l", "p", " ", "f", "i", "c", "t", "i", "o", "n"], 
		["f", "o", "r", "r", "e", "s", "t", " ", "g", "u", "m", "p"], 
		["m", "o", "n", "s", "t", "e", "r", "'", "s", " ", "i", "n", "c", "."], 
		["a", "m", "e", "r", "i", "c", "a", "n", " ", "h", "i", "s", "t", "o", "r", "y", " ", "x"], 
		["t", "h", "e", " ", "s", "i", "l", "e", "n", "c", "e", " ", "o", "f", " ", "t", "h", "e", " ", "l", "a", "m", "b", "s"], 
		["u", "p"], 
		["g", "l", "a", "d", "i", "a", "t", "o", "r"], 
		["s", "t", "a", "r", " ", "w", "a", "r", "s"]
		];
		// array.split check new array vs userinput

	var incorrectGuesses = []

	var computerPlay = computerChoices [Math.floor(Math.random() * computerChoices.length)];


	for (var i = 0; i < computerPlay.length; i++) {
		if ((computerPlay[i] >= "a" && computerPlay[i] <= "z")

			) { 
			computerPlay[i] = "_";
		}
		// additional vars saving wordChosen
		
		else { (computerPlay[i] = computerPlay[i]); 

		}

		
	}

	document.querySelector("#goodLetters").innerHTML = computerPlay.join("");

	document.onkeyup = function(event) {

		var userGuess = event.key;

		incorrectGuesses.push(userGuess);
		
		
		if (userGuess >= "a" && userGuess <= "z") {

			guessesRemaining--; 

		}
			else { 
			alert("Please choose a letter from a-z!");	
			return;

		}
		document.querySelector("#badLetters").innerHTML = "Incorrectly Guessed Letters " + incorrectGuesses.join(", ");

		document.querySelector("#guesses").innerHTML = "Guesses Remaining = " + guessesRemaining;
		
		if (userGuess === computerPlay[i]) {


		}
	
	}
	
	// function arraymatch(userGuess, computerPlay) {
	// 	document.getElementByID("goodLetters").innerHTML = arraymatch(userGuess, computerPlay);
	
	// 	var arrmatch = []
	// 	for (j=0; j <= computerPlay.length; j++){
	// 		for (k=0; k <= userGuess.length; k++) {
	// 			if (userGuess[i] === computerPlay[i]) {
	// 				arrmatch.push(userGuess[i]);
	// 			}
	// 	return arrmatch;
	// 		}
		

	
}
startGame();
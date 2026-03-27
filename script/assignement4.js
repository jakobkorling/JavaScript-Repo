function guessNumberGame() {

    const random = Math.floor(Math.random() * 10) + 1;
    let guess = Number(prompt("Guess the correct number between 1 and 10"));

    while (guess !== random) {
        if (guess < random) {
            guess = Number(prompt("Try a higher number!"));
        } 
        else if (guess > random) {
            guess = Number(prompt("Try a lower number!"));
        }
    }

    alert("Well done! The correct answer is " + random + ". Refresh the page to play again.");
}

guessNumberGame();



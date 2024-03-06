function guessingGame() {
    let chosenNumber = Math.floor(Math.random() * 100);
    isOver = false;
    let attempts = 0;
    //console.log(guess, number)

    return function compareGuesses(guess) {
        if (isOver) return "The game is over, you already won!";
        attempts++;

        if (guess === chosenNumber) {
            isOver = true;
            const guess = attempts === 1 ? "guess" : "guesses";
            return `You win! You found ${chosenNumber} in ${attempts} ${guess}.`;
        }

        if (chosenNumber > guess) {
            return `${guess} is too low!`;
        }

        if (chosenNumber < guess) {
            return `${guess} is too high!`;
        }
    }
}

module.exports = { guessingGame };

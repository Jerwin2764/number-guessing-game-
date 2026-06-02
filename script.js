let min = 1;
let max = 100;

let guess = Math.floor(Math.random() * 100) + 1;

let chances = 3;
let gameOver = false;

function updateGuess()
{
    document.getElementById("guess").innerHTML =
    "My Guess: " + guess;
}

function tooLow()
{
    if(gameOver) return;

    chances--;

    document.getElementById("chance").innerHTML =
    "Chances Left: " + chances;

    if(chances <= 0)
    {
        document.getElementById("result").innerHTML =
        "❌ Game Over";

        gameOver = true;
        return;
    }

    min = guess + 1;

    guess = Math.floor((min + max) / 2);

    updateGuess();
}

function tooHigh()
{
    if(gameOver) return;

    chances--;

    document.getElementById("chance").innerHTML =
    "Chances Left: " + chances;

    if(chances <= 0)
    {
        document.getElementById("result").innerHTML =
        "❌ Game Over";

        gameOver = true;
        return;
    }

    max = guess - 1;

    guess = Math.floor((min + max) / 2);

    updateGuess();
}

function correct()
{
    if(gameOver) return;

    document.getElementById("result").innerHTML =
    "🎉 Correct! I guessed your number.";

    gameOver = true;
}

function restartGame()
{
    min = 1;
    max = 100;

    guess = Math.floor(Math.random() * 100) + 1;

    chances = 3;
    gameOver = false;

    updateGuess();

    document.getElementById("chance").innerHTML =
    "Chances Left: 3";

    document.getElementById("result").innerHTML =
    "";
}

updateGuess();
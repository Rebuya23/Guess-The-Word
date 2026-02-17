document.addEventListener("DOMContentLoaded", function () {

    // ARRAY of flags (South East Asia)
    const flags = [
        { country: "philippines", img: "https://flagcdn.com/w320/ph.png" },
        { country: "thailand", img: "https://flagcdn.com/w320/th.png" },
        { country: "vietnam", img: "https://flagcdn.com/w320/vn.png" },
        { country: "indonesia", img: "https://flagcdn.com/w320/id.png" },
        { country: "malaysia", img: "https://flagcdn.com/w320/my.png" },
        { country: "singapore", img: "https://flagcdn.com/w320/sg.png" }
    ];

    let randomIndex = Math.floor(Math.random() * flags.length);
    let secretCountry = flags[randomIndex].country;

    let maxAttempts = 5;
    let attemptsLeft = maxAttempts;

    // DOM elements
    const flagImage = document.getElementById("flagImage");
    const input = document.getElementById("guessInput");
    const message = document.getElementById("message");
    const attemptsDisplay = document.getElementById("attempts");
    const submitBtn = document.getElementById("submitBtn");
    const restartBtn = document.getElementById("restartBtn");

    // Show flag
    flagImage.src = flags[randomIndex].img;
    console.log("Answer:", secretCountry); // for testing

    submitBtn.addEventListener("click", function () {

        let userGuess = input.value.trim().toLowerCase();

        if (attemptsLeft > 0) {

            if (userGuess === secretCountry) {
                message.textContent = "🎉 Correct! You guessed the country!";
                document.body.style.backgroundColor = "#b6fcb6";
                attemptsLeft = 0;
            } else {
                attemptsLeft--;
                attemptsDisplay.textContent = attemptsLeft;

                if (attemptsLeft > 0) {
                    message.textContent = "❌ Wrong answer. Try again!";
                } else {
                    message.textContent =
                        "💀 Game over! The correct answer was " +
                        secretCountry.toUpperCase();
                    document.body.style.backgroundColor = "#ffb3b3";
                }
            }
        }

        input.value = "";
    });

    restartBtn.addEventListener("click", function () {

        randomIndex = Math.floor(Math.random() * flags.length);
        secretCountry = flags[randomIndex].country;

        flagImage.src = flags[randomIndex].img;
        attemptsLeft = maxAttempts;
        attemptsDisplay.textContent = attemptsLeft;
        message.textContent = "";
        document.body.style.backgroundColor = "#f4f4f4";

        console.log("New Answer:", secretCountry);
    });

});

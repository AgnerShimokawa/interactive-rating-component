let ratedScore = document.querySelectorAll(".rating-score");
let submitButton = document.querySelector(".submit-button");
let thankYouCard = document.querySelector(".thank-you-card");
let rateGiven = document.querySelector(".rate-given");

submitButton.addEventListener("click", () => {
    let selectedScore = document.getElementById("selected");
    if(selectedScore == null) {
        document.querySelector(".alert-message").classList.remove("hidden")
    } else {
        thankYouCard.classList.remove("hidden");
        rateGiven.innerHTML = selectedScore.innerHTML;
    }
})



let ratingScore = document.querySelectorAll(".rating-score");


for (let score = 0; score < ratingScore.length; score++) {
    ratingScore[score].addEventListener("click", () => {
        if (ratingScore[score].id === "selected") {
            ratingScore[score].removeAttribute('id');
        } else {
            for (let selectedScore = 0; selectedScore < ratingScore.length; selectedScore++) {
                if (ratingScore[selectedScore].id === "selected") {
                    ratingScore[selectedScore].removeAttribute('id');
                }
                ratingScore[score].id = "selected";
            }
        }
    })
}

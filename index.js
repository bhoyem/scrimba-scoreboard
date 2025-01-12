let homeScoreDisplay = document.getElementById("home-score");
let homeScore = Number(homeScoreDisplay.textContent);
let guestScoreDisplay = document.getElementById("guest-score");
let guestScore = Number(guestScoreDisplay.textContent);

const addToScore = function (team, points) {
    console.log(team, points);
    console.log(homeScore, guestScore);
    if (team == "home") {
        homeScore += points;
        homeScoreDisplay.textContent = homeScore;
        console.log(homeScore, guestScore);
    }
    else if (team == "guest") {
        guestScore += points
        guestScoreDisplay.textContent = guestScore;
        console.log(homeScore, guestScore);
    };
    return;
};
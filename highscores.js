




$(document).ready(function(){
    var userScores = JSON.parse
    (localStorage.getItem("highscores"))

    var scoresArea = $("#userScoresArea")

    for (let index = 0; index < userScores.length; index++) {
        const element = userScores[index];
        scoresArea.append(
            `<p>${element.user} : ${element.score}`
        )
    }
})
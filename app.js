var quizData = {
  "score":0
}
function startQuiz() {
if(!localStorage.getItem("highscores")){
localStorage.setItem("highscores", JSON.stringify([])) 
}
  
// Use jQuery to build the quiz from the questions array

// target the quiz area so that we can add stuff to it
var quizArea = $("#quiz-area");

// Add in our questions html code
// Use a for loop through the questions array and build HTML 'dynamically'

for (let i = 0; i < questions.length; i++) {
  var questionObject = questions[i];

  quizArea.append(
    `
    <div class="question">
    <!-- Question -->
    <h3>${questions[i]['title']}</h3>
  
    <!-- Answers -->
    <ul class="list-group">
      <button class="list-group-item choice-btn" value="${i}">${questions[i]['choices'][0]}</button>
      <button class="list-group-item choice-btn" value="${i}">${questions[i]['choices'][1]}</button>
      <button class="list-group-item choice-btn" value="${i}">${questions[i]['choices'][2]}</button>
      <button class="list-group-item choice-btn" value="${i}">${questions[i]['choices'][3]}</button>
    </ul>
  </div>
    `
  );
  }
  quizArea.append(`<button class="list-group-item" onclick="submitQuiz()">Submit</button>`)
  // Create a click function handler that will basically check the answer of each question
// with the text of whatever button you clicked.
$('.choice-btn').click(function() {
  console.log('Button has been clicked!');
  console.log($(this).text());
  console.log($(this).attr("value"));

  var currentChoice = $(this).text();
  var currentQuestionNumber = $(this).attr("value")

  // check to see if the current text matches the answer text for their respective question number

  if (currentChoice == questions[currentQuestionNumber]['answer']) {
  //  alert('Correct Choice!');
  quizData.score += 1
  } else {
  quizData.score -= 1
  //  alert('Wrong Choice');
  }
  $(this).parent().parent().hide()
});
}
function submitQuiz() {
  var user = prompt("Enter your initials")
  quizData.user = user
  var highscores = JSON.parse(localStorage.getItem("highscores"))
  highscores.push(quizData)
  localStorage.setItem("highscores", JSON.stringify(highscores)) 
}
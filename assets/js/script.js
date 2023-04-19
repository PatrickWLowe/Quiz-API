var questions = [
  {
    title: 'Commonly used data types DO NOT include:',
    choices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts',
  },
  {
    title: 'The condition in an if / else statement is enclosed within ____.',
    choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
    answer: 'parentheses',
  },
  {
    title: 'Arrays in JavaScript can be used to store ____.',
    choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above',],
    answer: 'all of the above',
  },
  {
    title: 'String values must be enclosed within ____ when being assigned to variables.',
    choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
    answer: 'quotes',
  },
  {
    title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
    answer: 'console.log',
  },
];

var start = document.querySelector(".start-div");
var startquiz = document.querySelector("#press-start");
var timer = document.querySelector("#timer");
var QOAbox = document.querySelector("#QOA");
var qholder = document.querySelector("#Q-holder");
var bigbox = document.querySelector("#bigbox");
var OptA = document.querySelector("#OptA");
var OptB = document.querySelector("#OptB");
var OptC = document.querySelector("#OptC");
var OptD = document.querySelector("#OptD");
var rightorwrong = document.querySelector("#rightorwrong");
var highscorebtn = document.querySelector("#highscore-button");
var multichoice = document.querySelector("#Possibleanswers");
var answer = document.querySelector("#answer");
var submit = document.querySelector("#submit");
var initialsform = document.querySelector("#initials-form");
var inputinitials = document.querySelector("#inputintials");
var highscorelist = document.querySelector("#highscoreslist");
var Goback = document.querySelector("#Goback");
var Clear = document.querySelector("#Clear");
var timeremaining = questions.length * 15;
var qs = 0;
var sec = 0;
var score = 0;
var scoreList = [];
var timeInterval;

showScore();

function runtimer() {
  timeInterval = setInterval(function () {
    timeremaining--;
    timer.textContent = "Time remaining: " + timeremaining;

    if (timeremaining === 0 || qs >= questions.length) {
      clearInterval(timeInterval);
      gameOver();
    }
  }, 1000);
}

function showQandA() {
  if (qs < questions.length) {
    qholder.textContent = questions[qs].title;
    OptA.textContent = questions[qs].choices[0];
    OptB.textContent = questions[qs].choices[1];
    OptC.textContent = questions[qs].choices[2];
    OptD.textContent = questions[qs].choices[3];
  } else {
    gameOver();
  }
}

function compareAnswer(event) {
  if (qs >= questions.length) {
    gameOver();
    clearInterval(timeInterval);
  } else {
    if (event === questions[qs].answer) {
      rightorwrong.textContent = "Correct";
    } else {
      timeremaining -= 10;
      rightorwrong.textContent = "Incorrect";
    }
    score = timeremaining;
    qs++;
    showQandA();
  }
}

function showScore() {
  var storedScore = JSON.parse(localStorage.getItem("Scoretotal"));
  if (storedScore !== null) {
    scoreList = storedScore;
  }
}

function saveScore() {
  localStorage.setItem("Scoretotal", JSON.stringify(scoreList));
}

function gameOver() {
  totalscore.innerHTML = score;
  totalscore.style.display = "inline-block";
  bigbox.classList.add("hide");
  initialsform.classList.remove("hide");
  timer.classList.add("hide");
  highscorebtn.classList.add("hide");
  highscoreboard();
}

function highscoreboard() {
  removeFromhighscoreboard();
  addTohighscoreboard();
  scoreList.sort((a, b) => {
    return b.score - a.score;
  });
 
  topTen = scoreList.slice(0, 10);

  for (var i = 0; i < topTen.length; i++) {
    var player = topTen[i].player;
    var score = topTen[i].score;

    var newDiv = document.createElement("div");
    listDiv.appendChild(newDiv);

    var newLabel = document.createElement("label");
    newLabel.textContent = player + " - " + score;
    newDiv.appendChild(newLabel);
  }
}

function addTohighscoreboard() {
  listDiv = document.createElement("div");
  listDiv.setAttribute("id", "playerInitials");
  document.getElementById("list").appendChild(listDiv);
}

function removeFromhighscoreboard() {
  var removeScores = document.getElementById("playerInitials");
  if (removeScores !== null) {
    removeScores.remove();
  } else {
  }
}

startquiz.addEventListener("click", function (event) {
  runtimer();
  showQandA();
  start.classList.add("hide");
  bigbox.classList.remove("hide");
  highscorebtn.style.display = "none";
  highscorelist.classList.add("hide");
});

 qholder.addEventListener("click", function (event) {
 var event = event.target;
 compareAnswer(event.textContent.trim());
});

OptA.addEventListener("click", function (event) {
  var event = event.target;
  compareAnswer(event.textContent.trim());
});
OptB.addEventListener("click", function (event) {
  var event = event.target;
  compareAnswer(event.textContent.trim());
});
OptC.addEventListener("click", function (event) {
  var event = event.target;
  compareAnswer(event.textContent.trim());
});
OptD.addEventListener("click", function (event) {
  var event = event.target;
  compareAnswer(event.textContent.trim());
});


submit.addEventListener("click", function (event) {
  event.preventDefault();
  var playerInitials = inputinitials.value.trim();
  var newScore = {
    player: playerInitials,
    score: score,
  };

  scoreList.push(newScore);
  saveScore();
  highscoreboard();
  initialsform.classList.add("hide");
  highscorelist.classList.remove("hide");
});

highscorebtn.addEventListener("click", function (event) {
  highscorelist.classList.remove("hide");
  highscorebtn.classList.add("hide");
  start.classList.add("hide");
  highscoreboard();
});

Goback.addEventListener("click", function (event) {
  location.reload();
});

Clear.addEventListener("click", function (event) {
  scoreList = [];
  start.classList.add("hide");
  localStorage.setItem("Scoretotal", JSON.stringify(scoreList));
  highscoreboard();
  saveScore();
});

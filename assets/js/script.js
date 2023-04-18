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
var timer = document.querySelector(".timer");
var QOAbox = document.querySelector("#QOA");
var qholder = document.querySelector("#Q-holder");
var OptA = document.querySelector("#OptA");
var OptB = document.querySelector("#OptB");
var OptC = document.querySelector("#OptC");
var OptD = document.querySelector("#OptD");
var highscorebtn = document.querySelector("#highscore-button");
var multichoice = document.querySelector("#Possibleanswers");
var answer = document.querySelector("#answer");
var initialsform = document.querySelector("#initials-form");
var inputinitials = document.querySelector("#inputinitials");
var highscorelist = document.querySelector("#highscoreslist");
var Goback = document.querySelector("#Goback");
var Clear = document.querySelector("#Clear");
var timeremaining = questions.length * 15;
var qs = 0;
var sec = 0;
var score = 0;
var scoreList = [];
var timeInterval;
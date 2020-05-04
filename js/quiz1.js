var questions = [{
    "question": 'What output will be displayed in the alert box after the following code is run?<span class="small"><pre>&ltscript&gt <br>&nbsp;&nbsp;var x=103; <br>&nbsp;&nbsp;var y=9;<br>&nbsp;&nbsp;alert(x%=y); <br>&lt/script&gt</pre></span>',
    "option1": "56",
    "option2": "11",
    "option3": "5",
    "option4": "Error output",
    "answer" : "1",
    "correct" : '<b style="color: green">Correct:</b> Well done',
    "incorrect" : '<b style="color: red">Incorrect:</b> The correct answer is 56.'
}, {
    "question": "Which of the following syntax for creating a RegExp object is correct?<br><br><code>(i) var txt=new RegExp(pattern,attributes);<br>(ii) var txt=/pattern/attributes;</code>",
    "option1": "(i) only",
    "option2": "(ii) only",
    "option3": "Both (i) and (ii)",
    "option4": "None of the above",
    "answer" : "3",
    "correct" : '<b style="color: green">Correct:</b> Well done',
    "incorrect" : '<b style="color: red">Incorrect:</b> The correct answer is "Both (i) and (ii)".'
},{
    "question": 'What output will be displayed in the alert box after the following code is run?<br><img src="images/q2-3.png" class="script-image"/>',
    "option1": "Error",
    "option2": "2",
    "option3": "3",
    "option4": "4",
    "answer" : "2",
    "correct" : '<b style="color: green">Correct:</b> Well done',
    "incorrect" : '<b style="color: red">Incorrect:</b> The correct answer is 2.'
},{
    "question": "What is meant by \"this\" keyword in javascript?",
    "option1": " It refers current object",
    "option2": " It refers previous object",
    "option3": " It is variable which contains value",
    "option4": " None of the above",
    "answer" : "1",
    "correct" : '<b style="color: green">Correct:</b> Well done',
    "incorrect" : '<b style="color: red">Incorrect:</b> The correct answer is "It refers current object".'
},{
    "question": "Is the type attribute required on a script tag in html5?",
    "option1": "Yes",
    "option2": "No",
    "option3": "hidden",
    "option4": "hidden",
    "answer" : "2",
    "correct" : '<b style="color: green">Correct:</b> Well done',
    "incorrect" : '<b style="color: red">Incorrect:</b> The correct answer is "No".'
},
{
    "question": 'The following code results in which output being displayed in the console window?<br><img src="images/q2-6.png" class="script-image"/>',
    "option1": "20",
    "option2": "-21",
    "option3": "19",
    "option4": "None of the above",
    "answer" : "2",
    "correct" : '<b style="color: green">Correct:</b> Well done',
    "incorrect" : '<b style="color: red">Incorrect:</b> The correct answer is "-21".'
},
{
    "question": 'What is the result of running the following code?<br><img src="images/q2-7.png" class="script-image"/>',
    "option1": "%,!,{,[,!,!",
    "option2": "E,x,a,m,p,l,e,s,t,r,i,n,g,m,a,t,c,h,i,n,g,1,0,0",
    "option3": "Example 100",
    "option4": "Error",
    "answer" : "2",
    "correct" : '<b style="color: green">Correct:</b> Well done',
    "incorrect" : '<b style="color: red">Incorrect:</b> The correct answer is "E,x,a,m,p,l,e,s,t,r,i,n,g,m,a,t,c,h,i,n,g,1,0,0".'
},
{
    "question": "What is displayed on screen when the following code is run?",
    "option1": "Error",
    "option2": "Web Development Technologies",
    "option3": "Web",
    "option4": "Web Development Technologies, Application Development, Testing, Interactive Interfaces",
    "answer" : "2",
    "correct" : '<b style="color: green">Correct:</b> Well done',
    "incorrect" : '<b style="color: red">Incorrect:</b> The correct answer is "Web Development Technologies".'
}, 
{
    "question": 'What is displayed on screen when the following code is run?<br><img src="images/q2-9.png" class="script-image"/>',
    "option1": "258",
    "option2": "Error",
    "option3": "7",
    "option4": "78",
    "answer" : "4",
    "correct" : '<b style="color: green">Correct:</b> Well done',
    "incorrect" : '<b style="color: red">Incorrect:</b> The correct answer is "78".'
}, 
{
    "question": 'What would be displayed in the alert box if the following code is run?<br><img src="images/q2-10.png" class="script-image"/>',
    "option1": "19",
    "option2": "910",
    "option3": "None",
    "option4": "hidden",
    "answer" : "3",
    "correct" : '<b style="color: green">Correct:</b> Well done',
    "incorrect" : '<b style="color: red">Incorrect:</b> The correct answer is "None".'
}];

var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var checkButton = document.getElementById('checkButton');
var nextButton = document.getElementById('nextButton');
var quiz2Button = document.getElementById('quiz2Button');
var scoreButton = document.getElementById('score');
var explanation = document.getElementById('explanation');

function loadQuestion (questionIndex) {

    enableRadios();
    showElement(checkButton);
    hideElement(nextButton);
    hideElement(explanation);

    scoreButton.textContent = 'Score: '+score;

	var q = questions[questionIndex];
	questionEl.innerHTML = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;

	if (q.option3 == "hidden")
    {    
        hideElement(document.getElementById('answer3'));
    }
    else{
        showElement(document.getElementById('answer3'));
        opt3.textContent = q.option3;
    }

    if (q.option4 == "hidden")
    {    
        hideElement(document.getElementById('answer4'));
    }
    else{
        showElement(document.getElementById('answer4'));
        opt4.textContent = q.option4;
    }
};

function hideElement(element){
    element.style.display = 'none';
}

function showElement(element){
    element.style.display = '';
}

function checkQuestion () {

	var selectedOption = document.querySelector('input[type=radio]:checked');
    
    if(!selectedOption){
		alert('Please select your answer!');
		return;
    }

    disableRadios();

    var answer = selectedOption.value;
    
	if(questions[currentQuestion].answer == answer){
        explanation.innerHTML = questions[currentQuestion].correct;    
        score += 10;
    }
    else{
        explanation.innerHTML = questions[currentQuestion].incorrect;
    }

    hideElement(checkButton);
    showElement(explanation);
    showElement(nextButton);
}

function nextQuestion (){
    currentQuestion++;   
    if(currentQuestion == totQuestions - 1){
            nextButton.textContent = 'Finish';
    }

    if(currentQuestion == totQuestions){
        showElement(quiz2Button);
        hideElement(nextButton);
        disableRadios();
    }
    else {
        loadQuestion(currentQuestion);
    }
}


function disableRadios(){
    var x = document.getElementsByClassName("radio");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].disabled = true;
    }
}

function enableRadios(){
    var x = document.getElementsByClassName("radio");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].disabled = false;
    }
}

loadQuestion(currentQuestion);
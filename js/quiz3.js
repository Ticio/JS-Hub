var currentQuestion = 1;

function nextQuiz()
{
    if (currentQuestion+1 <= 4)
        currentQuestion++;
    else 
        return;
        
    for (var i = 1; i < 5; ++i)
        if (i == currentQuestion)
            document.getElementById('form'+i).style.display = '';
        else
            document.getElementById('form'+i).style.display = 'none'; 
}

function prevQuiz()
{
    if (currentQuestion-1 >= 1)
        currentQuestion--;
    else 
        return;

    for (var i = 1; i < 5; ++i)
        if (i == currentQuestion)
            document.getElementById('form'+i).style.display = '';
        else
            document.getElementById('form'+i).style.display = 'none'; 
}

function checkAnswerForm2(){

    document.getElementById('checkButtonForm2').style.display = 'none';
    
    var answer = ["script", "function", "oriented", "sensitive", "capitalization"];
    var element;
    
    for(var i = 0; i < 5; ++i){

        element = document.getElementById('form2-input'+i);

        if( element.value == answer[i])
        {
            element.style.background = "rgb(7, 68, 4)";
        }
        else
            element.style.background = "#AF1212";

        element.style.color = "#fff";
        element.style.fontWeight = "bolder";
        element.disabled = true;
    }
}

function checkAnswerForm3(){
    
    document.getElementById('checkButtonForm3').style.display = 'none';
    
    var answer = ["<head> and <body>", '<script src="xxx.js">', "False", 'alert("Hello World");', "myFunction()", "onclick"];

    for(var i = 0; i <= 5; ++i){

        element = document.getElementById('list'+i);

        for(var j = 0; j < element.options.length; ++j)
            if (element.options[j].selected)
                if (element.options[j].text == answer[i])
                {
                    element.style.background = "rgb(7, 68, 4)";
                }
                else
                    element.style.background = "#AF1212";
        
        element.style.color = "#fff";
        element.style.fontWeight = "bold";
        element.disabled = true;
    }
}
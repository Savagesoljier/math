player1name = localStorage.getItem("p1math");
player2name = localStorage.getItem("p2math");

player1score = 0;
player2score = 0;

document.getElementById("player1_name").innerHTML = player1name + " : ";
document.getElementById("player2_name").innerHTML = player2name + " : ";

document.getElementById("player1_score").innerHTML = player1score;
document.getElementById("player2_score").innerHTML = player2score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}


questionturn = "player1";
answerturn = "player2";

function check() {
    getanswer = document.getElementById("input_check_box").value;
    if (getanswer == actual_answer) {
        if (answerturn == "player1") {
            player1score = player1score + 1;
            document.getElementById("player1_score").innerHTML = player1score;
        }
        else {
            player2score = player2score + 1;
            document.getElementById("player2_score").innerHTML = player2score;
        }
    }
    if (questionturn == "player1") {
        questionturn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2name;
    }
    else {
        questionturn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1name;
    }
    if (answerturn == "player1") {
        answerturn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name;
    }
    else {
        answerturn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1name;
    }
    document.getElementById("output").innerHTML = "";
}

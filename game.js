player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("Player1").innerHTML=player1_name;
document.getElementById("player1_score").innerHTML=player1_score;

document.getElementById("Player2").innerHTML=player2_name;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn : "+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn : "+player2_name;

function send(){
num1=document.getElementById("number_1_input").value;
num2=document.getElementById("number_2_input").value;

act_ans=parseInt(num1)*parseInt(num2);

Q_tag="<h4>What is "+num1+" X "+num2+"?</h4>";
A_tag="<br>Answer:<input type='number' id='inputCHECK'>";
B_tag="<br><br><button class='btn btn-primary' onclick='check()'>Check</button>";
document.getElementById("output").innerHTML=Q_tag+A_tag+B_tag;
document.getElementById("number_1_input").value="";
document.getElementById("number_2_input").value="";
}
question_turn = "player1";
answer_turn = "player2";

function check()
    {
        get_answer = document.getElementById("inputCHECK").value;
        if(get_answer == act_ans)	
        {
            if(answer_turn == "player1")
            {
                player1_score = player1_score +1;
                document.getElementById("player1_score").innerHTML = player1_score;
            }
            else 
            {
                player2_score = player2_score +1;
                document.getElementById("player2_score").innerHTML = player2_score;
            }
        }
        
        if(question_turn == "player1")
        {
            question_turn = "player2"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
        }
        else 
        {
            question_turn = "player1"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
        }
    
        if(answer_turn == "player1")
        {
            answer_turn = "player2"
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
        }
        else 
        {
            answer_turn = "player1"
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ;
        }
    
        document.getElementById("output").innerHTML=""}

    
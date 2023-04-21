function addUser() {
    player1= document.getElementById("Player1_name_input").value;
    player2= document.getElementById("Player2_name_input").value;

    localStorage.setItem("player1_name",player1);
    localStorage.setItem("player2_name",player2);

    window.location="game.html";

}
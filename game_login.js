function addUser() {
    player1name = document.getElementById("player1NameInput").value;
    player2name = document.getElementById("player2NameInput").value;
    localStorage.setItem("p1math", player1name);
    localStorage.setItem("p2math", player2name);
    window.location = "game_page.html";
}




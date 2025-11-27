console.log("Hello, World!");
console.log("eu estou aprendendo a programar.");
window.alert("Bem-vindo ao meu web site :)");

// isso é um comentário, ele é ser verde significa que é um comentário
// eu não faço a min ideia do que estou fazendo :D

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playgame (playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];
let result = "";
if(playerChoice === computerChoice){
result = "IT'S A TIE!";

}
else{
    switch(playerChoice){
        case "rock":
          result =  (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
          break; 

          case "paper":
          result =  (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
          break;

          case "scissors":
          result =  (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
          break;
    }
}
playerDisplay.innerHTML = `Player: ${playerChoice}`;
computerDisplay.textContent = `computer: ${computerChoice}`;
resultDisplay.textContent = result;

switch(result){
    case "YOU WIN!":
        resultDisplay.classList.add("greenText");
        break;

        case "YOU LOSE!":
        resultDisplay.classList.add("redText");
        break;
        
}
}
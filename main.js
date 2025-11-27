console.log("Hello, World!");
console.log("eu estou aprendendo a programar.");
window.alert("Bem-vindo ao meu web site :)");

// isso é um comentário, ele é ser verde significa que é um comentário
// eu não faço a min ideia do que estou fazendo :D

// Selecionando os elementos do HTML pelo ID
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playgame(playerChoice) {

    // 1. O computador escolhe aleatoriamente
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    // 2. Lógica do jogo (Quem ganhou?)
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;

            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;

            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    // 3. Atualiza o texto na tela
    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    // 4. LIMPEZA DE CORES (Muito Importante!) 🧹
    // Removemos qualquer cor que estava lá antes para não misturar
    resultDisplay.classList.remove("greenText", "redText");

    // 5. Adiciona a cor nova baseada no resultado
    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            break;

        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            break;
    }
}

let posicao = 0;
let jogador = "X";
let vencedor = null;

let tabuleiro = ["?", "?", "?",
    "?", "?", "?",
    "?", "?", "?"]

while (vencedor == null) {

    console.log("| COORDENADAS | TABULEIRO\n|  [0][1][2]  |   "
        + tabuleiro[0] + " " + tabuleiro[1] + " " + tabuleiro[2] +
        "\n" + "|  [3][4][5]  |   " + tabuleiro[3] + " " + tabuleiro[4] + " " + tabuleiro[5] +
        "\n" + "|  [6][7][8]  |   " + tabuleiro[6] + " " + tabuleiro[7] + " " + tabuleiro[8] +
        "\n|_____________|\n");
    posicao = parseInt(prompt("Jogador " + jogador + " faça a sua jogada: "));

    if (posicao > 8 || posicao < 0) {
        console.log("Posição Inexistente, digite novamente");
        continue
    }
    if (tabuleiro[posicao] !== "?") {
        console.log("Posicao Ocupada, digite novamente")
    }
    console.log(posicao)
    tabuleiro[posicao] = jogador;

    if (
        (tabuleiro[0] === "X" && tabuleiro[1] === "X" && tabuleiro[2] === "X") ||
        (tabuleiro[3] === "X" && tabuleiro[4] === "X" && tabuleiro[5] === "X") ||
        (tabuleiro[6] === "X" && tabuleiro[7] === "X" && tabuleiro[8] === "X") ||
        (tabuleiro[0] === "X" && tabuleiro[3] === "X" && tabuleiro[6] === "X") ||
        (tabuleiro[1] === "X" && tabuleiro[4] === "X" && tabuleiro[7] === "X") ||
        (tabuleiro[2] === "X" && tabuleiro[5] === "X" && tabuleiro[8] === "X") ||
        (tabuleiro[0] === "X" && tabuleiro[4] === "X" && tabuleiro[8] === "X") ||
        (tabuleiro[2] === "X" && tabuleiro[4] === "X" && tabuleiro[6] === "X")) {
        console.log("| COORDENADAS | TABULEIRO\n|  [0][1][2]  |   "
            + tabuleiro[0] + " " + tabuleiro[1] + " " + tabuleiro[2] +
            "\n" + "|  [3][4][5]  |   " + tabuleiro[3] + " " + tabuleiro[4] + " " + tabuleiro[5] +
            "\n" + "|  [6][7][8]  |   " + tabuleiro[6] + " " + tabuleiro[7] + " " + tabuleiro[8] +
            "\n|_____________|\n");
        console.log("Parabéns Jogador X, você ganhou!")
        vencedor = "X";
    }
    if (
        (tabuleiro[0] == "O" && tabuleiro[1] == "O" && tabuleiro[2] == "O") ||
        (tabuleiro[3] == "O" && tabuleiro[4] == "O" && tabuleiro[5] == "O") ||
        (tabuleiro[6] == "O" && tabuleiro[7] == "O" && tabuleiro[8] == "O") ||
        (tabuleiro[0] == "O" && tabuleiro[3] == "O" && tabuleiro[6] == "O") ||
        (tabuleiro[1] == "O" && tabuleiro[4] == "O" && tabuleiro[7] == "O") ||
        (tabuleiro[2] == "O" && tabuleiro[5] == "O" && tabuleiro[8] == "O") ||
        (tabuleiro[0] == "O" && tabuleiro[4] == "O" && tabuleiro[8] == "O") ||
        (tabuleiro[2] == "O" && tabuleiro[4] == "O" && tabuleiro[6] == "O")) {
        console.log("| COORDENADAS | TABULEIRO\n|  [0][1][2]  |   "
            + tabuleiro[0] + " " + tabuleiro[1] + " " + tabuleiro[2] +
            "\n" + "|  [3][4][5]  |   " + tabuleiro[3] + " " + tabuleiro[4] + " " + tabuleiro[5] +
            "\n" + "|  [6][7][8]  |   " + tabuleiro[6] + " " + tabuleiro[7] + " " + tabuleiro[8] +
            "\n|_____________|\n");
        console.log("Parabéns Jogador 0, você ganhou!")
        vencedor = "O";
    }
    if (jogador === "X") {
        jogador = "O";
    } else {
        jogador = "X";
    }
}


function mostrarTabuleiro(tabuleiro) {
    return tabuleiro = console.log("| COORDENADAS | TABULEIRO\n|  [0][1][2]  |   "
        + tabuleiro[0] + " " + tabuleiro[1] + " " + tabuleiro[2] +
        "\n" + "|  [3][4][5]  |   " + tabuleiro[3] + " " + tabuleiro[4] + " " + tabuleiro[5] +
        "\n" + "|  [6][7][8]  |   " + tabuleiro[6] + " " + tabuleiro[7] + " " + tabuleiro[8] +
        "\n|_____________|\n");
}
function validaPosicao(posicao, tabuleiro) {
    if (posicao > 8 || posicao < 0) {
        console.log("Posição Inexistente, digite novamente");
        return false;
    }
    if (tabuleiro[posicao] !== "?") {
        console.log("Posicao Ocupada, digite novamente");
        return false;
    }
    return true;
}
function validaVitoria(tabuleiro, jogador) {
    return (tabuleiro[0] == jogador && tabuleiro[1] == jogador && tabuleiro[2] == jogador) ||
        (tabuleiro[3] == jogador && tabuleiro[4] == jogador && tabuleiro[5] == jogador) ||
        (tabuleiro[6] == jogador && tabuleiro[7] == jogador && tabuleiro[8] == jogador) ||
        (tabuleiro[0] == jogador && tabuleiro[3] == jogador && tabuleiro[6] == jogador) ||
        (tabuleiro[1] == jogador && tabuleiro[4] == jogador && tabuleiro[7] == jogador) ||
        (tabuleiro[2] == jogador && tabuleiro[5] == jogador && tabuleiro[8] == jogador) ||
        (tabuleiro[0] == jogador && tabuleiro[4] == jogador && tabuleiro[8] == jogador) ||
        (tabuleiro[2] == jogador && tabuleiro[4] == jogador && tabuleiro[6] == jogador);
}
module.exports = { mostrarTabuleiro, validaPosicao, validaVitoria }
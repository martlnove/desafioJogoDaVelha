const prompt = require("prompt-sync")();
const mT = require('./Funcoes');
const vP = require('./Funcoes');
const vV = require('./Funcoes');
let posicao = 0;
let jogador = "X";
let vencedor = null;
let tabuleiro = ["?", "?", "?", "?", "?", "?", "?", "?", "?"]

while (vencedor == null) {
    console.log(mT.mostrarTabuleiro(tabuleiro));
    posicao = parseInt(prompt("Jogador " + jogador + " faça a sua jogada: "));
    if (!vP.validaPosicao(posicao, tabuleiro)) {
        continue;
    }
    tabuleiro[posicao] = jogador;
    if (vV.validaVitoria(tabuleiro, "X")) {
        console.log(mT.mostrarTabuleiro(tabuleiro));
        console.log("Parabéns Jogador X, você ganhou!")
        vencedor = "X";
    }
    if (vV.validaVitoria(tabuleiro, "O")) {
        console.log(mT.mostrarTabuleiro(tabuleiro));
        console.log("Parabéns Jogador O, você ganhou!")
        vencedor = "O";
    }
    if (jogador === "X") {
        jogador = "O";
    } else {
        jogador = "X";
    }
}
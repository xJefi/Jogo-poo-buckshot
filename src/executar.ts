import { Arma } from "./arma";
import { Inimigo } from "./inimigo";
import { Jogador } from "./jogador";
import { Jogo } from "./jogo";

const jogador = new Jogador("Você", 3);
const inimigo = new Inimigo("Dealer", 3);
const arma = new Arma(0.4);

const jogo = new Jogo(jogador, inimigo, arma, 1, 10_000);
jogo.iniciar();

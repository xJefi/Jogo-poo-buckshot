"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogo = void 0;
var Jogo = /** @class */ (function () {
    function Jogo(jogador, inimigo, arma, rodada, recompensa) {
        this._jogador = jogador;
        this._inimigo = inimigo;
        this._arma = arma;
        this._rodada = rodada;
        this._recompensa = recompensa;
    }
    Object.defineProperty(Jogo.prototype, "jogador", {
        get: function () {
            return this._jogador;
        },
        set: function (value) {
            this._jogador = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jogo.prototype, "inimigo", {
        get: function () {
            return this._inimigo;
        },
        set: function (value) {
            this._inimigo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jogo.prototype, "arma", {
        get: function () {
            return this._arma;
        },
        set: function (value) {
            this._arma = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jogo.prototype, "rodada", {
        get: function () {
            return this._rodada;
        },
        set: function (value) {
            this._rodada = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jogo.prototype, "recompensa", {
        get: function () {
            return this._recompensa;
        },
        set: function (value) {
            this._recompensa = value;
        },
        enumerable: false,
        configurable: true
    });
    Jogo.prototype.mostrarStatus = function () {
        console.log("\n----------STATUS----------");
        console.log("".concat(this.inimigo.nome, " - Vida: ").concat(this.inimigo.vida));
        console.log("".concat(this.jogador.nome, " - Vida: ").concat(this.jogador.vida));
        console.log("--------------------------\n");
    };
    Jogo.prototype.iniciar = function () {
        var turnoJogador = true;
        console.log("\n================ ROLETA RUSSA ================");
        while (this.jogador.vida > 0 && this.inimigo.vida > 0) {
            var disparo = this.arma.atirar();
            if (turnoJogador) {
                console.log("\nRodada ".concat(this.rodada));
                console.log("Recompensa Atual: R$ ".concat(this.recompensa));
                console.log("\n-----Turno do Jogador-----");
                this.jogador.agir(); //método reescrito
                if (disparo) {
                    this.jogador.receberDano(); //método chamado quando a bala é verdadeira
                }
                else {
                    this.balaFalsa(); //método chamado quando o disparo falha
                }
                this.mostrarStatus();
            }
            else {
                console.log("\n-----Turno do Inimigo-----");
                this.inimigo.agir();
                if (disparo) {
                    this.inimigo.receberDano();
                }
                else {
                    this.balaFalsa();
                }
                this.mostrarStatus();
            }
            turnoJogador = !turnoJogador; // troca o turno
            if (turnoJogador) {
                this.rodada++;
                this.recompensa *= 2;
            }
        }
        this.mensagemFinal(); //Mensagem final quando o loop termina
    };
    Jogo.prototype.balaFalsa = function () {
        console.log("--> Mas nada aconteceu");
    };
    Jogo.prototype.mensagemFinal = function () {
        console.log("\n=====FIM DE JOGO=====");
        if (this.jogador.vida > 0) {
            console.log("Parabéns!!! Você venceu!");
            console.log("Voc\u00EA sobreviveu por ".concat(this.rodada, " rodadas e faturou R$ ").concat(this.recompensa, "!"));
        }
        else {
            console.log("Você morreu.");
            console.log("Voc\u00EA puxou o gatilho ".concat(this.rodada, " vezes e acumulou a recompensa em R$ ").concat(this.recompensa, " antes de morrer!"));
            console.log("A BANCA FICOU COM TUDO!\n");
        }
    };
    return Jogo;
}());
exports.Jogo = Jogo;

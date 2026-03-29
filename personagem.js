"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
var Personagem = /** @class */ (function () {
    function Personagem(nome, vida) {
        this._nome = nome;
        this._vida = vida;
    }
    Object.defineProperty(Personagem.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (value) {
            this._nome = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "vida", {
        get: function () {
            return this._vida;
        },
        set: function (value) {
            this._vida = value;
        },
        enumerable: false,
        configurable: true
    });
    Personagem.prototype.receberDano = function (dano) {
        if (dano === void 0) { dano = 1; }
        if (this.vida > 0) {
            this.vida -= dano;
            console.log("--> BANG... ".concat(this.nome, " recebeu dano"));
        }
    };
    Personagem.prototype.agir = function () {
        console.log("".concat(this.nome, " est\u00E1 agindo..."));
    };
    return Personagem;
}());
exports.Personagem = Personagem;

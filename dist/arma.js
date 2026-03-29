"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arma = void 0;
var Arma = /** @class */ (function () {
    function Arma(chanceTiro) {
        this._chanceTiro = 0.4;
        this.chanceTiro = chanceTiro;
    }
    Object.defineProperty(Arma.prototype, "chanceTiro", {
        get: function () {
            return this._chanceTiro;
        },
        set: function (value) {
            this._chanceTiro = value;
        },
        enumerable: false,
        configurable: true
    });
    Arma.prototype.atirar = function () {
        return Math.random() < this.chanceTiro;
    };
    return Arma;
}());
exports.Arma = Arma;

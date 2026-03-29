export class Arma {
    private _chanceTiro: number = 0.4

    public get chanceTiro(): number {
        return this._chanceTiro;
    }
    public set chanceTiro(value: number) {
        this._chanceTiro = value;
    }

    constructor (chanceTiro: number) {
        this.chanceTiro = chanceTiro
    }

    atirar():boolean {
        return Math.random() < this.chanceTiro
    }
}
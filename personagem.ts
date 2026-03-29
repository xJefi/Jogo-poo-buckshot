export class Personagem {
  private _nome: string;
  private _vida: number;

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }

  public get vida(): number {
    return this._vida;
  }
  public set vida(value: number) {
    this._vida = value;
  }

  constructor(nome: string, vida: number) {
    this._nome = nome;
    this._vida = vida;
  }

  public receberDano(dano: number = 1) {
    if (this.vida > 0) {
      this.vida -= dano;
      console.log(`--> BANG... ${this.nome} recebeu dano`);
    }
  }

  public agir() {
    console.log(`${this.nome} está agindo...`);
  }
}

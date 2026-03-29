import { Arma } from "./arma";
import { Inimigo } from "./inimigo";
import { Jogador } from "./jogador";

export class Jogo {
  private _jogador: Jogador;
  private _inimigo: Inimigo;
  private _arma: Arma;
  private _rodada: number;
  private _recompensa: number;

  public get jogador(): Jogador {
    return this._jogador;
  }
  public set jogador(value: Jogador) {
    this._jogador = value;
  }

  public get inimigo(): Inimigo {
    return this._inimigo;
  }
  public set inimigo(value: Inimigo) {
    this._inimigo = value;
  }

  public get arma(): Arma {
    return this._arma;
  }
  public set arma(value: Arma) {
    this._arma = value;
  }

  public get rodada(): number {
    return this._rodada;
  }
  public set rodada(value: number) {
    this._rodada = value;
  }

  public get recompensa(): number {
    return this._recompensa;
  }
  public set recompensa(value: number) {
    this._recompensa = value;
  }

  constructor(
    jogador: Jogador,
    inimigo: Inimigo,
    arma: Arma,
    rodada: number,
    recompensa: number,
  ) {
    this._jogador = jogador;
    this._inimigo = inimigo;
    this._arma = arma;
    this._rodada = rodada;
    this._recompensa = recompensa;
  }

  public mostrarStatus() {
    console.log("\n----------STATUS----------");
    console.log(`${this.inimigo.nome} - Vida: ${this.inimigo.vida}`);
    console.log(`${this.jogador.nome} - Vida: ${this.jogador.vida}`);
    console.log("--------------------------\n");
  }

  public iniciar() {
    let turnoJogador = true;

    console.log("\n================ ROLETA RUSSA ================");

    while (this.jogador.vida > 0 && this.inimigo.vida > 0) {
      const disparo = this.arma.atirar();

      if (turnoJogador) {
        console.log(`\nRodada ${this.rodada}`);
        console.log(`Recompensa Atual: R$ ${this.recompensa}`);

        console.log("\n-----Turno do Jogador-----");
        this.jogador.agir(); //método reescrito
        if (disparo) {
          this.jogador.receberDano(); //método chamado quando a bala é verdadeira
        } else {
          this.balaFalsa(); //método chamado quando o disparo falha
        }
        this.mostrarStatus();
      } else {
        console.log("\n-----Turno do Inimigo-----");
        this.inimigo.agir();
        if (disparo) {
          this.inimigo.receberDano();
        } else {
          this.balaFalsa();
        }
        this.mostrarStatus();
      }
      turnoJogador = !turnoJogador; //troca o turno

      if (turnoJogador) {
        this.rodada++;
        this.recompensa *= 2;
      }
    }
    this.mensagemFinal(); //mensagem final quando o loop termina
  }

  public balaFalsa() {
    console.log("--> Mas nada aconteceu");
  }

  public mensagemFinal() {
    console.log("\n=====FIM DE JOGO=====");
    if (this.jogador.vida > 0) {
      console.log("Parabéns!!! Você venceu!");
      console.log(
        `Você sobreviveu por ${this.rodada} rodadas e faturou R$ ${this.recompensa}!`,
      );
    } else {
      console.log("Você morreu.");
      console.log(
        `Você puxou o gatilho ${this.rodada} vezes e acumulou a recompensa em R$ ${this.recompensa} antes de morrer!`,
      );
      console.log("A BANCA FICOU COM TUDO!\n")
    }
  }
}

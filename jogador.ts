import { Personagem } from "./personagem";

export class Jogador extends Personagem {
    constructor (nome: string, vida: number){
        super(nome, vida)
    }

      public agir() {
        super.agir()
        console.log(`JOGADOR (${this.nome}) puxa o gatilho...`)
    }
}
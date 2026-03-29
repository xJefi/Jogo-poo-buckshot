import { Personagem } from "./personagem";

export class Inimigo extends Personagem {
    constructor (nome: string, vida: number){
        super(nome, vida)
    }

    public agir() {
        super.agir()
        console.log(`INIMIGO (${this.nome}) atira automaticamente...`)
    }
}
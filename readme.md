## DESCRIÇÃO DO JOGO:
Neste jogo, você assume o papel de uma pessoa com grandes problemas financeiros, que, no ápice de seu desespero, aceita a oferta de um desconhecido, conhecido apenas como "Dealer", para apostar a própria vida em um jogo de roleta russa. 
Neste jogo, as apostas são grandes e as recompensas também. O valor da recompensa começa em 10 mil reais, e, a cada rodada em que você sobrevive, o valor é dobrado. Ao final do jogo, se você sobreviver, conseguirá receber uma grande recompensa.

Minha ideia foi fazer um jogo simples de roleta russa em turnos em typescript, onde existe uma chance da arma atirar em cada rodada. Tanto o jogador quanto o inimigo possuem 3 vidas, e o primeiro a zerá-las perde o jogo.
Meu jogo foi inspirado no jogo estoniano "Buckshot Roulette".

## DESCRIÇÃO DO PROJETO:
Meu projeto possui a super classe Personagem, as classes Jogador e Inimigo que são herdadas dela, a classe Arma e a classe Jogo. A execução é feita em um arquivo separado, o executar.ts, que instancia as classes e inicia o jogo.

## Classe Personagem
### Possui os atributos: 
nome e vida, que são encapsulados como privados.
### Possui os métodos: 
-receberDano(), que verifica se a vida é maior do que 0 e, se for, diminui ela em 1 e imprime no console que o personagem levou dano. Esse método será chamado nos casos em que a arma disparar.

-agir(), que imprime uma mensagem no console no turno do personagem. Esse método será reescrito diferentemente por cada classe que herdará da classe personagem.

## Classe Jogador
### Herda os atributos nome e vida da super classe Personagem.
### Reescreve o método agir() da classe personagem com uma mensagem adicional que será impressa no console.

## Classe Inimigo
### Também herda os atributos nome e vida da super classe Personagem.

### E também reescreve o método agir() da classe personagem com uma mensagem adicional que será impressa no console.

## Classe Arma
### Possui o atributo: 
-chanceTiro, que receberá um número decimal entre 0 e 1, esse número representa a porcentagem de chance da bala ser verdadeira, ou seja, se o valor for instanciado como 0.4, existirá 40% de chance da arma atirar.

### Possui o método: 
-atirar(), que gera um número aleatório entre 0 e 1 e retorna um valor booleano. True se ele for menor do que o valor instanciado em this.chanceTiro, ou False se ele for maior. Ou seja, se ele for menor do que 0.4, por exemplo, a arma dispara, e se ele for maior a bala será falsa.

## Classe Jogo
### Possui os atributos:
-jogador, que recebe a classe Jogador.

-inimigo, que recebe a classe Inimigo.

-arma, que recebe a classe Arma.

-rodada, que receberá o número da rodada atual no jogo.

-recompensa, que acumulará um valor exponencialmente a cada rodada.
### Possui os métodos:
-mostrarStatus(), que mostra o nome e a vida de cada personagem a cada rodada.

-balaFalsa(), que imprime no console uma mensagem quando a arma não dispara.

-mensagemFinal(), que imprime no console uma mensagem quando o jogador ou o inimigo vence o jogo.

-iniciar(), que inicia o jogo - o método iniciar() é composto por:

--Uma variável chamada turnoJogador, que, quando retorna o valor true, executa o turno do jogador, e quando retorna false executa o turno do inimigo;

--Um loop while, que continua rodando enquanto a vida do jogador e a vida do inimigo forem maior do que 0;

### -Dentro do loop-:
-São imprimidos no console a rodada atual (que é somada em 1 toda vez que o turno do jogador inicia), a recompensa atual (que é multiplicada por 2 quando o turno do jogador inicia) e é disparado o método agir(), que foi reescrito para cada personagem em específico;

-Se variável disparo for true (se o número aleatório for menor do que 0.4, disparando o método atirar()), será disparado o método receberDano(), se não, será disparado o método balaFalsa();

-Após o turno ser concluído, a variável turnoJogador é negada, fazendo com que ela inverta seu valor;

-Quando o jogo finalmente sai do loop, é disparado o método mensagemFinal.

## Encapsulamento e Herança
Todos os atributos das classes recebem o encapsulamento private com getters e setters.

Todos os métodos recebem o encapsulamento public.

Jogador e Inimigo são herdados da classe Personagem e o método agir() é reescrito para cada um em específico.

## INSTRUÇÕES DE EXECUÇÃO:
No arquivo executar.ts são instanciadas as classes jogador, inimigo, arma e jogo.

Para rodar o jogo basta chamar o método:
### jogo.iniciar()

##Exemplo de execução no terminal:
================ ROLETA RUSSA ================

Rodada 1
Recompensa Atual: R$ 10000

-----Turno do Jogador-----
Você está agindo...
JOGADOR (Você) puxa o gatilho...
--> Mas nada aconteceu

----------STATUS----------
Dealer - Vida: 3
Você - Vida: 3
--------------------------


-----Turno do Inimigo-----
Dealer está agindo...
INIMIGO (Dealer) atira automaticamente...
--> Mas nada aconteceu

----------STATUS----------
Dealer - Vida: 3
Você - Vida: 3
--------------------------


Rodada 2
Recompensa Atual: R$ 20000

-----Turno do Jogador-----
Você está agindo...
JOGADOR (Você) puxa o gatilho...
--> BANG... Você recebeu dano

----------STATUS----------
Dealer - Vida: 3
Você - Vida: 2
--------------------------


-----Turno do Inimigo-----
Dealer está agindo...
INIMIGO (Dealer) atira automaticamente...
--> Mas nada aconteceu

----------STATUS----------
Dealer - Vida: 3
Você - Vida: 2
--------------------------


Rodada 3
Recompensa Atual: R$ 40000

-----Turno do Jogador-----
Você está agindo...
JOGADOR (Você) puxa o gatilho...
--> Mas nada aconteceu

----------STATUS----------
Dealer - Vida: 3
Você - Vida: 2
--------------------------


-----Turno do Inimigo-----
Dealer está agindo...
INIMIGO (Dealer) atira automaticamente...
--> Mas nada aconteceu

----------STATUS----------
Dealer - Vida: 3
Você - Vida: 2
--------------------------


Rodada 4
Recompensa Atual: R$ 80000

-----Turno do Jogador-----
Você está agindo...
JOGADOR (Você) puxa o gatilho...
--> Mas nada aconteceu

----------STATUS----------
Dealer - Vida: 3
Você - Vida: 2
--------------------------


-----Turno do Inimigo-----
Dealer está agindo...
INIMIGO (Dealer) atira automaticamente...
--> BANG... Dealer recebeu dano

----------STATUS----------
Dealer - Vida: 2
Você - Vida: 2
--------------------------


Rodada 5
Recompensa Atual: R$ 160000

-----Turno do Jogador-----
Você está agindo...
JOGADOR (Você) puxa o gatilho...
--> Mas nada aconteceu

----------STATUS----------
Dealer - Vida: 2
Você - Vida: 2
--------------------------


-----Turno do Inimigo-----
Dealer está agindo...
INIMIGO (Dealer) atira automaticamente...
--> BANG... Dealer recebeu dano

----------STATUS----------
Dealer - Vida: 1
Você - Vida: 2
--------------------------


Rodada 6
Recompensa Atual: R$ 320000

-----Turno do Jogador-----
Você está agindo...
JOGADOR (Você) puxa o gatilho...
--> BANG... Você recebeu dano

----------STATUS----------
Dealer - Vida: 1
Você - Vida: 1
--------------------------


-----Turno do Inimigo-----
Dealer está agindo...
INIMIGO (Dealer) atira automaticamente...
--> Mas nada aconteceu

----------STATUS----------
Dealer - Vida: 1
Você - Vida: 1
--------------------------


Rodada 7
Recompensa Atual: R$ 640000

-----Turno do Jogador-----
Você está agindo...
JOGADOR (Você) puxa o gatilho...
--> Mas nada aconteceu

----------STATUS----------
Dealer - Vida: 1
Você - Vida: 1
--------------------------


-----Turno do Inimigo-----
Dealer está agindo...
INIMIGO (Dealer) atira automaticamente...
--> BANG... Dealer recebeu dano

----------STATUS----------
Dealer - Vida: 0
Você - Vida: 1
--------------------------


=====FIM DE JOGO=====
Parabéns!!! Você venceu!
Você sobreviveu por 8 rodadas e faturou R$ 1280000!

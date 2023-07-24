/* 
Roteiro:
1 - Area do jogo (Classe)
  - Desenha grade 
  - Desenha borda
2 - Comidas 
  - Adicionar pares x e y aleatórios no vetor 
  - Desenha comida 
3 - Cobra 
  - Definição inicial, "Array" de posições 
  - Estratégia de movimentação 
  - Desenha o corpo da cobra na área de desenho 
4 - Movimentação com o teclado 
5 - Colisão com paredes 
6 - Cabeçalho com as informações do jogo 
  - Método para aumentar a pontuação
  - Método para diminuir a vida 
  - Método para aumentar o nível 
7 - Colisão com comidas - retorna o índice 
  - Cresce o tamanho da cobra 
  - Aumenta a pontuação 
  - Se comer todas as comidas segue para o próximo nível 
8 - Aumenta de nível 
  - Amenta a quantidade de comidas 
  - Cria novas comidas no cenário 
  - Atualiza o tamanho da cobra 
9 - Retira um vida 
  - Se chegar em zero, vai para tela de game over 
  
Referências: 
- Código das setas do teclado https://p5js.org/reference/#/p5/keyCode 
*/

function setup() {
  createCanvas(695, 695)
}

function draw() {
  background(220)
  text('Snake', width / 2, height / 2)
}

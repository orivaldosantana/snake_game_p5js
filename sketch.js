/* 
Roteiro:
1 - Área do jogo (Classe)
  - Desenha grade 
  - Desenha borda
2 - Comidas 
  - Adicionar pares x e y aleatórios no vetor 
  - Desenha comida 
3 - Cobra 
  - Definição inicial, "Array" de posições 
  - Estratégia de movimentação 
  - Desenha o corpo da cobra na área de jogo 
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
- Design https://www.figma.com/file/QxjSTSSXWs6qoKodKlzF0a/Snake-Game?type=design&node-id=28-11&mode=design&t=KKuOBQjRTSqAFzF0-4 
*/

const bgColor = '#101010'
const whiteColor = '#F1F1F1'
const grayColor = '#303030'

let gameArea
let foodAmout = 2

let screen = 'play'

function setup() {
  createCanvas(695, 695)
  frameRate(10)
  header = new Header('Snake Game')
  gameArea = new GameArea()
  snake = new Snake()

  gameArea.setSnakeBody(snake.getBody())
  gameArea.generateFoods(foodAmout)
}

function playGame() {
  background(bgColor)
  header.show()
  gameArea.showGrid()
  gameArea.showFoods()
  gameArea.showSnakeBody()
  gameArea.showBorder()

  // - - - Game Logic - - //
  let foodIndex = gameArea.foodCollision(snake.getNextMove())
  if (foodIndex != -1) {
    console.log('Food: ' + foodIndex)
    gameArea.removeFood(foodIndex)
    header.increaseScore()
    snake.grow()
    if (!gameArea.hasFood()) {
      foodAmout = foodAmout + 2
      gameArea.generateFoods(foodAmout)
      header.increaseLevel()
      snake.resetBody()
    }
  } else if (gameArea.isWallCollision(snake.getNextMove())) {
    if (!header.reduceLife()) {
      screen = 'end'
    }
    snake.resetBody()
  } else {
    snake.move()
  }
}

function gameOverScreen() {
  background(bgColor)
  fill(whiteColor)
  stroke(grayColor)
  textAlign(CENTER)
  textSize(70)
  text('Game Over', width / 2, height / 2)
}

function draw() {
  if (screen == 'play') {
    playGame()
  } else if (screen == 'end') {
    gameOverScreen()
  }
}

function keyPressed() {
  //seta para baixo
  if (key == 'ArrowDown') {
    snake.setDirection(0, 1)
  }
  //seta para cima
  if (key == 'ArrowUp') {
    snake.setDirection(0, -1)
  }
  //seta para esquerda
  if (key == 'ArrowLeft') {
    snake.setDirection(-1, 0)
  }
  //seta para direita
  if (key == 'ArrowRight') {
    snake.setDirection(1, 0)
  }
}

class GameArea {
  constructor() {
    this.xSize = 23
    this.ySize = 19
    this.cellSize = 30
    this.lineColor = '#303030'
    this.foodColor = '#1FDE00'
    this.yStart = 120
    this.foods = []

    this.snakeBody = []
  }

  isWallCollision(snakeHead) {
    let collision = false
    if (
      snakeHead.x < 0 ||
      snakeHead.x >= this.xSize ||
      snakeHead.y < 0 ||
      snakeHead.y >= this.ySize
    ) {
      collision = true
    }
    return collision
  }

  generateFoods(amout) {
    for (let i = 0; i < amout; i++) {
      let posFood = {}
      posFood.x = parseInt(random(0, this.xSize))
      posFood.y = parseInt(random(0, this.ySize))
      this.foods.push(posFood)
    }
  }

  showFoods() {
    fill(this.foodColor)
    for (let f in this.foods) {
      rect(
        this.cellSize * this.foods[f].x,
        this.yStart + this.cellSize * this.foods[f].y,
        this.cellSize,
        this.cellSize
      )
    }
  }

  // Checa se a cabeça da cobra colidiu com a comida e qual o seu indice no vetor de comidas
  foodCollision(snakeHead) {
    const found = this.foods.findIndex(
      e => e.x == snakeHead.x && e.y == snakeHead.y
    )
    return found
  }

  removeFood(foodIndex) {
    this.foods.splice(foodIndex, 1)
  }

  setSnakeBody(sb) {
    this.snakeBody = sb
  }

  hasFood() {
    if (this.foods.length != 0) {
      return true
    }
    return false
  }

  showSnakeBody() {
    fill(whiteColor)
    for (let i in this.snakeBody) {
      rect(
        this.cellSize * this.snakeBody[i].x,
        this.yStart + this.cellSize * this.snakeBody[i].y,
        this.cellSize,
        this.cellSize
      )
    }
  }

  showBorder() {
    noFill()
    strokeWeight(3)
    stroke(whiteColor)
    rect(2, this.yStart, this.xSize * this.cellSize, this.ySize * this.cellSize)
    strokeWeight(1)
  }

  showGrid() {
    stroke(this.lineColor)
    for (let y = 1; y < this.ySize; y++) {
      line(
        0,
        this.yStart + y * this.cellSize,
        this.xSize * this.cellSize,
        this.yStart + y * this.cellSize
      )
    }
    for (let x = 1; x < this.xSize; x++) {
      line(
        x * this.cellSize,
        this.yStart,
        x * this.cellSize,
        this.yStart + this.cellSize * this.ySize
      )
    }
  }
}

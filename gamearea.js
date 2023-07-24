class GameArea {
  constructor() {
    this.xSize = 23
    this.ySize = 19
    this.cellSize = 30
    this.lineColor = '#303030'
    this.yStart = 120
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

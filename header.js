class Header {
  constructor(title) {
    this.title = title
    this.score = 0
    this.level = 1
    this.lifes = 3
    this.yFirstLine = 50
    this.ySecondLine = 100
  }

  increaseScore() {
    this.score = this.score + 10
  }

  increaseLevel() {
    this.level++
  }

  reduceLife() {
    this.lifes--
    if (this.lifes > 0) {
      return true
    }
    return false
  }

  show() {
    fill(whiteColor)
    stroke(grayColor)
    textSize(32)
    textAlign(CENTER)
    text(this.title, width / 2, this.yFirstLine)
    textSize(24)
    text('Level: ' + this.level, width / 2, this.ySecondLine)
    textAlign(LEFT)
    text('Score: ' + this.score, 20, this.ySecondLine)
    text('Lifes: ' + this.lifes, 580, this.ySecondLine)
  }
}

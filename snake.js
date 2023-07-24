class Snake {
  constructor() {
    this.body = []
    this.body.push({ x: 1, y: 1 })
    this.body.push({ x: 2, y: 1 })
    this.body.push({ x: 3, y: 1 })
    this.xDirection = 1
    this.yDirection = 0
  }

  getBody() {
    return this.body
  }

  move() {
    let posHead = {}
    // last position
    let lastIndex = this.body.length - 1
    posHead.x = this.body[lastIndex].x + this.xDirection
    posHead.y = this.body[lastIndex].y + this.yDirection
    //add at the and of body (array)
    this.body.push(posHead)
    this.body.shift()
  }
}

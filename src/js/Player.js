
class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);
    this.setTexture('player');
    this.setPosition(x, y);
    this.deltaX = 5;
    this.deltaY = 5;
  }
  moveLeft() {
    if (this.x > 0) {
        this.x -= this.deltaX;
    }
}

  moveRight() {
      if (this.x < 800) {
          this.x += this.deltaX;
      }
  }

  moveUp() {
      if (this.y > 0) {
          this.y -= this.deltaY;
      }
  }

  moveDown() {

      if (this.y < 600) {
          this.y += this.deltaY;
      }
  }

  preUpdate(time, delta) {
      super.preUpdate(time, delta);
  }

}

export {Player}

class Enemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y ) {
    super(scene, x, y);
    this.setTexture('enemy');
    this.setPosition(x, y);
    scene.physics.world.enable(this);
    this.gameObject = this;
    this.deltaX = 50;
 

}
update() {
      let randomNumber = Math.random() * 100;
      randomNumber = Math.round(randomNumber);

      if (randomNumber == 40) {
          this.moveLeft();
      }
      else if (randomNumber == 70) {
          this.moveRight();
      }

  }

  moveLeft() {
      if (this.x > 0) {
          this.x -= this.deltaX;
      }
  }

  moveRight() {
      if (this.x < 600) {
          this.x += this.deltaX;
      }
  }

  moveUp() {
      if (this.y > 0) {
          this.y -= this.deltaY;
      }
  }

  moveDown() {

      if (this.y < 800) {
          this.y += this.deltaY;
      }
  }
   

  
}

export {Enemy}
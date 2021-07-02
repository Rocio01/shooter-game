import { PlayerLaser } from "./PlayerLaser";
class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);
    this.setTexture('player');
    this.setPosition(x, y);
    this.deltaX = 5;
    this.deltaY = 5;
    this.lasers = [];
    this.laserLastshot = new Date().getTime();
    this.laserFrecuency = 200;
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
    let cleanLasers = [];

    for ( let i= 0; i < this.lasers.length; i ++){
      if (this.lasers[i].y <= 0) {
        cleanLasers.push(this.lasers[i]);
      }
    }

    for ( let i= 0; i< cleanLasers.length; i++) {
      let index = this.lasers.indexOf(cleanLasers[i]);
      this.lasers.splice(index, 1);
      cleanLasers[i].destroy();
    }
  }

  letFire() {
    let currentTime = new Date().getTime();
    if (currentTime - this.laserLastshot > this.laserFrecuency) {
      let myPlayerLaser = new PlayerLaser(this.scene, this.x, this.y);
      this.scene.add.existing(myPlayerLaser);
      this.lasers.push(myPlayerLaser);
      this.laserLastshot = currentTime;
    }
  }
}

export { Player };
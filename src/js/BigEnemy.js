import Phaser from 'phaser';

import EnemyLaser from './EnemyLaser';

class BigEnemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);
    this.setTexture('bigenemy');
    this.setPosition(x, y);
    this.deltaX = 5;
    this.deltaY = 5;
    this.enemylasers = [];
    this.lastShot = new Date().getTime();
    this.shotFrequency = 600;
    this.scene = scene;
    scene.physics.world.enable(this);
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);
    const lasersToRemove = [];

    for (let i = 0; i < this.enemylasers.length; i += 1) {
      if (this.enemylasers[i].y <= 0) {
        lasersToRemove.push(this.enemylasers[i]);
      }
    }

    for (let i = 0; i < lasersToRemove.length; i += 1) {
      const laserIndex = this.enemylasers.indexOf(lasersToRemove[i]);
      this.enemylasers.splice(laserIndex, 1);
      lasersToRemove[i].destroy();
    }
  }

  fireEnemyLasers() {
    const currentTime = new Date().getTime();
    if (currentTime - this.lastShot > this.shotFrequency) {
      const enemyLaser = new EnemyLaser(this.scene, this.x, this.y);
      this.scene.add.existing(enemyLaser);
      this.enemylasers.push(enemyLaser);
      this.lastShot = currentTime;
    }
  }
}

export default BigEnemy;
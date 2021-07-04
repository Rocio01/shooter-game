import { EnemyLaser } from './EnemyLaser';

class BigEnemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);
    this.setTexture('bigenemy');
    this.setPosition(x, y);
    this.deltaX = 5;
    this.deltaY = 5;
    this.enemylasers = [];
    this.lastShot = new Date().getTime();
    this.shotFrequency = 200;
  }


//   preUpdate(time, delta) {
//     super.preUpdate(time, delta);

//     var i = 0;
//     var j = 0;
//     var lasersToRemove = new Array();

//     for (i = 0; i < this.enemylasers.length; i++) {
//         if (this.enemylasers[i].y <= 0) {
//             lasersToRemove.push(this.enemylasers[i]);
//         }
//     }

//     for (j = 0; j < lasersToRemove.length; j++) {
//         var laserIndex = this.enemylasers.indexOf(lasersToRemove[j]);
//         this.enemylasers.splice(laserIndex, 1);
//         lasersToRemove[j].destroy();
//     }
// }

  fireEnemyLasers() {
    var currentTime = new Date().getTime();
    if (currentTime - this.lastShot > this.shotFrequency) {
        var enemyLaser = new EnemyLaser(this.scene, this.x, this.y);
        this.scene.add.existing(enemyLaser);
        this.enemylasers.push(enemyLaser);
        this.lastShot = currentTime;
    }
    }
}

export {BigEnemy}
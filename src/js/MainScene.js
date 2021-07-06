import Phaser from 'phaser';
import Player from './Player';
import Enemy from './Enemy';
import BigEnemy from './BigEnemy';

class MainScene extends Phaser.Scene {
  preload() {
    this.load.image('blue', 'src/assets/Background/blue.jpg');
    this.load.image('player', 'src/assets/player/Squid-icon1.png');
    this.load.image('laser', 'src/assets/Lasers/laserGreen14.png');
    this.load.image('laser1', 'src/assets/Lasers/laserRed04.png');
    this.load.image('animal', 'src/assets/random-ocean-mix/jellyfish-n.png');
    this.load.image('enemy', 'src/assets/enemies/trash-icon1.png');
    this.load.image('bigenemy', 'src/assets/enemies/Daft-Punk-Thomas-Human-icon.png');
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.add.image(400, 300, 'blue');
    this.myPlayer = new Player(this, 400, 500);
    this.add.existing(this.myPlayer);
    this.rect = new Phaser.Geom.Rectangle(0, 0, 800, 800);
    this.group = this.add.group({ key: 'animal', frameQuantity: 20 });

    Phaser.Actions.RandomRectangle(this.group.getChildren(), this.rect);
    this.enemies = this.physics.add.group();
    this.player1 = this.physics.add.group();
    this.player1.add(this.myPlayer);
    this.enemies2 = [];

    for (let i = 0; i < 10; i += 1) {
      const x = Math.random() * 800;
      const y = Math.random() * 400;

      this.enemy = new Enemy(this, x, y);
      this.add.existing(this.enemy);
      this.enemies.add(this.enemy);
      this.enemies2.push(this.enemy);
    }

    this.bigEnemies = this.physics.add.group();
    this.bigEnemies2 = [];

    for (let i = 0; i < 3; i += 1) {
      const x = Math.random() * 800;
      const y = Math.random() * 400;

      this.bigEnemy = new BigEnemy(this, x, y);

      this.add.existing(this.bigEnemy);
      this.bigEnemies.add(this.bigEnemy);
      this.bigEnemies2.push(this.bigEnemy);
    }
  }

  update() {
    if (!(this.myPlayer.body) === true) {
      this.scene.pause();
    }

    if (this.cursors.left.isDown) {
      this.myPlayer.moveLeft();
    }

    if (this.cursors.right.isDown) {
      this.myPlayer.moveRight();
    }

    if (this.cursors.up.isDown) {
      this.myPlayer.moveUp();
    }

    if (this.cursors.down.isDown) {
      this.myPlayer.moveDown();
    }

    if (this.cursors.space.isDown) {
      this.myPlayer.letFire();
    }
    this.children = this.group.getChildren();

    Phaser.Actions.IncXY(this.children, 1, 1);
    Phaser.Actions.WrapInRectangle(this.children, this.rect);

    for (let i = 0; i < this.enemies2.length; i += 1) {
      const enemy = this.enemies2[i];
      enemy.update();
    }
    for (let i = 0; i < this.bigEnemies2.length; i += 1) {
      const bigEnemy = this.bigEnemies2[i];
      bigEnemy.fireEnemyLasers();
    }
  }
}

export default MainScene;
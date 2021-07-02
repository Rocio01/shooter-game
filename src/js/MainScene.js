import { Player } from './Player';
import { Enemy } from './Enemy';

class MainScene extends Phaser.Scene {
  // constructor(config) {
  //   super(config);
  // }

  preload() {
    this.load.image('blue', 'src/assets/Background/blue.jpg');
    this.load.image('player', 'src/assets/player/Squid-icon1.png');
    this.load.image('laser', 'src/assets/Lasers/laserGreen14.png');
    this.load.image('animal', 'src/assets/random-ocean-mix/jellyfish-n.png');
    this.load.image("enemy", "src/assets/enemies/Trash-Can-icon.png")
   
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.add.image(400, 300, 'blue');
    this.myPlayer = new Player(this, 400, 500);
    this.add.existing(this.myPlayer);
    this.rect = new Phaser.Geom.Rectangle(0, 0, 800, 800);
    this.group = this.add.group({ key: 'animal', frameQuantity: 20 });
  
    Phaser.Actions.RandomRectangle(this.group.getChildren(), this.rect);
    
  }

  update() {
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
   
  }
}

export { MainScene };
import { Player } from "./Player.js";

class MainScene extends Phaser.Scene {
  constructor(config) {
    super(config);
  }

  preload() {
    this.load.image("blue", "src/assets/Background/blue.jpg");
    this.load.image("player", "./src/assets/player/Squid-icon.png")
  }

  create() {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.add.image(400, 300, "blue");
    this.myPlayer = new Player(this, 400, 500);
    this.add.existing(this.myPlayer);
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

}

 
  
}

export {MainScene}
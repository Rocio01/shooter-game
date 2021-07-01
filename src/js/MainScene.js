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

 
  
}

export {MainScene}
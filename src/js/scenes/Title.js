import Phaser from 'phaser';

class TitleScene extends Phaser.Scene {
  constructor() {
    super('title');
  }

  create() {
    this.add.image(400, 300, 'ocean');
    this.input.on("pointerdown", () => this.scene.start("game"))
  }
}

export default TitleScene;
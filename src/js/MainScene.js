class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: "MainScene" });
  }

  preload() {
    this.load.image("blue", "src/assets/Background/blue.jpg")
  }

  create() {
    this.add.image(400, 300, "blue");
  }
}

export {MainScene}
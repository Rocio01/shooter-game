import Phaser from 'phaser';

class TitleScene extends Phaser.Scene {
  constructor() {
    super('title');
  }

  create() {
    this.add.image(400, 300, 'ocean');
    this.input.on('pointerdown', () => this.scene.start('game'));
    const { width } = this.scale;
    const { height } = this.scale;
    this.add.text(width * 0.4, height * 0.4, 'Welcome, your mission is to clean the ocean.',
      { fontSize: 20 }).setOrigin(0.5);
    this.add.text(width * 0.5, height * 0.5, 'Use the arrow keys to move and the space bar to shoot.',
      { fontSize: 20 }).setOrigin(0.5);
    this.add.text(width * 0.6, height * 0.6, 'Be careful not to touch your enemies.',
      { fontSize: 20 }).setOrigin(0.5);
    this.add.text(width * 0.65, height * 0.65, 'Click anywhere to get started.',
      { fontSize: 20 }).setOrigin(0.5);
  }
}

export default TitleScene;
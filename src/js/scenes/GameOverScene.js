import Phaser from 'phaser';

class GameOverScene extends Phaser.Scene {
  constructor() {
    super('game-over');
  }

  init(data) {
    this.score = data.score;
  }

  create() {
    const { width } = this.scale;
    const { height } = this.scale;
    this.add.text(width * 0.5, height * 0.5, 'Game Over', { fontSize: 48 }).setOrigin(0.5);
    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('game')
       })
  }
}

export default GameOverScene;
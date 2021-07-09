import Phaser from 'phaser';
import form from '../utilities/form';

class GameOverScene extends Phaser.Scene {
  constructor() {
    super('game-over');
  }

  init(data) {
    this.finalScore = data.score;
 }

  create() {
    const { width } = this.scale;
    const { height } = this.scale;
    this.add.text(width * 0.5, height * 0.5, 'Game Over', { fontSize: 48 }).setOrigin(0.5);
    this.add.text(width * 0.6, height * 0.6, this.finalScore, { fontSize: 48 }).setOrigin(0.5);
    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('game')
       })
  }
}

export default GameOverScene;
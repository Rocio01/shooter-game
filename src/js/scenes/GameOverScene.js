import Phaser from 'phaser';

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
    this.add.text(width * 0.5, height * 0.6, 'Your Score: ' + this.finalScore, { fontSize: 48 }).setOrigin(0.5);
    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('game')
       })
  
      const text = this.add.text(this.game.config.width * 0.5, 40, 'Please enter your name', { color: 'white', fontSize: '42px ' });
      text.setOrigin(0.5);
      const form = `<input type="text" name="nameField" placeholder="Enter your name" style="font-size: 32px">
      <input type="button" name="playButton" value="Save" style="font-size: 32px">`;
  
      const element = this.add.dom(this.game.config.width * 0.5, 100).createFromHTML(form);
      element.setOrigin(0.5);
      element.addListener('click');
  
  }


}

export default GameOverScene;
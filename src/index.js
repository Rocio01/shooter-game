import Phaser from 'phaser';
import MainScene from './js/MainScene';
import GameOverScene from './js/GameOverScene';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
  },
  scene: [
    MainScene,
    GameOverScene
  ],
};


window.game = new Phaser.Game(config);

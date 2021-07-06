import Phaser from 'phaser';
import MainScene from './js/MainScene';

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
  ],
};


window.game = new Phaser.Game(config);

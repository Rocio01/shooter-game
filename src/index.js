import Phaser from 'phaser';
import { MainScene } from './js/MainScene';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',

  //   arcade: {
  //     // gravity: { y: 5 },
  //     debug: false
  // }
  },
};

const game = new Phaser.Game(config);
game.scene.add('MainScene', MainScene, true, { x: 400, y: 300 });

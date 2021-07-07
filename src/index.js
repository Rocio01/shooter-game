import Phaser from 'phaser';
import BootScene from './js/scenes/BootScene';
import PreloaderScene from './js/scenes/Preloader';
import Game from './js/scenes/Game';
import GameOverScene from './js/scenes/GameOverScene';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
  },
  scene: [
    BootScene,
    PreloaderScene,
    Game,
    GameOverScene,
  ],
};

window.game = new Phaser.Game(config);

import Phaser from 'phaser';
import BootScene from './js/scenes/BootScene';
import PreloaderScene from './js/scenes/Preloader';
import TitleScene from './js/scenes/Title';
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
  dom: {
    createContainer: true
},
  scene: [
    BootScene,
    PreloaderScene,
    TitleScene,
    Game,
    GameOverScene,
  ],
};

window.game = new Phaser.Game(config);

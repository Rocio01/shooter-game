import Phaser from 'phaser';

 class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', 'assets/logo.jpg');
  }

  create() {
    this.scene.start('Preloader');
  }
}


export default BootScene;
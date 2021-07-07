import Phaser from 'phaser';

 class PreloaderScene extends Phaser.Scene {
  constructor() {
    super('Preloader');
  }

  init() {
     this.readyCount = 0;
  }

  preload() {
    this.add.image(400, 300, 'logo');
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);

    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    assetText.setOrigin(0.5, 0.5);

  
    this.load.on('progress', (value) => {
      // eslint-disable-next-line
      percentText.setText(`${parseInt(value * 100)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    
    this.load.on('fileprogress', (file) => {
      assetText.setText(`Loading asset: ${file.key}`);
    });

  
    this.load.on(
      'complete',
      () => {
        progressBar.destroy();
        progressBox.destroy();
        loadingText.destroy();
        percentText.destroy();
        assetText.destroy();
        this.ready();
      },
    );

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    this.load.image("logo", "src/assets/Background/wave.jpg")
    this.load.image('blue', 'src/assets/Background/blue.jpg');
    this.load.image('player', 'src/assets/player/Squid-icon1.png');
    this.load.image('laser', 'src/assets/Lasers/laserGreen14.png');
    this.load.image('laser1', 'src/assets/Lasers/laserRed04.png');
    this.load.image('animal', 'src/assets/random-ocean-mix/jellyfish-n.png');
    this.load.image('enemy', 'src/assets/enemies/trash-icon2.png');
    this.load.image('bigenemy', 'src/assets/enemies/Daft-Punk-Thomas-Human-icon.png');

  }

  ready() {
    this.scene.start('game');
  }
}

export default PreloaderScene;
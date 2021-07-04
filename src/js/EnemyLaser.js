class EnemyLaser extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);
    this.setTexture('laser');
    this.setPosition(x, y);
    this.speed = 10;
    this.scene = scene;
    scene.physics.world.enable(this);
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);
    this.y = this.speed;
  }
}

export { EnemyLaser };
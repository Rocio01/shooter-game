class EnemyLaser extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y);
    this.setTexture('laser1');
    this.setPosition(x, y);
    this.deltaX = 5;
    this.deltaY = 5;
    this.speed = 10;
    this.scene = scene;
    scene.physics.world.enable(this);
    scene.physics.add.collider(this, scene.player1, this.handleHit, null, this);
  }

  preUpdate(time, delta) {
    if (this.active === false) {
      return;
    }
    super.preUpdate(time, delta);
    this.y += this.speed;
  }

  handleHit(laser, player) {
    laser.destroy();
    player.destroy();
  }
}

export { EnemyLaser as default };
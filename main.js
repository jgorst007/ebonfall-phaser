const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  pixelArt: true,
  scene: {
    preload,
    create,
    update
  }
};

let player;
let cursors;
let guard;
let dialog;

const game = new Phaser.Game(config);

function preload() {
  this.load.image('tiles', 'assets/tileset.png');
  this.load.tilemapTiledJSON('map', 'assets/tilemap.json');
  this.load.spritesheet('ashwalker', 'assets/ashwalker.png', { frameWidth: 32, frameHeight: 32 });
  this.load.spritesheet('ember_guard', 'assets/ember_guard.png', { frameWidth: 32, frameHeight: 32 });
}

function create() {
  const map = this.make.tilemap({ key: 'map' });
  const tileset = map.addTilesetImage('tileset', 'tiles');
  const layer = map.createLayer('Ground', tileset, 0, 0);

  player = this.physics.add.sprite(100, 100, 'ashwalker');
  guard = this.physics.add.sprite(200, 100, 'ember_guard');

  cursors = this.input.keyboard.createCursorKeys();

  dialog = this.add.text(10, 550, '', { font: '16px monospace', fill: '#fff' }).setScrollFactor(0);

  this.physics.add.overlap(player, guard, () => {
    dialog.setText("Ember Guard: Welcome to Ebonfall.");
  });
}

function update() {
  player.setVelocity(0);
  if (cursors.left.isDown) player.setVelocityX(-100);
  else if (cursors.right.isDown) player.setVelocityX(100);
  if (cursors.up.isDown) player.setVelocityY(-100);
  else if (cursors.down.isDown) player.setVelocityY(100);
}
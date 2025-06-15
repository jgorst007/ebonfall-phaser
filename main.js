const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#1d1d1d",
  scene: { preload, create, update },
  pixelArt: true
};

let player, guard, cursors, dialog;

const game = new Phaser.Game(config);

function preload() {
  this.load.spritesheet('ashwalker', 'assets/ashwalker.png', { frameWidth: 32, frameHeight: 32 });
  this.load.spritesheet('ember_guard', 'assets/ember_guard.png', { frameWidth: 32, frameHeight: 32 });
}

function create() {
  player = this.add.sprite(100, 100, 'ashwalker', 0);
  guard = this.add.sprite(200, 100, 'ember_guard', 0);
  cursors = this.input.keyboard.createCursorKeys();
  dialog = this.add.text(10, 550, '', { font: '16px monospace', fill: '#ffffff' });
}

function update() {
  if (cursors.left.isDown) player.x -= 2;
  else if (cursors.right.isDown) player.x += 2;
  if (cursors.up.isDown) player.y -= 2;
  else if (cursors.down.isDown) player.y += 2;

  if (Phaser.Math.Distance.Between(player.x, player.y, guard.x, guard.y) < 40) {
    dialog.setText("Ember Guard: Welcome to Ebonfall.");
  } else {
    dialog.setText("");
  }
}
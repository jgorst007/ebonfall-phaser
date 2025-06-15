const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#1d1d1d",
  pixelArt: true,
  scene: { preload, create, update }
};

let player, guard, cursors, dialog;

const game = new Phaser.Game(config);

function preload() {
  this.load.spritesheet('ashwalker', 'assets/ashwalker.png', { frameWidth: 32, frameHeight: 32 });
  this.load.spritesheet('ember_guard', 'assets/ember_guard.png', { frameWidth: 32, frameHeight: 32 });
  this.load.image('ground', 'assets/ground_tile.png');
}

function create() {
  // Draw a basic tiled background
  for (let x = 0; x < 800; x += 32) {
    for (let y = 0; y < 600; y += 32) {
      this.add.image(x, y, 'ground').setOrigin(0);
    }
  }

  player = this.add.sprite(100, 100, 'ashwalker', 0);
  guard = this.add.sprite(200, 100, 'ember_guard', 0);
  cursors = this.input.keyboard.createCursorKeys();
  dialog = this.add.text(10, 560, '', { font: '16px monospace', fill: '#ffffff' });
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
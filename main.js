const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#1d1d1d",
  scene: {
    preload,
    create,
    update
  },
  pixelArt: true
};

let player, cursors, npc, dialogText;

const game = new Phaser.Game(config);

function preload() {
  this.load.spritesheet('ashwalker', 'assets/ashwalker.png', { frameWidth: 32, frameHeight: 32 });
  this.load.spritesheet('ember_guard', 'assets/ember_guard.png', { frameWidth: 32, frameHeight: 32 });
}

function create() {
  this.add.text(10, 10, "Ebonfall: Revenant Wars", { font: '16px monospace', fill: '#ffffff' });

  player = this.add.sprite(100, 100, 'ashwalker');
  npc = this.add.sprite(200, 100, 'ember_guard');

  cursors = this.input.keyboard.createCursorKeys();
  dialogText = this.add.text(10, 550, '', { font: '16px monospace', fill: '#ffffff' });

  this.physics.add.existing(player);
  this.physics.add.existing(npc);
}

function update() {
  player.x += (cursors.right.isDown - cursors.left.isDown) * 2;
  player.y += (cursors.down.isDown - cursors.up.isDown) * 2;

  if (Phaser.Math.Distance.Between(player.x, player.y, npc.x, npc.y) < 40) {
    dialogText.setText("Ember Guard: Welcome to Ebonfall.");
  } else {
    dialogText.setText("");
  }
}
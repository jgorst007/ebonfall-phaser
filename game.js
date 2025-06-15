
const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 300,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: { debug: false }
    },
    scene: {
        preload,
        create,
        update
    }
};

const game = new Phaser.Game(config);
let player, cursors;

function preload() {
    this.load.spritesheet('hero', 'assets/sprite.png', {
        frameWidth: 488,
        frameHeight: 488
    });
}

function create() {
    player = this.physics.add.sprite(200, 150, 'hero', 0);

    this.anims.create({
        key: 'walk',
        frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 0 }),
        frameRate: 6,
        repeat: -1
    });

    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    player.setVelocity(0);

    if (cursors.left.isDown || cursors.right.isDown || cursors.up.isDown || cursors.down.isDown) {
        player.anims.play('walk', true);
    } else {
        player.anims.stop();
    }

    if (cursors.left.isDown) {
        player.setVelocityX(-100);
    } else if (cursors.right.isDown) {
        player.setVelocityX(100);
    }
    if (cursors.up.isDown) {
        player.setVelocityY(-100);
    } else if (cursors.down.isDown) {
        player.setVelocityY(100);
    }
}

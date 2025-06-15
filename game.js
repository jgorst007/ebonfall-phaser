
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
        frameWidth: 32,
        frameHeight: 32
    });
}

function create() {
    player = this.physics.add.sprite(200, 150, 'hero', 0);

    this.anims.create({
        key: 'walk-down',
        frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    player.setVelocity(0);

    if (cursors.left.isDown) {
        player.setVelocityX(-100);
        player.anims.play('walk-down', true);
    } else if (cursors.right.isDown) {
        player.setVelocityX(100);
        player.anims.play('walk-down', true);
    } else if (cursors.up.isDown) {
        player.setVelocityY(-100);
        player.anims.play('walk-down', true);
    } else if (cursors.down.isDown) {
        player.setVelocityY(100);
        player.anims.play('walk-down', true);
    } else {
        player.anims.stop();
    }
}

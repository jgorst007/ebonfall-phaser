const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  pixelArt: true,
  backgroundColor: "#000000",
  scene: { preload, create }
};

let map, layer;

const game = new Phaser.Game(config);

function preload() {
  this.load.image("tiles", "assets/tileset.png");
  this.load.tilemapTiledJSON("map", "assets/tilemap.json");
}

function create() {
  const map = this.make.tilemap({ key: "map" });
  const tileset = map.addTilesetImage("tileset", "tiles");
  map.createLayer("Ground", tileset, 0, 0);
}
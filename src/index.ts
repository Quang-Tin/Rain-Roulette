import Phaser from "phaser";
import preloadAssetPackUrl from "../static/assets/asset-pack.json";
import MainScene from "./scenes/MainScene";


class Boot extends Phaser.Scene {

    constructor() {
        super("Boot");
    }

    preload() {

        this.load.pack("pack", preloadAssetPackUrl);
    }

    create() {

       this.scene.start("MainScene");
    }
}

window.addEventListener('load', function () {
	
	const game = new Phaser.Game({
		type: Phaser.CANVAS,
		width: 390,
		height: 844,
		backgroundColor: "#2C2937",
		scale: {
			mode: Phaser.Scale.ScaleModes.FIT,
			autoCenter: Phaser.Scale.Center.CENTER_BOTH
		},
		pixelArt: false,
		antialias: true,
		roundPixels: true,
		antialiasGL: true,
		render: { mipmapFilter: 'LINEAR_MIPMAP_LINEAR' },
		scene: [Boot, MainScene]
	});

	game.scene.start("Boot");
});
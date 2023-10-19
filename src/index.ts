import Phaser from "phaser";
import preloadAssetPackUrl from "../static/assets/asset-pack.json";
import MainScene from "./scenes/MainScene";
import WebFontFile from "./service/web-font-service";
import LandingScene from "./scenes/LandingScene";


class Boot extends Phaser.Scene {
	isFontLoaded: boolean = false;

    constructor() {
        super("Boot");
    }

    preload() {
		const fonts = new WebFontFile(this.load, ()=>{this.isFontLoaded = true});

		this.load.addFile(fonts);
		
        this.load.pack("pack", preloadAssetPackUrl);
    }

    create() {
		const loading = setInterval(()=> {
			if(this.isFontLoaded) {
				clearInterval(loading);

				this.scene.start("LandingScene");
			}
		}, 1000);
    }
}

window.addEventListener('load', function () {
	const game = new Phaser.Game({
		type: Phaser.CANVAS,
		width: 390,
		height: 844,
		backgroundColor: "#000000",
		scale: {
			mode: Phaser.Scale.ScaleModes.FIT,
			autoCenter: Phaser.Scale.Center.CENTER_BOTH,
		},
		pixelArt: false,
		antialias: true,
		roundPixels: true,
		antialiasGL: true,
		render: { mipmapFilter: 'LINEAR_MIPMAP_LINEAR' },
		scene: [Boot, LandingScene ,MainScene]
	});

	game.scene.start("Boot");
});
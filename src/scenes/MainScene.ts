import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  editorCreate(): void {
    const logo = this.add
      .image(Number(this.game.config.width) / 2 - 89 /2 , (21 / Number(this.game.config.height)) * Number(this.game.config.height), "logo")
	  .setOrigin(0)
      .setDisplaySize(
        (89 / Number(this.game.config.width)) * Number(this.game.config.width),
        (58 / Number(this.game.config.height)) * Number(this.game.config.height)
      );
    logo.setY(logo.displayHeight / 2);

    const frame = this.add
      .image(
        Number(this.game.config.width) / 2 - 350 / 2,
        (211 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "Frame"
      )
      .setOrigin(0)
      .setDisplaySize(
        (350 / Number(this.game.config.width)) * Number(this.game.config.width),
        (565 / Number(this.game.config.height)) *
          Number(this.game.config.height)
      );

    const machine = this.add
      .image(
        Number(this.game.config.width) / 2 - 313 / 2,
        (291 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "Machine"
      )
      .setOrigin(0)
      .setDisplaySize(
        (313 / Number(this.game.config.width)) * Number(this.game.config.width),
        (395 / Number(this.game.config.height)) *
          Number(this.game.config.height)
      );

    const playButton = this.add
      .image(
        Number(this.game.config.width) / 2 - 186 / 2,
        (694 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "PlayButton"
      )
      .setOrigin(0)
      .setDisplaySize(
        (186 / Number(this.game.config.width)) * Number(this.game.config.width),
        (48 / Number(this.game.config.height)) * Number(this.game.config.height)
      );

    const wheel = this.add
      .image(
        Number(this.game.config.width) / 2 - 256 / 2,
        (320 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "Wheel"
      )
      .setOrigin(0)
      .setDisplaySize(
        (256 / Number(this.game.config.width)) * Number(this.game.config.width),
        (235 / Number(this.game.config.height)) *
          Number(this.game.config.height)
      );

    const pin = this.add
      .image(
        Number(this.game.config.width) / 2 - 61 / 2,
        (289 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "Pin"
      )
      .setOrigin(0)
      .setDisplaySize(
        (61 / Number(this.game.config.width)) * Number(this.game.config.width),
        (51 / Number(this.game.config.height)) * Number(this.game.config.height)
      );

    const info = this.add
      .image(
        (328 / Number(this.game.config.width)) * Number(this.game.config.width),
        (227 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "info"
      )
      .setInteractive()
      .setOrigin(0)
      .setDisplaySize(
        (22 / Number(this.game.config.width)) * Number(this.game.config.width),
        (22 / Number(this.game.config.height)) * Number(this.game.config.height)
      );

    const seasonInfo = this.add
      .image(
        Number(this.game.config.width) / 2 - 309 / 2,
        (103 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "SeasonInfo"
      )
      .setOrigin(0)
      .setDisplaySize(
        (309 / Number(this.game.config.width)) * Number(this.game.config.width),
        (68 / Number(this.game.config.height)) * Number(this.game.config.height)
      );

    const candyBlance = this.add.text(
      (272 / Number(this.game.config.width)) * Number(this.game.config.width),
      (243 / Number(this.game.config.height)) * Number(this.game.config.height),
      "0",
      {
        fontSize:
          (18 / Number(this.game.config.width)) *
          Number(this.game.config.width),
      }
    );

    info.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
      this.showGuideDialog();
    });

    this.events.emit("scene-awake");
  }

  showGuideDialog() {
    this.add
      .rectangle(0, 0)
      .setFillStyle(0x000000, 0.5)
      .setOrigin(0)
      .setSize(Number(this.game.config.width), Number(this.game.config.height));

    this.add
      .graphics()
      .fillStyle(0x2c2937, 1)
      .fillRoundedRect(
        (32 / Number(this.game.config.width)) * Number(this.game.config.width),
        (284 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        (325 / Number(this.game.config.width)) * Number(this.game.config.width),
        (276 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        10
      );

    this.add
      .graphics()
      .fillStyle(0x23212b, 1)
      .fillRoundedRect(
        (32 / Number(this.game.config.width)) * Number(this.game.config.width),
        (284 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        (325 / Number(this.game.config.width)) * Number(this.game.config.width),
        (50 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        { tl: 10, tr: 10, bl: 0, br: 0 }
      );

    this.add
      .image(
        (327 / Number(this.game.config.width)) * Number(this.game.config.width),
        (304 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "CloseImage"
      )
      .setOrigin(0)
      .setDisplaySize(
        (10 / Number(this.game.config.width)) * Number(this.game.config.width),
        (10 / Number(this.game.config.height)) * Number(this.game.config.height)
      );

    const guideTitle = this.add.text(
      (52 / Number(this.game.config.width)) * Number(this.game.config.width),
      (305 / Number(this.game.config.height)) * Number(this.game.config.height),
      "Information",
      {
        fontSize:
          (12 / Number(this.game.config.width)) *
          Number(this.game.config.width),
      }
    );

    this.add
      .image(
        (170 / Number(this.game.config.width)) * Number(this.game.config.width),
        (374 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "GuideImage"
      )
      .setOrigin(0)
      .setDisplaySize(
        (50 / Number(this.game.config.width)) * Number(this.game.config.width),
        (50 / Number(this.game.config.height)) * Number(this.game.config.height)
      );

    const gameGuideText = this.add.text(
      (144 / Number(this.game.config.width)) * Number(this.game.config.width),
      (444 / Number(this.game.config.height)) * Number(this.game.config.height),
      "Game Guide",
      {
        fontSize:
          (16 / Number(this.game.config.width)) *
          Number(this.game.config.width),
      }
    );

	const guideText = this.add.text(
		(56 / Number(this.game.config.width)) * Number(this.game.config.width),
		(484 / Number(this.game.config.height)) * Number(this.game.config.height),
		"Each play consumes one Candy\nCandy can be earned through linked games",
		{
		  align: 'center',
		  fontSize:
			(12 / Number(this.game.config.width)) *
			Number(this.game.config.width),
		}
	  );
  }

  create() {
    this.editorCreate();
  }
}

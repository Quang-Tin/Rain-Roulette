import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  editorCreate(): void {
    const logo = this.add
      .image(Number(this.game.config.width) / 2, 0, "logo")
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

    const candyBlance = this.add
      .text(
		(272 / Number(this.game.config.width)) * Number(this.game.config.width),
        (243 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "0",
		{
			fontSize: 18 / Number(this.game.config.width) * Number(this.game.config.width)
		}
      )
      

    this.events.emit("scene-awake");
  }

  create() {
    this.editorCreate();
  }
}

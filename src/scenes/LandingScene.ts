export default class MainScene extends Phaser.Scene {
  constructor() {
    super("LandingScene");
  }

  editorCreate(): void {
    document.getElementsByTagName('body')[0].style.backgroundColor = "#1C1C1E";
    this.cameras.main.setBackgroundColor("#1C1C1E");

    this.add
      .image(0, 0, "BackgroundTitle")
      .setOrigin(0)
      .setDisplaySize(
        (390 / Number(this.game.config.width)) * Number(this.game.config.width),
        (107 / Number(this.game.config.height)) *
          Number(this.game.config.height)
      );

    this.add
      .image(
        (20 / Number(this.game.config.width)) * Number(this.game.config.width),
        (51 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "LandingLogo"
      )
      .setOrigin(0)
      .setDisplaySize(
        (64 / Number(this.game.config.width)) * Number(this.game.config.width),
        (51 / Number(this.game.config.height)) * Number(this.game.config.height)
      );

    this.add
      .image(
        (293 / Number(this.game.config.width)) * Number(this.game.config.width),
        (62 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "LetterBox"
      )
      .setOrigin(0)
      .setDisplaySize(
        (32 / Number(this.game.config.width)) * Number(this.game.config.width),
        (28 / Number(this.game.config.height)) * Number(this.game.config.height)
      );

    this.add
      .image(
        (345 / Number(this.game.config.width)) * Number(this.game.config.width),
        (62 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "HamburgerButton"
      )
      .setOrigin(0)
      .setDisplaySize(
        (25 / Number(this.game.config.width)) * Number(this.game.config.width),
        (23 / Number(this.game.config.height)) * Number(this.game.config.height)
      );

    this.add
      .image(
        (25 / Number(this.game.config.width)) * Number(this.game.config.width),
        (132 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "CandyBalaneLanding"
      )
      .setOrigin(0)
      .setDisplaySize(
        (155 / Number(this.game.config.width)) * Number(this.game.config.width),
        (36 / Number(this.game.config.height)) * Number(this.game.config.height)
      );

    this.add
      .image(
        (25 / Number(this.game.config.width)) * Number(this.game.config.width),
        (132 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "CandyBalaneLanding"
      )
      .setOrigin(0)
      .setDisplaySize(
        (155 / Number(this.game.config.width)) * Number(this.game.config.width),
        (36 / Number(this.game.config.height)) * Number(this.game.config.height)
      );

    this.add
      .image(
        (210 / Number(this.game.config.width)) * Number(this.game.config.width),
        (129 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "NFTCandyBalaneLanding"
      )
      .setOrigin(0)
      .setDisplaySize(
        (155 / Number(this.game.config.width)) * Number(this.game.config.width),
        (40 / Number(this.game.config.height)) * Number(this.game.config.height)
      );

    this.add
      .image(
        (0 / Number(this.game.config.width)) * Number(this.game.config.width),
        (233 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "RankTable"
      )
      .setOrigin(0)
      .setDisplaySize(
        (390 / Number(this.game.config.width)) * Number(this.game.config.width),
        (326 / Number(this.game.config.height)) *
          Number(this.game.config.height)
      );

    this.add
      .image(
        (20 / Number(this.game.config.width)) * Number(this.game.config.width),
        (193 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "Banner"
      )
      .setOrigin(0)
      .setDisplaySize(
        (350 / Number(this.game.config.width)) * Number(this.game.config.width),
        (80 / Number(this.game.config.height)) * Number(this.game.config.height)
      );

    this.add
      .image(
        (20 / Number(this.game.config.width)) * Number(this.game.config.width),
        (579 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "SeasonBanner"
      )
      .setOrigin(0)
      .setDisplaySize(
        (350 / Number(this.game.config.width)) * Number(this.game.config.width),
        (70 / Number(this.game.config.height)) * Number(this.game.config.height)
      );

    this.add
      .image(
        (253 / Number(this.game.config.width)) * Number(this.game.config.width),
        (667 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "SeasonName"
      )
      .setOrigin(0)
      .setDisplaySize(
        (137 / Number(this.game.config.width)) * Number(this.game.config.width),
        (41 / Number(this.game.config.height)) * Number(this.game.config.height)
      );

    this.add
      .image(
        (253 / Number(this.game.config.width)) * Number(this.game.config.width),
        (667 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "SeasonName"
      )
      .setOrigin(0)
      .setDisplaySize(
        (137 / Number(this.game.config.width)) * Number(this.game.config.width),
        (41 / Number(this.game.config.height)) * Number(this.game.config.height)
      );

    this.add.text(
      (20 / Number(this.game.config.width)) * Number(this.game.config.width),
      (679 / Number(this.game.config.height)) * Number(this.game.config.height),
      "Mini Game",
      {
        fontFamily: "Poppins",
        fontStyle: "800",
        fontSize:
          (18 / Number(this.game.config.width)) *
          Number(this.game.config.width),
      }
    );

    this.add
      .image(
        (20 / Number(this.game.config.width)) * Number(this.game.config.width),
        (726 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "MiniGame"
      )
      .setOrigin(0)
      .setDisplaySize(
        (103 / Number(this.game.config.width)) * Number(this.game.config.width),
        (103 / Number(this.game.config.height)) *
          Number(this.game.config.height)
      );

    this.add
      .image(
        (144 / Number(this.game.config.width)) * Number(this.game.config.width),
        (726 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "MiniGame"
      )
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.start("MainScene");
      })
      .setOrigin(0)
      .setDisplaySize(
        (103 / Number(this.game.config.width)) * Number(this.game.config.width),
        (103 / Number(this.game.config.height)) *
          Number(this.game.config.height)
      );

    this.add
      .image(
        (267 / Number(this.game.config.width)) * Number(this.game.config.width),
        (726 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "MiniGame"
      )
      .setOrigin(0)
      .setDisplaySize(
        (103 / Number(this.game.config.width)) * Number(this.game.config.width),
        (103 / Number(this.game.config.height)) *
          Number(this.game.config.height)
      );
  }

  create() {
    this.editorCreate();
  }
}

import Phaser from "phaser";
import ComponentUtil from "../utils/ComponentUtil";
import { ComponentType, ShapeType } from "../utils/enum/Enum";
import AnimationUtil from "../utils/AnimationUtil";
import ScreenUtil from "../utils/ScreenUtil";

export default class MainScene extends Phaser.Scene {
  rarityList: Array<Object> = [
    {
      image: 'Iron',
      rarityName: "Iron",
      degrees: 0,
    },
    {
      image: 'Rare',
      rarityName: "Rare",
      degrees: -60,
    },
    {
      image: 'Epic',
      rarityName: "Epic",
      degrees: -120,
    },
    {
      image: 'Silver',
      rarityName: "Silver",
      degrees: 180,
    },
    {
      image: 'Bronze',
      rarityName: "Bronze",
      degrees: 120,
    },
    {
      image: 'Unique',
      rarityName: "Unique",
      degrees: 60,
    },
  ];

  constructor() {
    super("MainScene");
  }

  preload() {
    this.cameras.main.setBackgroundColor("#2C2937");
  }

  editorCreate(): void {
    const logo = ComponentUtil.getInstance().drawComponent(
      this,
      ComponentType.Image,
      "logo",
      "",
      151,
      21,
      89,
      58
    );

    const frame = ComponentUtil.getInstance().drawComponent(
      this,
      ComponentType.Image,
      "Frame",
      "",
      20,
      211,
      350,
      565
    );

    const machine = ComponentUtil.getInstance().drawComponent(
      this,
      ComponentType.Image,
      "Machine",
      "",
      39,
      291,
      313,
      395
    );

    const wheel = ComponentUtil.getInstance()
      .drawComponent(
        this,
        ComponentType.Image,
        "Wheel",
        "",
        66 + 256 / 2,
        320 + 235 / 2,
        256,
        235
      )
      ?.setOrigin(0.5);

    const playButton = ComponentUtil.getInstance()
      .drawComponent(
        this,
        ComponentType.Image,
        "PlayButton",
        "",
        103,
        694,
        186,
        48
      )
      ?.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        let rarity: any = this.rarityList[Phaser.Math.Between(0, 5)];

        AnimationUtil.getInstance().spinAnimation(
          this,
          wheel,
          (tweens: Phaser.Tweens.Tween) => {
            this.showRewardDialog(rarity);
            tweens.destroy();
          },
          rarity.degrees
        );
      });

    const pin = ComponentUtil.getInstance().drawComponent(
      this,
      ComponentType.Image,
      "Pin",
      "",
      168,
      292,
      61,
      51
    );

    const info = ComponentUtil.getInstance()
      .drawComponent(this, ComponentType.Image, "info", "", 328, 227, 22, 22)
      ?.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.showGuideDialog();
      })

    const seasonInfo = ComponentUtil.getInstance().drawComponent(
      this,
      ComponentType.Image,
      "SeasonInfo",
      "",
      41,
      103,
      309,
      68
    )

    const candyBlance = ComponentUtil.getInstance().drawComponent(
      this,
      ComponentType.Text,
      "",
      "0",
      272,
      242,
      0,
      0,
      18,
      "600",
      "#ACB1B5"
    )

    this.events.emit("scene-awake");
  }

  showGuideDialog() {
    const guideDialog = this.make.group({});

    const background = this.add
      .rectangle(0, 0)
      .setFillStyle(0x000000, 0.5)
      .setOrigin(0)
      .setSize(Number(this.game.config.width), Number(this.game.config.height));

    const dialog = this.add
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

    const dialogTitle = this.add
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

    const closeImage = this.add
      .image(
        (327 / Number(this.game.config.width)) * Number(this.game.config.width),
        (304 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "CloseImage"
      )
      .setInteractive()
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
        fontFamily: "Poppins",
        fontStyle: "600",
        fontSize:
          (12 / Number(this.game.config.width)) *
          Number(this.game.config.width),
      }
    );

    const guideImage = this.add
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
        fontFamily: "Poppins",
        fontStyle: "600",
        fontSize:
          (16 / Number(this.game.config.width)) *
          Number(this.game.config.width),
      }
    );

    const guideText = this.add.text(
      (62 / Number(this.game.config.width)) * Number(this.game.config.width),
      (484 / Number(this.game.config.height)) * Number(this.game.config.height),
      "Each play consumes one Candy\nCandy can be earned through linked games",
      {
        fontFamily: "Poppins",
        color: "#8E8E93",
        fontStyle: "500",
        align: "center",
        lineSpacing:
          (2 / Number(this.game.config.width)) * Number(this.game.config.width),
        fontSize:
          (12 / Number(this.game.config.width)) *
          Number(this.game.config.width),
      }
    );

    guideDialog.addMultiple([
      background,
      dialog,
      dialogTitle,
      closeImage,
      guideTitle,
      guideImage,
      gameGuideText,
      guideText,
    ]);

    closeImage.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
      guideDialog.setVisible(false);
    });
  }

  showErrorDialog() {
    const errorDialog = this.make.group({});

    const background = this.add
      .rectangle(0, 0)
      .setFillStyle(0x000000, 0.5)
      .setOrigin(0)
      .setSize(Number(this.game.config.width), Number(this.game.config.height));

    const dialog = this.add
      .graphics()
      .fillStyle(0x2c2937, 1)
      .fillRoundedRect(
        (32 / Number(this.game.config.width)) * Number(this.game.config.width),
        (299 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        (325 / Number(this.game.config.width)) * Number(this.game.config.width),
        (247 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        10
      );

    const errorImage = this.add
      .image(
        Number(this.game.config.width) / 2 - 41 / 2,
        (339 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "ErrorImage"
      )
      .setOrigin(0)
      .setDisplaySize(
        (41 / Number(this.game.config.width)) * Number(this.game.config.width),
        (50 / Number(this.game.config.height)) * Number(this.game.config.height)
      );

    const clostButton = this.add
      .image(
        Number(this.game.config.width) / 2 - 325 / 2,
        (495 / Number(this.game.config.height)) *
          Number(this.game.config.height),
        "CloseButton"
      )
      .setInteractive()
      .setOrigin(0)
      .setDisplaySize(
        (325 / Number(this.game.config.width)) * Number(this.game.config.width),
        (51 / Number(this.game.config.height)) * Number(this.game.config.height)
      );

    const failText = this.add.text(
      (180 / Number(this.game.config.width)) * Number(this.game.config.width),
      (409 / Number(this.game.config.height)) * Number(this.game.config.height),
      "Fail",
      {
        color: "#FFFFFF",
        fontStyle: "600",
        fontFamily: "Poppins",
        fontSize:
          (16 / Number(this.game.config.width)) *
          Number(this.game.config.width),
      }
    );

    const errorText = this.add.text(
      (137 / Number(this.game.config.width)) * Number(this.game.config.width),
      (449 / Number(this.game.config.height)) * Number(this.game.config.height),
      "Not enough Candy",
      {
        color: "#8E8E93",
        fontStyle: "500",
        fontFamily: "Poppins",
        fontSize:
          (12 / Number(this.game.config.width)) *
          Number(this.game.config.width),
      }
    );

    errorDialog.addMultiple([
      background,
      dialog,
      errorImage,
      clostButton,
      failText,
      errorText,
    ]);

    clostButton.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
      errorDialog.setVisible(false);
    });
  }

  showRewardDialog(rarityObject: any) {
    const rewardDialog = this.make.group({});

    const background = (
      ComponentUtil.getInstance().drawShape(
        this,
        ShapeType.Rectangle,
        0,
        0
      ) as Phaser.GameObjects.Rectangle
    )
      .setFillStyle(0x000000, 0.5)
      .setOrigin(0)
      .setSize(
        ScreenUtil.getInstance().WIDTH_SCREEN,
        ScreenUtil.getInstance().HEIGHT_SCREEN
      );

    const dialog = (
      ComponentUtil.getInstance().drawShape(
        this,
        ShapeType.Graphics,
        0,
        0
      ) as Phaser.GameObjects.Graphics
    )
      .fillStyle(0x2c2937, 1)
      .fillRoundedRect(
        ScreenUtil.getInstance().getDimensitionHorizontal(32),
        ScreenUtil.getInstance().getDimensitionVertical(228),
        ScreenUtil.getInstance().getDimensitionHorizontal(325),
        ScreenUtil.getInstance().getDimensitionVertical(388),
        10
      );

    const confirmButton: any = ComponentUtil.getInstance()
      .drawComponent(
        this,
        ComponentType.Image,
        "ConfirmButton",
        "",
        32,
        565,
        325,
        51
      )
      ?.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        rewardDialog.setVisible(false);
      });

    const congratsText: any = (ComponentUtil.getInstance().drawComponent(
      this,
      ComponentType.Text,
      "",
      `Congrats On Earning A ${rarityObject.rarityName} NFT!`,
      0,
      491,
      0,
      0,
      16,
      "600"
    ) as Phaser.GameObjects.Text).setAlign('center');
    
    congratsText.setX(ScreenUtil.getInstance().WIDTH_SCREEN / 2 - congratsText.displayWidth / 2,);
    

    const checkOnPageText: any = ComponentUtil.getInstance().drawComponent(
      this,
      ComponentType.Text,
      "",
      "Check It On The NFT Page.",
      115,
      519,
      0,
      0,
      12,
      "500",
      "#8E8E93"
    );

    const rarityImage: any = ComponentUtil.getInstance().drawComponent(
      this,
      ComponentType.Image,
      rarityObject.image,
      "",
      112,
      252,
      165,
      213
    );

    rewardDialog.addMultiple([
      background,
      dialog,
      confirmButton,
      congratsText,
      checkOnPageText,
      rarityImage,
    ]);

    confirmButton.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
      rewardDialog.destroy(true);
    });
  }

  create() {
    this.editorCreate();
  }
}

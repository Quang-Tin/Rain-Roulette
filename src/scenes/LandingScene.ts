import { ComponentType } from "../utils/enum/Enum";
import ComponentUtil from "../utils/ComponentUtil";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("LandingScene");
  }

  editorCreate(): void {
    this.cameras.main.setBackgroundColor("#1C1C1E");

    ComponentUtil.getInstance().drawComponent(
      this,
      ComponentType.Image,
      "BackgroundTitle",
      "",
      Number(this.game.config.width) / 2 - (390 / 2),
      0,
      390,
      107
    );

    ComponentUtil.getInstance().drawComponent(
      this,
      ComponentType.Image,
      "LandingLogo",
      "",
      20,
      51,
      64,
      51
    );

    ComponentUtil.getInstance().drawComponent(
      this,
      ComponentType.Image,
      "LetterBox",
      "",
      293,
      62,
      32,
      28
    );

    ComponentUtil.getInstance().drawComponent(
      this,
      ComponentType.Image,
      "HamburgerButton",
      "",
      345,
      62,
      25,
      23
    );

    ComponentUtil.getInstance().drawComponent(
      this,
      ComponentType.Image,
      "CandyBalaneLanding",
      "",
      25,
      132,
      155,
      36
    );

    ComponentUtil.getInstance().drawComponent(
      this,
      ComponentType.Image,
      "NFTCandyBalaneLanding",
      "",
      210,
      129,
      155,
      36
    );

    ComponentUtil.getInstance().drawComponent(
      this,
      ComponentType.Image,
      "RankTable",
      "",
      0,
      233,
      390,
      326
    );

    ComponentUtil.getInstance().drawComponent(
      this,
      ComponentType.Image,
      "Banner",
      "",
      20,
      193,
      350,
      80
    );

    ComponentUtil.getInstance().drawComponent(
      this,
      ComponentType.Image,
      "SeasonBanner",
      "",
      20,
      579,
      350,
      70
    );

    ComponentUtil.getInstance().drawComponent(
      this,
      ComponentType.Image,
      "SeasonName",
      "",
      253,
      667,
      137,
      41
    );

    ComponentUtil.getInstance().drawComponent(
      this,
      ComponentType.Text,
      "",
      "Mini Game",
      20,
      679,
      0,
      0,
      18,
      "800"
    );

    ComponentUtil.getInstance().drawComponent(
      this,
      ComponentType.Image,
      "MiniGame",
      "",
      20,
      726,
      103,
      103
    );

    ComponentUtil.getInstance()
      .drawComponent(
        this,
        ComponentType.Image,
        "MiniGame",
        "",
        144,
        726,
        103,
        103
      )
      ?.setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.scene.start("MainScene");
      });

    ComponentUtil.getInstance().drawComponent(
      this,
      ComponentType.Image,
      "MiniGame",
      "",
      267,
      726,
      103,
      103
    );
  }

  create() {
    this.editorCreate();
  }
}

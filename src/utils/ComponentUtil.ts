import ScreenUtil from "./ScreenUtil";
import { ComponentType, ShapeType } from "./enum/Enum";

export default class ComponentUtil {
  private static instance: ComponentUtil | null = null;

  static getInstance(): ComponentUtil {
    if (ComponentUtil.instance === null) {
      ComponentUtil.instance = new ComponentUtil();
    }

    return ComponentUtil.instance;
  }

  drawComponent(
    scene: Phaser.Scene,
    type: ComponentType,
    texture: string = "",
    text: string = "",
    x: number,
    y: number,
    width: number,
    height: number,
    fontSize: number = 0,
    fontStyle: string | undefined = undefined,
    textColor: string = "#FFFFFF"
  ) {
    switch (type) {
      case ComponentType.Image:
        return scene.add
          .image(
            ScreenUtil.getInstance().getDimensitionHorizontal(x),
            ScreenUtil.getInstance().getDimensitionVertical(y),
            texture
          )
          .setOrigin(0)
          .setDisplaySize(
            ScreenUtil.getInstance().getDimensitionVertical(width),
            ScreenUtil.getInstance().getDimensitionVertical(height)
          );

      case ComponentType.Text:
        return scene.add.text(
          ScreenUtil.getInstance().getDimensitionHorizontal(x),
          ScreenUtil.getInstance().getDimensitionVertical(y),
          text,
          {
            color: textColor,
            fontFamily: "Poppins",
            fontStyle: fontStyle,
            fontSize: ScreenUtil.getInstance().getDimensitionHorizontal(fontSize),
          }
        );
      default:
        return null;
    }
  }

  drawShape(scene: Phaser.Scene, type: ShapeType, x: number, y: number) {
    switch (type) {
      case ShapeType.Graphics:
        return scene.add.graphics();
      case ShapeType.Rectangle:
        return scene.add.rectangle(
          ScreenUtil.getInstance().getDimensitionHorizontal(x),
          ScreenUtil.getInstance().getDimensitionVertical(y)
        );
    }
  }

  
}

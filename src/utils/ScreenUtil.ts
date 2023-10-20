export default class ScreenUtil {
  private static instance: ScreenUtil | null = null;

  WIDTH_SCREEN: number = 390 ; // viewport_width_iphone_14
  HEIGHT_SCREEN: number = 844; // viewport_height_iphone_14

  static getInstance(): ScreenUtil {
    if (ScreenUtil.instance === null) {
        ScreenUtil.instance = new ScreenUtil();
    }
    return ScreenUtil.instance;
  }



  getDimensitionHorizontal(value: number): number {
    return Math.round(
      (value / this.WIDTH_SCREEN) *
      this.WIDTH_SCREEN
    );
  }

  getDimensitionVertical(value: number): number {
    return Math.round(
      (value / this.HEIGHT_SCREEN) *
      this.HEIGHT_SCREEN
    );
  }
}
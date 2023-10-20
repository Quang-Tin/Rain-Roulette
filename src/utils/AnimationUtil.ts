export default class AnimationUtil {
  private static instance: AnimationUtil | null = null;

  static getInstance(): AnimationUtil {
    if (AnimationUtil.instance === null) {
      AnimationUtil.instance = new AnimationUtil();
    }

    return AnimationUtil.instance;
  }

  spinAnimation(
    scene: Phaser.Scene,
    target: any,
    onCompleteHandle: (tween: Phaser.Tweens.Tween) => void,
    rewardDegrees: any
  ) {
    const rounds = 10;

    scene.tweens.add({
      targets: target,
      angle: 360 * rounds + rewardDegrees,
      ease: Phaser.Math.Easing.Quartic.Out,
      duration: 2000,
      onComplete: onCompleteHandle,
    });
  }

}

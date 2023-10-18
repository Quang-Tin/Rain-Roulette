import Phaser from "phaser";
import WebFontLoader from 'webfontloader'

const FONT_NAME = [`Poppins:wght@300;700&display=swap`];
const GOOGLE_FONT_URL = "https://fonts.googleapis.com/css2";

export default class WebFontFile extends Phaser.Loader.File {
  fontNames: string[];
  service: string;

  onFontLoaded!: () => void;

  constructor(
    loader: Phaser.Loader.LoaderPlugin,
    onFontLoaded: () => void,
    service: string = "google"
  ) {
    super(loader, {
      type: "webfont",
      key: FONT_NAME.toString(),
    });

    this.fontNames = FONT_NAME;
    this.service = service;
    this.onFontLoaded = onFontLoaded;
  }

  load(): void {
    const config: WebFontLoader.Config = {
      active: () => {
        this.loader.nextFile(this, true);
      },

      fontloading: this.onFontLoaded
    };

    switch (this.service) {
      case "google":  
        config.google = {
          api: GOOGLE_FONT_URL,
          families: this.fontNames,
        };
        break;

      default:
        throw new Error("Unsupported font service");
    }

    WebFontLoader.load(config);
  }
}
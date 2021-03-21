import { Item } from "./item";
import { PhotoOrientation } from "./photoOrientation";

export class Picture extends Item {
  static photoOrientation = PhotoOrientation;
  private _orientation: PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation) {
    super(id, title);
    this._orientation = orientation;
  }

  public titleToString() {
    return `title ${this._title}`;
  }
}

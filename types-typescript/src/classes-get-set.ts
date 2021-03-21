export {};
class Picture {
  private _id: number;
  private _title: string;
  private _orientation: PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation) {
    this._id = id;
    this._title = title;
    this._orientation = orientation;
  }
  get id() {
    return this._id;
  }
  set id(id: number) {
    this._id = id;
  }

  public titleToString() {
    return `title ${this._title}`;
  }
}
const picture = new Picture(1, "test", PhotoOrientation.Landscape);
console.log(picture.id); // No error, use of get

picture.id = 100; // No error, use of set

export enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
}

// Super class
export abstract class Item {
  protected readonly _id: number;
  protected _title: string;
  constructor(id: number, tittle: string) {
    this._id = id;
    this._title = tittle;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }
}
export class User {
  private album: Album[];

  constructor(
    private id: number,
    private username: string,
    private firstName: string,
    private isPro: boolean
  ) {
    this.album = [];
  }

  addAlbum(album: Album) {
    this.album.push(album);
  }
}

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

export class Album extends Item {
  private _pictures: Picture[];
  constructor(id: number, title: string) {
    super(id, title);
    this._pictures = [];
  }
  public addPicture(picture: Picture) {
    this._pictures.push(picture);
  }
}

const picture = new Picture(1, "test", PhotoOrientation.Landscape);
console.log(picture.id); // No error, use of get

// picture.id = 100; // Error, is ReadOnly

// const item = new Item(1, 'test title') // Error, is an abstract class

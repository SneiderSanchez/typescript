export {};

class Picture {
  public id: number;
  public title: string;
  public orientation: PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.id = id;
    this.title = title;
    this.orientation = orientation;
  }
  public titleToString() {
    return `title ${this.title}`;
  }
}

class Album {
  public id: number;
  public title: string;
  public pictures: Picture[];
  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.pictures = [];
  }
  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const picture = new Picture(1, "test", PhotoOrientation.Landscape);
picture.id = 50;

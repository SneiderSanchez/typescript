export {};
class Picture {
  #id: number;
  #title: string;
  #orientation: PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.#id = id;
    this.#title = title;
    this.#orientation = orientation;
  }
  public titleToString() {
    return `title ${this.#title}`;
  }
}

class Album {
  #id: number;
  #title: string;
  #pictures: Picture[];
  constructor(id: number, title: string) {
    this.#id = id;
    this.#title = title;
    this.#pictures = [];
  }
  public addPicture(picture: Picture) {
    this.#pictures.push(picture);
  }
}

const picture = new Picture(1, "test", PhotoOrientation.Landscape);

// picture.id = 50; // Error

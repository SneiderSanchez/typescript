interface Item {
  id: number;
  title: string;
}

interface Album extends Item {
  // it's like a copy of Item
  description: string;
}

interface Pic extends Item {
  // it's like a copy of Item
  orientation: PhotoOrientation;
}

const album: Album = {
  id: 2,
  title: "Test albun",
  description: "description",
};

const myPicture: Pic = {
  id: 2,
  title: "Test albun",
  orientation: PhotoOrientation.Landscape,
};

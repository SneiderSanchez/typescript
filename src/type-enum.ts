enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;

PhotoOrientation[landscape]; // Landscape

enum PictureOrientation {
  Landscape = 10,
  Portrait,
  Square,
}

console.log(PictureOrientation.Portrait); // 11

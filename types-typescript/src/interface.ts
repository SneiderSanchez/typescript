interface Picture {
  title: string;
  date: Date;
  orientation: PhotoOrientation;
}

function showPicture(picture: Picture) {
  console.log(
    `Picture ${picture.title} created on ${picture.date} with ${picture.orientation} orientation`
  );
}

const myPic = {
  title: "Test title",
  date: new Date(),
  orientation: PhotoOrientation.Landscape,
};

showPicture(myPic);

interface PictureConfig {
  readonly id: number;
  title: string;
  date: Date;
  orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
  const picture = { title: "Default", date: new Date() };
  if (config.title) {
    picture.title = config.title;
  }
  if (config.date) {
    picture.date = config.date;
  }

  return picture;
}

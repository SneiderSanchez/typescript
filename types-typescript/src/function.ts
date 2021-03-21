// with JS
function createPictureJS(title, date, size) {
  // ...
}

type SquareSize = "100x100" | "500x500" | "1000x1000";
// with TS
function createPictureTS(title: string, date: string, size: SquareSize) {
  // ...
}

// optional params

function createPicture(title?: string, date?: string, size?: SquareSize) {
  // ...
}

// flat arrow function

let createPic = (title: string, date: string, size: SquareSize): object => {
  return {
    title,
    date,
    size,
  };
};

// default values

let createPict = (
  title: string,
  date: string,
  size: SquareSize = "100x100"
): object => {
  return {
    title,
    date,
    size,
  };
};

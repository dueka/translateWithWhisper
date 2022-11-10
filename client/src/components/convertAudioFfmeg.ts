var ffmpeg = require("fluent-ffmpeg");

// added expo-build-properties
// yarn add ffmpeg-kit-react-native -lts
export function convertFileFormat(
  file: any,
  destination: any,
  error: any,
  progressing: any,
  finish: any
) {
  ffmpeg(file)
    .on("error", (err: any) => {
      console.log("An error occurred: " + err.message);
      if (error) {
        error(err.message);
      }
    })
    .on("progress", (progress: any) => {
      console.log("Processing: " + progress.targetSize + " KB converted");
      if (progressing) {
        progressing(progress.targetSize);
      }
    })
    .on("end", () => {
      console.log("converting format finished !");
      if (finish) {
        finish();
      }
    })
    .save(destination);
}

convertFileFormat(
  "file.m4a",
  "file.wav",
  function (errorMessage: any) {},
  null,
  function () {
    console.log("success");
  }
);

const fs = require("fs");
const CONST = require("./constants");

// Change file name by using external json data.
fs.readFile(`${CONST.JSON_PATH}file.json`, function (error, data) {
  if (error) {
    console.log(`Failed to read the file: ${error}`);
    return;
  }

  const DATA = JSON.parse(data);

  DATA.map(({ currentName, newName }) => {
    fs.rename(
      `${CONST.IMAGE_PATH}currentName.extension`,
      `${CONST.IMAGE_PATH}newName.extension`,
      function (err) {
        err && console.log(`Failed to rename the file: ${err}`);
      }
    );
  });
});

console.log("End of job");

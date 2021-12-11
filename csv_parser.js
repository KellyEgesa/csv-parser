const csv = require("csv-parser");
const fs = require("fs");

///Parses the file and returns the output
module.exports.Parser = (filePath) =>
  new Promise(function (resolve, reject) {
    const results = [];
    fs.createReadStream(filePath)
      .on("error", function () {
        reject("There was an error reading the file");
      })
      .pipe(csv())
      .on("data", (row) => {
        results.push(row);
      })
      .on("error", function (error) {
        filePath.destroy();
        console.log("csv error");
      })
      .on("end", () => {
        resolve(results);
      });
  });

const { Parser } = require("./csv_parser");
///Calculate
function getMostConsecutiveClient(filePath, numberOfClients) {
  let csvObj = {};
  let fileParser = Parser(filePath);
  fileParser.then(
    function (value) {
      csvObj = csvToObj(value);
      let obj = calculateConsecutiveDays(csvObj);
      let temp = [];
      for (const key in obj) {
        for (let index = obj[key].length - 1; index >= 0; index--) {
          temp.push(obj[key][index]);
        }
      }
      let ans = [];
      for (let index = 0; index < numberOfClients; index++) {
        ans.push(temp.pop());
      }
      console.log(ans);
      process.exit(0);
    },
    (err) => {
      console.log(err);
      process.exit(0);
    }
  );
}

//converts the csv file items to an object
function csvToObj(csvValue) {
  let obj = {};
  for (let index = 0; index < csvValue.length; index++) {
    let id = csvValue[index]["Customer ID"];
    let date = new Date(csvValue[index]["Transaction Date"]).getTime();

    if (!obj[id]) {
      obj[id] = [date];
    } else {
      obj[id].push(date);
    }
  }

  return obj;
}

function calculateConsecutiveDays(csvObj) {
  let obj = {};
  for (let key in csvObj) {
    ///Sort the dates
    csvObj[key] = csvObj[key].sort();
    let consecutiveDays = 0;
    let tempMax = 0;
    for (let index = 1; index < csvObj[key].length; index++) {
      const previousDate = new Date(csvObj[key][index - 1]);
      const currentDate = new Date(csvObj[key][index]);

      const diffTime = Math.abs(currentDate - previousDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays == 1) {
        tempMax += 1;
      } else if (diffDays > 1) {
        tempMax = 0;
      }
      consecutiveDays = Math.max(consecutiveDays, tempMax);
    }

    if (obj[consecutiveDays] != null) {
      let arr = obj[consecutiveDays];
      arr.push(key);
      obj[consecutiveDays] = arr.sort();
    } else {
      obj[consecutiveDays] = [key];
    }
  }
  return obj;
}

module.exports.getMostConsecutiveClient = getMostConsecutiveClient;

const readline = require("readline");
const { getMostConsecutiveClient } = require("./consecutive_days_client");

///Handles inputs and outputs from the terminal
module.exports.inputOutput = readWriteTerminal;

function readWriteTerminal() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Enter path to the csv file\n", function (path) {
    rl.question(
      "Enter the number of clients you want returned\n",
      async function (clients) {
        ///Calculates the clients
        getMostConsecutiveClient(path, clients);
      }
    );
  });

  rl.on("close", function () {
    console.log("\nBYE !!!");
    process.exit(0);
  });
}

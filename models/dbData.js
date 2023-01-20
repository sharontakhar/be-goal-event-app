const fs = require("fs/promises");
const words = fs.readFile("db.json");
console.log(words);

exports.fetchGoals = () => {
  return fs.readFile("./db.json", "utf-8").then((response) => {
    return JSON.parse(response);
  });
};

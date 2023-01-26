const fs = require("fs/promises");
const words = fs.readFile("db.json");
console.log(words);

exports.fetchGoals = () => {
  return fs.readFile("./db.json", "utf-8").then((response) => {
    return JSON.parse(response);
  });
};

exports.createGoal = async (newGoal) => {
  const records = JSON.parse(await fs.readFile("./db.json", "utf-8"));

  records.goals.push(newGoal);

  await fs.writeFile("./db.json", JSON.stringify(records), "utf-8");

  return newGoal;
};

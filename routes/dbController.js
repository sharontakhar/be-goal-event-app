const newGoals = require("../db.json");
const { fetchGoals } = require("../models/dbData");

exports.getEndPoints = (req, res, next) => {
  fetchGoals()
    .then((endpoints) => {
      res.status(200).send(endpoints);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

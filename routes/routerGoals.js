const express = require("express");
const router = express.Router();
const Goals = require("../models/modelGoals");
const fetchGoals = require("./dbController");

//getting all goals
router.get("/", async (req, res) => {
  try {
    const goals = await Goals.find();
    res.json(goals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/goals", async (req, res) => {
  try {
    const newEvent = new Goals({
      title: req.body.title,
    });

    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400);
    console.log(err);
  }
});

module.exports = router;

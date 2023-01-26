const express = require("express");
const router = express.Router();
const { fetchGoals, createGoal } = require("../models/dbData");

//getting all goals
router.get("/goals", async (req, res) => {
  try {
    const goals = await fetchGoals();
    res.json(goals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/goals", async (req, res) => {
  try {
    const newEvent = createGoal({
      title: req.body.title,
      start: req.body.start || Date.now(),
    });

    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400);
    console.log(err);
  }
});

module.exports = router;

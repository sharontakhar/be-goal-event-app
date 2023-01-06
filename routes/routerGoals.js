const express = require("express");
const router = express.Router();
const Goals = require("../models/modelGoals");

//getting all goals
router.get("/", async (req, res) => {
  try {
    const goals = await Goals.find();
    res.json(goals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//creating one goal
router.post("/goals", async (req, res) => {
  const goals = new Goals({
    title: req.body.title,
    start: req.body.start,
  });
  try {
    const newGoals = await goals.save();
    res.status(201).json(newGoals);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//delete goal
// router.delete("/:id", async (req, res) => {
//   try {
//     await res.goals.remove();
//     res.json({ message: "Deleted Goals" });
//   } catch (err) {
//     res.status(500).json({ message: "Deleted Goal/event" });
//   }
// });

module.exports = router;

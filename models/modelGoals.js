const mongoose = require("mongoose");

const goalsSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  start: { type: Date, required: true, default: Date.now },
});

module.exports = mongoose.model("Goals", goalsSchema);

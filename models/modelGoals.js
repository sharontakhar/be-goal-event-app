const goalsSchema = new Schema({
  id: { type: Number, required: false },
  title: { type: String, required: true },
  start: { type: Date, required: false, default: Date.now },
});

module.exports = ("Goals", goalsSchema);

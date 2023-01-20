require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const PORT = 8008;
const cors = require("cors");

const { getEndPoints } = require("../routes/dbController");
const { fetchGoals } = require("../models/dbData");
app.use(cors());

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to database"));

app.use(express.json());
const goalsRouter = require("../routes/routerGoals");
app.use("/", goalsRouter);
app.get("/goals", getEndPoints);
app.post("/goals", fetchGoals);
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;

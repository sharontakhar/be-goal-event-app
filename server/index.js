require("dotenv").config();
const express = require("express");
const app = express();

const PORT = 8008;
const cors = require("cors");

app.use(cors());

app.use(express.json());
const goalsRouter = require("../routes/routerGoals");

app.use("/", goalsRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;

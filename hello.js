import express from "express";
import wiki from "./wiki.js";
import logger from "morgan"
const app = express();
const port = 3000;

app.use(logger("dev"));
app.use("/wiki", wiki)
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

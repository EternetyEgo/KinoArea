const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/test")
  .then(() => {
    console.log("mongodb running ");
  })
  .catch(() => {
    console.log("mongond not");
  });

app.get("/", (req, res) => [res.send("salom")]);

const PORT = process.env.PORT || 2077;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

const express = require("express");
const app = express();
const importData = require("./data.json");
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req, res) => {
  res.send(importData);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

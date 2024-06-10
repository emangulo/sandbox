const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/app", (req, res) => {
  res.render("app");
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});

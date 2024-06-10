const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/profile", (req, res) => {
  res.render("profile");
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});

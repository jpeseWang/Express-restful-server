const express = require("express"); //commonjs
const path = require("path");
require("dotenv").config();
//import express from "express"; //es modules

const app = express(); //app express
const port = process.env.PORT || 8888; //port
const hostname = process.env.HOST_NAME;

//config template engine
app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");

//routes declarations
app.get("/", (req, res) => {
  res.send("Hello World w leif");
});

app.get("/about", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});

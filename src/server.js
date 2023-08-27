const express = require("express"); //commonjs
const path = require("path");
//import express from "express"; //es modules

const app = express(); //app express
const port = 8081; //port

//config template engine
app.set("views", path.join(__dirname, "./views/"));
app.set("views engine", "ejs");

//routes declarations
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

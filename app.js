//REQUIRED DEPENDENCIES
require("dotenv").config();
const express = require("express");
const app = express();
const hbs = require("hbs");
var path = require('path');



//TEMPLATE ENGINE CONFIG
app.use("/public",express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
hbs.registerPartials(path.join(__dirname + "/views/partials"));
app.use(express.json());


app.get("/", (req, res) => {
  res.render("index");
});

app.get("/english", (req, res, next) => {
  res.render("englishVersion");
});

app.get("/french", (req,res, next)=>{
  res.render("frenchVersion");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
    });

module.exports = app;

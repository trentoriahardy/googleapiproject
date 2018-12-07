// const path = require('path');//loading the express module on our server
const express = require("express"); // creates a new instant of express on our server
const app = express();
require("dotenv").load();
app.set("view engine", "pug");
app.use(express.static(`${__dirname}/public`));

//sets default engine to default to Pug

//Pug coverts all files to HTML, got transfered to
//routes or endpoints


app.get("/", (req, res) => {
  res.render("includes/header.pug")
});


app.get("/maps", (req, res) => {
  res.render("maps.pug", {key: process.env.KEY})//object of variables 
  
  
});

app.get("/youtube", (req, res) => {
  res.render("youtube.pug", {key: process.env.KEY})

});



//to use different key go inside env file and set up key
//ex: process.env.TINY_URL_KEY,

//app.listen(8080, function() {
 // console.log("listening on port 8080");
//});

app.listen(8080);



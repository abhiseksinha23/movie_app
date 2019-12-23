const express = require('express');
const app = express();
const request = require('request');
app.set("view engine", "ejs");
app.get("/", function(req,res){
  res.render("search");
  // res.send("WELCOME TO MOVIE APP");
});
app.get("/result", function(req,res){
  let movie = req.query.movie;
  var url = "http://omdbapi.com/?s=" + movie + "&apikey=thewdb";
  request(url,(error,response,body)=> {
    if(!error && response.statusCode == 200){
      const js = JSON.parse(body);
      res.render("results", {data: js});
    }
  });
});
app.listen(3000, function(){
  console.log("server running!!");
});

/*
step 1: npm init -y   -> package.json
step 2: import "express" library =>  npm i express
step 3: create instance of express => const app = express(); 
step 4: node create_http_server.js 
avoid again and again restart the server use nodemon =>
    1)npm install nodemon
    2)npx nodemon create_http_server.js 

for body parser => npm install body-parser

*/
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.json()); // extract from json

app.get("/", function (req, res) {
  res.send("Hello world");
});
app.get("/next", function (req, res) {
  res.json({
    name: "rishabh",
    num: "7800",
  });
});

app.post("/conversation", function (req, res) {
  res.send({
    msg: "2+2 = 4",
  });
});

app.post("/", function (req, res) {
  console.log(req.body);
  res.send("Hello world");
});

app.listen(port, function () {
  console.log(`server is running on ${port}`);
});

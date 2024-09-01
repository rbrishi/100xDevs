/*
step 1: npm init -y   -> package.json
step 2: import "express" library =>  npm i express
step 3: create instance of express => const app = express(); 
step 4: node create_http_server.js 
*/
const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello world");
});
app.listen(port);

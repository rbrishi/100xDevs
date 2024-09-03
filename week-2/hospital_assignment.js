const express = require("express");
const app = express();

const user = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json()); //need for post

app.get("/", function (req, res) {
  //write logic how many kidney they have and their health
  const johnKidneys = user[0].kidneys;
  const numOfKidneys = johnKidneys.length;
  const numOfHealthyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numOfHealthyKidneys++;
    }
  }
  const numOfUnhealthyKidneys = numOfKidneys - numOfHealthyKidneys;
  res.json({
    numOfKidneys,
    numOfHealthyKidneys,
    numOfUnhealthyKidneys,
  });
});

//user can add kidney
app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  user[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done!",
  });
});
app.listen(3000);

const express = require("express");
const app = express();
app.get("/health-cheackup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;

  if (username != "rishabh" || password != "pass") {
    res.status(400).json({
      msg: "something up with your inputs",
    });
    return;
  }
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({
      msg: "something up with your inputs",
    });
    return;
  }
  res.json({
    msg: "your kidney is fine",
  });
});
app.listen(3000);

//localhost:3000/?n=30&b=10&b=20
//n, a, b are parameters => after '?'
//here n(same name) is mandatory both side   const n = req.query.n;

const express = require("express");
const app = express();

function calculateSum(n) {
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans += i;
  }
  return ans;
}

app.get("/", function (req, res) {
  const n = req.query.n;
  const ans = calculateSum(n);
  res.send("you ans is: " + ans); //here you can't give just res.send(ans);
  //res.send(ans.toString()); 
});
app.listen(3000);

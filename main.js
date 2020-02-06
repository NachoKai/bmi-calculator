const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.get("/bmicalculator", (req, res) =>
  res.sendFile(__dirname + "/bmicalculator.html")
);

app.post("/", (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;
  res.send("The result of the calculations is " + result);
});

app.post("/bmicalculator", (req, res) => {
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height) * 0.1;
  let bmi = weight / (height * height) * 100;

  res.send("Your BMI is  " + bmi.toFixed(2));
});

app.listen(port, () => console.log(`Server is running on port ${port}!`));

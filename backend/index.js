const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const port = parseInt(process.env.PORT, 10) || 9000;

app.use(cors());
app.use(bodyParser.json());

// Import Routes
const carsRoute = require("./routes/cars");

app.use("/cars", carsRoute);

//Routes
app.get("/", (req, res) => {
  res.send("We are on HomePage");
});

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});

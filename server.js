const express = require("express");

const connectDB = require("./config/db");

const bookingRouter = require("./routes");

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(express.json());

app.use("/api", bookingRouter);

app.get("/", (req, res) => {
  res.send("Its working");
});

app.listen(PORT, () => {
  console.log("server is up and running");
});

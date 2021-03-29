const express = require("express");
const server = express();
const portfolioRoutes = require("./routes/portfolios");
const config = require("./config/dev");
const mongoose = require("mongoose");

mongoose.connect(
  config.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("connected to DB");
    }
  }
);

server.get("/test", (req, res) => {
  return res.json({ message: "test is working" });
});

//get end point /api/v1/portfolio
server.use("/api/v1/portfolios", portfolioRoutes);

const PORT = parseInt(process.env.PORT, 10) || 3001;
server.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log("server ready on port:", PORT);
});

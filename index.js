const express = require("express");
const server = express();
const portfolioRoutes = require("./routes/portfolios");

async function runServer() {
  await require("./db").connect();

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
}

runServer();

const express = require("express");
const router = require("./router");
const db = require("./db");
const app = express();
const port = parseInt(process.env.PORT || "2008");

app.use(express.json());
app.use(require("morgan")("combined"));

app.use("/api", router);

app.get("/", (req, res) => {
  return res.status(200).json({
    msg: "alive"
  });
});

app.listen(port, () => {
  db.sequelize.sync().then(() => {
    console.log(`App now running on ${port}`);
  });
});

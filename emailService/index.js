const express = require("express");
const PORT = 8000;
const emailRoute = require("./routes");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/email", emailRoute);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

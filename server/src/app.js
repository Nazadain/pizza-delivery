require("dotenv").config();
const express = require("express");
const fileUpload = require("express-fileupload");
const router = require("./routes/index");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(fileUpload({}));
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const userRouter = require("./src/routes/user.router");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

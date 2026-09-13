import express from "express";
import { configDotenv } from "dotenv";
configDotenv();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  return res.status(200).json({
    status: "success",
    message: "user registered successfully",
    data: {
      name: "Muhammad Alee",
    },
  });
});

app.listen(port, () => {
  console.log(`server is runing on port ${port}`);
});

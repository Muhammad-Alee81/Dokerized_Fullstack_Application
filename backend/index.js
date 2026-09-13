import express from "express";
import { configDotenv } from "dotenv";
configDotenv();

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is rnning on port ${port}`);
});

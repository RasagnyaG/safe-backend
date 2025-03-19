import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

dotenv.config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

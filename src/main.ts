import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const app: Application = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello Typescript with Node.js!");
});
const x = 10;
app.listen(PORT, (): void => {
  console.log(`Server Running here 👉 https://localhost:${PORT}`);
});

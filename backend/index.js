const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./config/db");
const router = require("./router/index");
const PORT = process.env.PORT;

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (_req, res) => {
  res.json({
    message: `Server is running on  ${PORT}`,
  });
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

dbConnect();

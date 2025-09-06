require("dotenv");
const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./config/db");

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

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

dbConnect();

const express = require("express");
const app = express();
const cors = require("cors");
const cookieparser = require("cookie-parser");
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "18kb" }));
app.use(express.static("public"));
app.use(cookieparser());

module.exports = app;

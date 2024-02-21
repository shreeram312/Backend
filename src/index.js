const connectDb = require("./db/index.js");

require("dotenv").config();
connectDb();

console.log("Finally ");

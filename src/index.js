const app = require("./app.js");
const connectDb = require("./db/index.js");

require("dotenv").config();

console.log(process.env.PORT);
connectDb()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is Running on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("error of mongodb" + err);
  });

console.log("Finally started with Models today ");

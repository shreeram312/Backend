const mongoose = require("mongoose");
const { DB_NAME } = require("../constants.js");

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(connectionInstance.connection.host);
    console.log("GOod to go");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDb;

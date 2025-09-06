const mongoose = require("mongoose");
exports.dbConnect = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("db is connected success");
  } catch (error) {
    console.log(error);
  }
};

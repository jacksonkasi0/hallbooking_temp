const mongoose = require("mongoose");

const url =
  "mongodb+srv://thawfeek96:Abc123@cluster0.4svrg.mongodb.net/hall-booking?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(url);
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;

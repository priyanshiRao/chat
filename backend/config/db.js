const mongoose = require("mongoose");
const colors = require("colors");
MONGO_URI ="mongodb+srv://guptakaran123:Karan321@cluster0.wgvh4p4.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      /* useFindAndModify: true, */
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
require("dotenv").config();
const mongoose = require("mongoose");

const connectionString =
  process.env.MONGOOSE_URL +
  ":" +
  process.env.MONGOOSE_PORT +
  "/" +
  process.env.MONGOOSE_DB_NAME;

mongoose.connect("mongodb://" + connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

module.exports = mongoose;

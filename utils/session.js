require("dotenv").config();
const connectMongo = require("connect-mongo");
const expressSession = require("express-session");

const mongoStore = connectMongo(expressSession);

const connect = (connection) => {
  return expressSession({
    secret: process.env.APP_KEY,
    resave: false,
    saveUninitialized: true,
    store: new mongoStore({ mongooseConnection: connection }),
  });
};

module.exports = connect;

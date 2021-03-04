//node_modules import
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

//custom packages
const mongoose = require("./utils/mongoose");
const session = require("./utils/session");
const hbs = require("./utils/hbs");
const locals = require("./utils/locals");

//routes
const webRoute = require("./routes/web");
const apiRoute = require("./routes/api");
const { json } = require("body-parser");

//app
const app = express();

//app middlewares
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(cors());

//app sessions mongodb/sessions
app.use(session(mongoose.connection));

//app routes
app.use(webRoute);
app.use("/api", apiRoute);

//view engine file.hbs
app.engine(
  "hbs",
  hbs.express4({
    partialsDir: __dirname + "/views/partials",
  })
);
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.locals.local = locals;

//server
app.listen(process.env.APP_PORT, process.env.APP_URL, async () => {
  if (process.env.APP_DEBUG == "true") {
    console.log(
      `Server is start : ${process.env.APP_URL}:${process.env.APP_PORT}`
    );
    app.use("/info", (req, res) => {
      res.send("Information has been entered into the console.");
      console.log("MongoDB Connection Information :");
      console.log(mongoose.connection);
    });
  }
});

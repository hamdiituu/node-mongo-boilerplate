const Router = require("express-group-router");

let router = new Router();

router.get("/hello", (req, res) => {
  res.send("api hello2 method");
});

module.exports = router.init();

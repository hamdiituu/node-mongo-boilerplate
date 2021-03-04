const Router = require("express-group-router");

let router = new Router();

const { TestController } = require("../controllers/web");

router.get("/hello", (req, res) => {
  res.send("web hello method");
});

router.get("/test", TestController.index);

module.exports = router.init();

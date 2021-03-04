const TestController = {
  index(req, res) {
    res.render("test/index", { message: "Test Message" });
  },
};

module.exports = TestController;

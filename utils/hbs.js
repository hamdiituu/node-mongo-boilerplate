var hbs = require("express-hbs");

hbs.registerHelper("testHelper", function () {
  return new hbs.SafeString("Test Helper from hbs.js");
});

hbs.registerHelper("helperString", function () {
  return "Test Helper String";
});

module.exports = hbs;

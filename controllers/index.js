const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.send(
    "<h1>Oops! You've entered the barking-mad zone for lost dogs. 🐕</h1><p><Feeling a bit ruff about this? Maybe it's time to leash up and <a href='javascript:history.back()'>go back</a> to the right path!</p>"
  );
});

module.exports = router;

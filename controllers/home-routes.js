const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    console.log("Accessed home route");
    console.log(req.session);
    return res.render("home", { logged_in: req.session.logged_in });
  } catch (error) {
    console.error("Error accessing home route:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/login", async (req, res) => {
  try {
    return res.render("login", { logged_in: req.session.logged_in });
  } catch (error) {
    console.error("Error rendering login:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

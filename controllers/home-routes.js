const router = require("express").Router();
const { BlogPost, User } = require("../models");

router.get("/", async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll({
      include: [User],
    });
    const formattedBlogPostData = blogPostData.map((blogPost) =>
      blogPost.get({ plain: true })
    );
    console.log("Accessed home route");
    console.log(req.session);
    return res.render("home", {
      blogPostData: formattedBlogPostData,
      logged_in: req.session.logged_in,
    });
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

router.get("/dashboard", async (req, res) => {
  try {
    return res.render("dashboard", { logged_in: req.session.logged_in });
  } catch (error) {
    console.error("Error rendering login:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

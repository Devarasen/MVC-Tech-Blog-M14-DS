const router = require("express").Router();
const { BlogPost, User, Comments } = require("../models");
const attachUserData = require("../utils/userData");

router.use(attachUserData);

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
    console.log(formattedBlogPostData);
    return res.render("home", {
      blogPostData: formattedBlogPostData,
      logged_in: req.session.logged_in,
    });
  } catch (error) {
    console.error("Error accessing home route:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/blogPost/:id", async (req, res) => {
  try {
    const blogPostData = await BlogPost.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comments,
          as: "comments", // Make sure this alias matches what you've set in the model relationships
          include: {
            model: User,
            as: "creator",
          },
        },
      ],
    });

    if (!blogPostData) {
      return res.status(404).send("Blog post not found");
    }

    const formattedBlogPostData = blogPostData.get({ plain: true });

    console.log(req.session);
    console.log(formattedBlogPostData);
    return res.render("blogPost", {
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
    if (!req.session.logged_in) {
      res.redirect("/login");
      return;
    }
    const userData = await User.findByPk(req.session.user_id, {
      include: [BlogPost],
    });
    if (!userData) {
      res.status(400).send("User not found");
      return;
    }
    const user = userData.get({ plain: true });
    console.log(user.blogPosts);
    return res.render("dashboard", {
      logged_in: req.session.logged_in,
      name: user.name,
      blogPosts: user.blogPosts,
    });
  } catch (error) {
    console.error("Error rendering dashboard:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;

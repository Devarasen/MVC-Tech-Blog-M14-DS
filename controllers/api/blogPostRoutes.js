const { BlogPost, User } = require("../../models");
const router = require("express").Router();

// Get all BlogPosts
router.get("/", async (req, res) => {
  try {
    const blogPostData = await BlogPost.findAll({ include: [User] });
    res.status(200).json(blogPostData);
  } catch (error) {
    console.error("Error fetching blogpost:", error);
    res.status(500).json(error);
  }
});

// Get one BlogPosts
router.get("/:id", async (req, res) => {
  try {
    const blogPostData = await BlogPost.findByPk(req.params.id, {
      include: [User],
    });
    res.status(200).json(blogPostData);
  } catch (error) {
    console.error("Error fetching blogpost:", error);
    res.status(500).json(error);
  }
});

router.post("/addNew", async (req, res) => {
  try {
    if (!req.session.user_id) {
      res
        .status(401)
        .json({ message: "You need to be logged in to create a post." });
      return;
    }

    console.log("Incoming Data:", req.body);
    const { post_title, contents } = req.body;

    const blogPostData = await BlogPost.create({
      post_title,
      contents,
      author_id: req.session.user_id,
    });
    console.log("Entered BlogPost Data:", blogPostData);
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json(error);
  }
});

module.exports = router;

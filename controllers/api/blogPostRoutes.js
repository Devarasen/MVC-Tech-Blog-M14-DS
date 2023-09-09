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

module.exports = router;

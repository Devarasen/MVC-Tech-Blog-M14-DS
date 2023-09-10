const { Comments, User, BlogPost } = require("../../models");
const router = require("express").Router();

router.post("/addNew", async (req, res) => {
  try {
    if (!req.session.user_id) {
      res
        .status(401)
        .json({ message: "You need to be logged in to add a comment." });
      return;
    }

    console.log("Incoming Data:", req.body);
    const { comment, blogPostId } = req.body;

    if (!comment || !blogPostId) {
      res.status(400).json({ message: "Missing content or blog post ID." });
      return;
    }

    const commentData = await Comments.create({
      comment,
      blogPost_id: blogPostId,
      creator_id: req.session.user_id,
    });
    console.log("Entered Comment Data:", commentData);
    res.status(201).json({ message: "Comment successfully created." });
  } catch (error) {
    console.error("Error:", error);
    res.status(400).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const commentData = await Comments.findAll({
      include: [
        {
          model: User,
          as: "creator", // using the alias you've set up in your associations
          attributes: ["name"],
        },
        {
          model: BlogPost,
          attributes: ["post_title"],
        },
      ],
    });
    res.status(200).json(commentData);
  } catch (error) {
    console.error("Error fetching comment:", error);
    res.status(500).json(error);
  }
});

module.exports = router;

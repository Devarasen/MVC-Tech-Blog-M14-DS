const router = require("express").Router();
const blogPostRoutes = require("./blogPostRoutes");
const userRoutes = require("./userRoutes");
const commentRoutes = require("./commentRoutes");

router.use("/blogPostRoutes", blogPostRoutes);
router.use("/userRoutes", userRoutes);
router.use("/commentRoutes", commentRoutes);

module.exports = router;

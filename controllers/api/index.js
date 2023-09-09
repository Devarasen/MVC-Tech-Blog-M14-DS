const router = require("express").Router();
const blogPostRoutes = require("./blogPostRoutes");
const userRoutes = require("./userRoutes");

router.use("/blogPostRoutes", blogPostRoutes);
router.use("/userRoutes", userRoutes);

module.exports = router;

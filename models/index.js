const BlogPost = require("./BlogPost");
const User = require("./User");

BlogPost.belongsTo(User, {
  foreignKey: "author_id",
});

User.hasMany(BlogPost, {
  foreignKey: "author_id",
  onDelete: "CASCADE",
});

module.exports = { BlogPost, User };

const BlogPost = require("./BlogPost");
const User = require("./User");
const Comments = require("./Comments");

BlogPost.belongsTo(User, {
  foreignKey: "author_id",
});

User.hasMany(BlogPost, {
  foreignKey: "author_id",
  onDelete: "CASCADE",
});

BlogPost.hasMany(Comments, {
  foreignKey: "blogPost_id",
  onDelete: "CASCADE",
});

Comments.belongsTo(BlogPost, {
  foreignKey: "blogPost_id",
});

User.hasMany(Comments, {
  foreignKey: "creator_id",
  onDelete: "CASCADE",
});

Comments.belongsTo(User, {
  foreignKey: "creator_id",
});

module.exports = { BlogPost, User, Comments };

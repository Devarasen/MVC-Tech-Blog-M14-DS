const BlogPost = require("./BlogPost");
const User = require("./User");
const Comments = require("./Comments");

// User associations
User.hasMany(BlogPost, {
  foreignKey: "author_id",
  onDelete: "CASCADE",
});
User.hasMany(Comments, {
  foreignKey: "creator_id",
  as: "comments",
  onDelete: "CASCADE",
});

// BlogPost associations
BlogPost.belongsTo(User, {
  foreignKey: "author_id",
});

BlogPost.hasMany(Comments, {
  foreignKey: "blogPost_id",
  onDelete: "CASCADE",
});

// Comments associations
Comments.belongsTo(User, {
  foreignKey: "creator_id",
  as: "creator",
});
Comments.belongsTo(BlogPost, {
  foreignKey: "blogPost_id",
});

module.exports = { BlogPost, User, Comments };

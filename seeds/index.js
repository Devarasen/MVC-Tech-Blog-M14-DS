const seedBlogPost = require("./blogPost");
const seedUserData = require("./userData");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUserData();
  console.log("\n----- USER DATA SEEDED -----\n");

  await seedBlogPost();
  console.log("\n----- BLOG POSTS SEEDED -----\n");

  process.exit(0);
};

seedAll();

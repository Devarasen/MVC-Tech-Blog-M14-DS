const { BlogPost } = require("../models");

const blogPostData = [
  {
    post_title: "The Importance of Web Optimization",
    contents:
      "Web optimization is crucial for improving website performance, enhancing user experience, and increasing site traffic. It involves various techniques, from content optimization and SEO practices to server-side tweaks...",
    author_name: "Lernantino",
  },
  {
    post_title: "Top 5 Web Development Trends in 2023",
    contents:
      "Web development is an ever-evolving field. As technology advances, new trends emerge, and developers must adapt to stay relevant. In 2023, we've observed a significant shift towards AI-driven websites, immersive 3D graphics, and an emphasis on security...",
  },
];

const seedBlogPost = () => BlogPost.bulkCreate(blogPostData);

module.exports = seedBlogPost;

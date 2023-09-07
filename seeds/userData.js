const { User } = require("../models");

const userData = [
  {
    name: "Lernantino",
    email: "Lernantino@test.com",
    password: "password12345",
  },
  {
    name: "Xandromus",
    email: "Xandromus@test.com",
    password: "password12345",
  },
];

const seedUserData = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUserData;

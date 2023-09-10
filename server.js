const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require("./controllers");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("./config/connection");

const helpers = require("./utils/helpers");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handlebars setup
const hbs = exphbs.create({
  helpers,
  defaultLayout: "main", // This assumes you have a main.handlebars file in your views/layouts folder
  extname: ".handlebars", // This can be .hbs or .handlebars, depending on your preference.
});

app.engine(".handlebars", hbs.engine);
app.set("view engine", ".handlebars");

// Sets up session for cookies and connect to our Sequelize db
const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 30 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(routes);

// Start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});

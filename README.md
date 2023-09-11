# MVC-Tech-Blog-M14-DS

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This project is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. 
The code structure will follow the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.


Heroku deployed link: https://tech-blog-ds-mod16-a30adabc1804.herokuapp.com/

Github Repo: https://github.com/Devarasen/MVC-Tech-Blog-M14-DS

![Screenshot](./public/assets/Project%20Screenshot.PNG)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Dependencies should be installed for code to run properly.

Run `npm install` to install dependencies as specified in package.json for application to run as intended.

Instructions to run the application:

1.  Clone the repository to your local machine.
2.  Open the terminal and navigate to the root directory of the project.
3.  Run `npm install` to install the dependencies.
4.  Create a `.env` file in the root directory of the project. You can refer to `.env.EXAMPLE` as a guide.
5.  Add the following to the `.env` file , replacing the values with your own:

DB_NAME='techblog_db'

DB_PASSWORD='password'

DB_USER='root'

6. Run `mysql -u - root -p` to open the MySQL shell.
7. Run `source db/schema.sql` to create the database.
8. Run `npm run seed` to seed the database.
9. Run `npm start` to start the server.


## Usage

When not logged in:
- This app allows you to view all posts by users without login verification on the home page. 
- If you click on a post from the home page you will be directed to a separate page for the selected blogPost. 
- If you aren't logged in, you wont be given an option to post a comment but will be provided a link to the login page instead.
- Dashboard link will direct you to login page as well if you aren't logged in.


When logged in:
- If you click on a post from the home page you will be directed to a separate page for the selected blogPost and able to leave a comment.
- Able to add new posts and delete/edit previous posts from the dashboard page.
- Able to view all users posts from the dashboard page.



## Credits

Special thanks to all my tutors.

## License

MIT License


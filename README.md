# Portfolio Application 👽

The project is built according to the SPA principle, which is implemented using the Model-View-Controller (MVC) framework. This project is written using HTML, CSS, Vanilla Js, Express, Joi, MySQl and deployed using Fly.io.

## Client Part

The client part is implemented using representations. The project used the Abstract Class principle. The representations of the various "pages" were modeled after the main class. The main manipulation of representations and data takes place in the `index.js` file.

## Server Part

The server part is implemented using Express. Authorization is implemented using Express Session. The main data manipulation takes place in the file `server.js`. Controllers, services, paths are located in the corresponding folders of the domain.

| Description          | Route        | Method | URL pattern                      |
| -------------------- | ------------ | ------ | -------------------------------- |
| Log in               | /login       | POST   | http://127.0.0.1:8080/login      |
| Log out              | /logout      | GET    | http://127.0.0.1:8080/logout/    |
| Get all              | /projects    | GET    | http://127.0.0.1:8080/projects   |
| Get project by id    | /projects:id | GET    | http://127.0.0.1:8080/projects/1 |
| Delete project by id | /projects:id | DELETE | http://127.0.0.1:8080/projects/1 |
| Edit project by id   | /projects:id | PATCH  | http://127.0.0.1:8080/projects/1 |
| Add new project      | /projects:id | POST   | http://127.0.0.1:8080/projects   |

## Database

The server uses a MySQL database as a data source. The database is located on a proxy server that I created. For testing, you can use the `project.sql` database dump.

## Deployment

The project is deployed on the Fly.io platform, which includes two virtual machines.

- For the https://daria-nahorna-portfolio.fly.dev project
- Only available for admin - https://mysql-crud-app.fly.dev/

## Usage

To test the project, you can follow the link https://daria-nahorna-portfolio.fly.dev/

## Acknowledgment

This is a portfolio project that represents my projects as well as knowledge from the course.

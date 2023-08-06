# Portfolio Application 👽

The project is built according to the SPA principle, which is implemented using the Model-View-Controller (MVC) approach. This project is written using HTML, CSS, Vanilla Js, Express, Joi, MySQl and deployed using Fly.io.

## What should be included?

1. Follow the principle of single page application
2. Pages: Home, My work, Bio, Contact, Admin
3. To have responsive design
4. Build Express server
5. Create MySQL db and create connection to it
6. Implement CRUD operations
7. Deploy the app

## Client Part

The client part is implemented using MVC. The views of the various "pages" were inherited after the AbstractView class. The main manipulation of representations and data takes place in the `index.js` file.

## Server Part

The server part is implemented using Express. Authorization is implemented using Express Session. The main data manipulation takes place in the file `server.js`. Controllers, services, routes are located in the corresponding folders by the domain.

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

The server uses a MySQL database as a data source. The database is located on a proxy server. `project.sql` is a database dump. The database contains tables for projects, users, tags and sessions.

## Deployment

The project is deployed on the Fly.io.

- For the https://daria-nahorna-portfolio.fly.dev project
- Only available for admin - https://mysql-crud-app.fly.dev/

## Testing

To test the project, you can follow the link https://daria-nahorna-portfolio.fly.dev/

## Usage

1. Clone repo
2. Run sql script from `projects.sql' in the console or Workbench to create a db.
3. Create user for for your application, e.g. `CREATE USER  ‘foouser’@‘localhost’ IDENTIFIED BY ‘foopassword’;`
4. Make sure your user can make CRUD operations, e.g `GRANT ALL PRIVILEGES ON *.foodb TO ‘foouser’@‘localhost’;`
5. Make a copy of `.env.sample` and rename it as `.env`.
6. put your database user name into MYSQL_USER and
7. put your database user password into MYSQL_PASSWORD
8. Run `npm install` to instal dependencies
9. Run `npm run start` to start project locally
10. Open in browser 127.0.0.1:8080

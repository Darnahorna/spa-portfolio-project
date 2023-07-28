import { getData } from "../db.js";

export async function getAll(req, res) {
  const userId = await getUser(req, res);
  const statement = "SELECT * FROM projects.project WHERE userId=?;";
  const projects = await getData(res, statement, [userId]);
  return projects;
}

export async function getById(req, res, id) {
  const userId = await getUser(req, res);
  const statement =
    "SELECT * FROM projects.project WHERE idProject=? AND userId=?;";
  const project = await getData(res, statement, [id, userId]);
  return project;
}

export async function deleteProject(res, id) {
  const statement = "DELETE FROM projects.project WHERE idProject = ?;";
  await getData(res, statement, [id]);
}

export async function addNew(res, project) {
  const statement =
    "INSERT INTO projects.project (name, description, date, link, img, userId) VALUES (?,?,?,?,?,?);";
  await getData(res, statement, [
    project.name,
    project.description,
    project.date,
    project.link,
    project.img,
    project.userId,
  ]);
}

export async function updateProject(res, id, project) {
  const statement =
    "UPDATE projects.project SET name= ?, description = ?, date = ?, link = ?, img = ?, userId = ? WHERE idProject = ?;";
  await getData(res, statement, [
    project.name,
    project.description,
    project.date,
    project.link,
    project.img,
    project.userId,
    id,
  ]);
}
export async function getUser(req, res) {
  const statement = "SELECT data FROM projects.sessions WHERE session_id=?;";
  const foundSession = await getData(res, statement, [req.sessionID]);
  return JSON.parse(foundSession[0].data).user.idUser;
}

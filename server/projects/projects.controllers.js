import * as projectServices from "./projects.services.js";
import { getData } from "../db.js";

// Function to handle the server response
function sendResponse(res, status, data) {
  res.status(status).json({ data });
}

// Function to handle errors and send an error response
function sendErrorResponse(res, status, message) {
  res.status(status).json({ error: message });
}

export async function getAllProjects(req, res, next) {
  try {
    const projects = await projectServices.getAll(req, res);
    sendResponse(res, 200, projects);
  } catch (error) {
    console.error("Error occurred during getting all projects:", error.message);
    sendErrorResponse(res, 500, "Server error");
  }
}

export async function getProjectById(req, res, next) {
  try {
    const id = req.params.id;
    const project = await projectServices.getById(req, res, id);
    if (project.length === 0) {
      return sendErrorResponse(res, 404, "Project not found");
    }
    sendResponse(res, 200, project[0]);
  } catch (error) {
    console.error(
      "Error occurred during getting project by ID:",
      error.message
    );
    sendErrorResponse(res, 500, "Server error");
  }
}

export async function deleteProjectById(req, res) {
  try {
    const id = req.params.id;
    await projectServices.deleteProject(res, id);
    res.sendStatus(204);
  } catch (error) {
    console.error(
      "Error occurred during deleting project by ID:",
      error.message
    );
    sendErrorResponse(res, 500, "Server error");
  }
}

export async function updateProjectById(req, res) {
  try {
    const id = req.params.id;
    const fieldsToUpdate = req.body; // Specify the fields and their updated values here

    let obj = {};
    const projectToUpdateArr = await projectServices.getById(req, res, id);

    const projectToUpdate = await projectToUpdateArr[0];

    if (!projectToUpdate) {
      return sendErrorResponse(res, 404, "Project not found");
    }

    let requestKeys = Object.keys(projectToUpdate);

    for (const key of requestKeys) {
      if (fieldsToUpdate.hasOwnProperty(key)) {
        obj[key] = fieldsToUpdate[key]; // Update the field with the new value from fieldsToUpdate
      } else {
        obj[key] = projectToUpdate[key];
      }
    }

    await projectServices.updateProject(res, id, obj);
    sendResponse(res, 200);
  } catch (error) {
    console.error("Error occurred during updating:", error.message);
    sendErrorResponse(res, 500, "Server error");
  }
}

export async function createProject(req, res) {
  try {
    const body = req.body;

    await projectServices.addNew(res, body);

    const projects = await projectServices.getAll(req, res);

    sendResponse(res, 200, projects);
  } catch (error) {
    console.error("Error occurred during adding:", error.message);
    sendErrorResponse(res, 500, "Server error");
  }
}
export async function getUserBySession(req, res) {
  if (!req.sessionID) {
    console.log("session is not found");
  }
  const userId = await projectServices.getUser(req, res);
  sendResponse(res, 200, userId);
}

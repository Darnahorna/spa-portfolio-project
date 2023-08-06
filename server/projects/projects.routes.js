import express from "express";
import * as authController from "./../auth/auth.controllers.js";
import * as projectController from "./projects.controllers.js";
import { validate } from "../utils/validate.js";
import { schema } from "./projects.schema.js";

export const router = express.Router();

router.get(
  "/projects",
  authController.authenticate,
  projectController.getAllProjects
);

router.get(
  "/projects/:id",
  authController.authenticate,
  projectController.getProjectById
);
router.delete(
  "/projects/:id",
  authController.authenticate,
  projectController.deleteProjectById
);
router.patch(
  "/projects/:id",
  authController.authenticate,
  projectController.updateProjectById
);
router.post(
  "/projects",
  authController.authenticate,
  validate(schema),
  projectController.createProject
);

router.get(
  "/user",
  authController.authenticate,
  validate(schema),
  projectController.getUserBySession
);

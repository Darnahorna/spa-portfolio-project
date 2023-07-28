import express, { Router } from "express";

import { schema } from "./auth.schema.js";
import { validate } from "../utils/validate.js";
import * as controller from "./auth.controllers.js";

export const router = Router();

router.post(
  "/login",
  validate(schema),
  express.urlencoded({ extended: true }),
  controller.handleLogin
);

router.get("/logout", controller.logout);

router.get("/auth", controller.authenticate, (req, res) => {
  const isAuthenticated = true;
  res.set("Cache-Control", "no-store"); // Disables caching in most modern browsers
  res.set("Expires", "0");
  // Set the response status to 200 (OK) to ensure it's not a 304 response
  res.status(200).json({ isAuthenticated: isAuthenticated });
});

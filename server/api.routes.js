import { Router } from "express";

import { router as projectRouter } from "./projects/projects.routes.js";
import { router as authRouter } from "./auth/auth.routes.js";

export const router = Router();

router.use("/", projectRouter);
router.use("/", authRouter);

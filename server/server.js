import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import session from "express-session";
import { router } from "./api.routes.js";
import { sessionStore } from "./db.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename).split("\\");
__dirname.pop();
export const dirname = __dirname.join("\\");

dotenv.config({ path: path.join(dirname, "./.env") });

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      path: "/",
      httpOnly: false,
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
app.use(cors());
app.use("/", router);
app.use("/static", express.static(path.resolve(dirname, "frontend", "static")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

import bcrypt from "bcryptjs";
import { getData } from "../db.js";

export async function handleLogin(req, res, next) {
  try {
    const payload = req.body;

    if (!payload.email || !payload.password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    const statement = "SELECT * FROM projects.user WHERE email=?;";
    const foundUser = await getData(res, statement, [payload.email]);

    if (!foundUser[0]) {
      return res.sendStatus(401); // Unauthorized
    }

    const match = await bcrypt.compare(payload.password, foundUser[0].password);

    if (match) {
      return req.session.regenerate((err) => {
        if (err) {
          return next(err);
        }

        req.session.save((err) => {
          if (err) {
            return next(err);
          }
          req.session.user = foundUser[0];

          res.redirect("/admin");
        });
      });

      //  console.log("Loged in");
    } else {
      console.log("Password does not match! Login failed.");
      res.sendStatus(401); // Unauthorized
    }
  } catch (error) {
    console.error("Error occurred during login:", error.message);
    res.sendStatus(500); // Internal Server Error
  }
}

export const logout = async (req, res, next) => {
  const statement = "DELETE FROM `projects`.`sessions` WHERE session_id = ?;";
  const sessionToDelete = await getData(res, statement, [req.sessionID]);
  if (!sessionToDelete[0]) {
    res.status(404);
  }
  req.session.destroy(function () {
    res.redirect("/");
  });
  // console.log("Logged out");
};

export async function authenticate(req, res, next) {
  try {
    // console.log(req.sessionID);
    if (!req.sessionID) {
      console.log("session is not found");
    }
    const statement = "SELECT * FROM projects.sessions WHERE session_id=?;";
    const foundSession = await getData(res, statement, [req.sessionID]);

    if (foundSession.length > 0) {
      // console.log("Authenticated");
      next();
    } else {
      // console.log("NOT Authenticated");
      res.redirect("/login");
    }
  } catch (err) {
    console.log(err);
  }
}

// MySQL connection setup
import mysql from "mysql2/promise";
import dotenv from "dotenv";
import MySQLStoreFactory from "express-mysql-session";
import session from "express-session";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename).split("\\");
__dirname.pop();
const dirname = __dirname.join("\\");

dotenv.config({ path: path.join(dirname, "./.env") });

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.DBUSER,
  database: process.env.DB,
  password: process.env.PASSWORD,
});

// Prepare the connection
async function prepareConnection() {
  const connection = await pool.getConnection();
  return connection;
}

// Execute a prepared statement
async function executeStatement(connection, statement, params = null) {
  const preparedStatement = await connection.prepare(statement);
  const [res] = await preparedStatement.execute(params);
  return res;
}

// Unprepare the connection
async function unprepareConnection(connection) {
  connection.release();
}

// Handle errors
function handleError(res, error) {
  res.status(404).json({ error: error });
}
// Get data from the database
export async function getData(res, statement, params) {
  const connection = await prepareConnection();
  try {
    const res = await executeStatement(connection, statement, params);
    return res;
  } catch (error) {
    handleError(res, error);
  } finally {
    await unprepareConnection(connection);
  }
}

const MySQLStore = MySQLStoreFactory(session);
export const sessionStore = new MySQLStore(
  {
    expiration: 86400000, // Session will expire after 24 hours (adjust as needed)
    createDatabaseTable: true, // If the sessions table doesn't exist, create it automatically
    schema: {
      tableName: "sessions", // Table name to store the sessions
      columnNames: {
        session_id: "session_id",
        expires: "expires",
        data: "data",
      },
    },
  },
  pool
);

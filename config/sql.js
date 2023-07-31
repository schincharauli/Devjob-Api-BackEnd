import pgk from "pg";
const { Pool } = pgk;
import dotenv from "dotenv";

const pool = new Pool({
  host: process.env.POSTGRE_HOST,
  port: process.env.POSTGRE_PORT,
  database: process.env.POSTGRE_DATABASE,
  user: process.env.POSTGRE_USER,
  password: process.env.POSTGRE_PASSWORD,
});

export const CreateImageTable = async () => {
  return await pool.query("");
};

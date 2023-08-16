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

export const createImageTable = async () => {
  return await pool.query(`
  CREATE TABLE IF NOT EXISTS job_positions(
    id SERIAL PRIMARY KEY, 
    company TEXT, 
    logo TEXT, 
    logoBackground TEXT, 
    position TEXT,
    postedAt TEXT,
    contract TEXT,
    location TEXT,
    website TEXT,
    apply TEXT,
    description TEXT
)`);
};

export default pool;

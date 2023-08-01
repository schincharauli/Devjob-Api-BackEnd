import pool from "../config/sql.js";

export const getAllDescriptions = async (_, res) => {
  try {
    const resultQuery = await pool.query("SELECT * FROM job_positions");
    const rows = resultQuery.rows;
    return response.status(200).json(rows);
  } catch (error) {
    return response.status(401).json(error);
  }
};

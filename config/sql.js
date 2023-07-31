import pgk from "pg";
const { Pool } = pgk;

const pool = new Pool({
  host: "dpg-cj3mcut9aq0e0q00a7vg-a",
  port: 5432,
  Database: "devjobs_api",
  user: "devjobs_api_user",
  password: "9h5kJYkVzL18902mucAqzNkw4Qq0yQ89",
});

export const CreateImageTable = async () => {};

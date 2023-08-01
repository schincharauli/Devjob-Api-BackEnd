import express from "express";
import createImageTable from "./config/sql.js";

const app = express();

app.use("/images", express.static("public/images"));

async function init() {
  try {
    await createImageTable();
    serverStart();
  } catch (error) {}
}

init();

function serverStart() {
  app.listen(process.env.PORT || 3000);
}

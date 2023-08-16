import express from "express";
import { createImageTable } from "./config/sql.js";

const app = express();

app.use("/images", express.static("public/images"));

app.get("/jobs/:size/:page", async (req, res) => {
  const size = parseInt(req.params.size);
  const page = parseInt(req.params.page);

  res.json({ size, page });
});

async function init() {
  try {
    await createImageTable();
    serverStart();
  } catch (error) {
    console.log(error);
  }
}

init();

function serverStart() {
  app.listen(process.env.PORT || 3000);
}

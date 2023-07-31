import express from "express";

const app = express();

app.use("/images", express.static("public/images"));

app.listen(3000);

import express from "express";

import { getAllDescriptions } from "../controllers/jobs-controller.js";
const jobsRouter = express.Router();

jobsRouter.get("/", getAllDescriptions);

export default jobsRouter;

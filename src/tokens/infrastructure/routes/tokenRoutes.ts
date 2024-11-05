import express from "express";
import { createTokenController, validateTokenController } from "../dependencies";

export const tokenRoutes = express.Router();

tokenRoutes.post("/", createTokenController.handle.bind(createTokenController));
tokenRoutes.post("/validate", validateTokenController.handle.bind(validateTokenController));
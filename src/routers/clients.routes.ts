import { Router } from "express";
import { getClientsList } from "../controllers/clients.controllers.js";

export const clientRoutes = Router();

clientRoutes.post("/client");
clientRoutes.get("/client", getClientsList);
clientRoutes.delete("/client/:id");
clientRoutes.patch("/client/:id");

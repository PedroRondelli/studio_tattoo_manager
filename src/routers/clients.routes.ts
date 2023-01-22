import { Router } from "express";
import { getClientsList, postClient } from "../controllers/clients.controllers.js";

export const clientRoutes = Router();

clientRoutes.get("/client", getClientsList);
clientRoutes.post("/client",postClient);
clientRoutes.delete("/client/:id");
clientRoutes.patch("/client/:id");

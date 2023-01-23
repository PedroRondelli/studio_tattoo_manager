import { Response, Request } from "express";
import { Client } from "../protocols/client.protocol.js";
import { clientSchema } from "../schemas/client.schema.js";
import {
  getClientList,
  makeReservation,
} from "../repositories/clients.repository.js";

export async function getClientsList(req: Request, res: Response) {
  try {
    const { rows } = await getClientList();
    rows.reverse();
    return res.send(rows);
  } catch (error) {
    return res.send(error);
  }
}

export async function postClient(req: Request, res: Response) {
  const validation = clientSchema.validate(req.body, { abortEarly: false });
  if (validation.error) {
    res.send(validation.error.message);
  }
  const { name, description, date, payment } = req.body as Client;
  try {
    await makeReservation(name, description, date, payment);
    res.sendStatus(200);
  } catch (error) {
    res.send(error);
  }
}

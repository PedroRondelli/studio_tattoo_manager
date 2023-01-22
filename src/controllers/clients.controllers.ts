import {
  getClientList,
  makeReservation,
} from "../repositories/clients.repository.js";
import { Response, Request } from "express";
import { Client } from "../protocols/client.protocol.js";

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
  const { name, description, date, payment } = req.body as Client;
  try {
    await makeReservation(name, description, date, payment);
    res.sendStatus(200);
  } catch (error) {
    res.send(error);
  }
}

import { getClientList } from "../repositories/clients.repository.js";

export async function getClientsList(req, res) {
  try {
    const { rows } = await getClientList();
    return res.send(rows);
  } catch (error) {
    return res.send(error);
  }
}

import { connectionDb } from "../database/db.js";

export function getClientList() {
  return connectionDb.query("SELECT * FROM clients");
}

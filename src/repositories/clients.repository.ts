import { connectionDb } from "../database/db.js";

export function getClientList() {
  return connectionDb.query("SELECT * FROM clients");
}

export function makeReservation(
  name: string,
  description: string,
  date: string | Date,
  payment: string
) {
  return connectionDb.query(
    "INSERT INTO clients(name,description,date,payment) VALUES($1,$2,$3,$4)",
    [name, description, date, payment]
  );
}

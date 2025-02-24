import { randomUUID } from "node:crypto";

export function create({ request, response, database }) {
  const { equipment, description, user_name } = request.body;

  const ticket = {
    id: randomUUID(),
    equipment,
    description,
    user_name,
    status: "open",
    created_at: new Date(),
    updated_at: new Date(),
  };

  database.insert("tickets", ticket);

  return response.writeHead(201).end(JSON.stringify(ticket));
}

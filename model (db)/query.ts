import Message from "../types/MessageInterface";
import pool from "./pool.ts";

async function getMessages(): Promise<Message[]> {
  const { rows } = await pool.query("SELECT * from messages;");
  return rows;
};

async function getMessage(id: number): Promise<Message> {
  const { rows } = await pool.query("SELECT * from messages WHERE id = $1;", [id]);
  return rows[0];
};

async function addMessage(newMessage: Message) {
  const { username, message } = newMessage;
  await pool.query("INSERT INTO messages (username, message) VALUES($1, $2)", [username, message]);
};

export { getMessages, getMessage, addMessage };
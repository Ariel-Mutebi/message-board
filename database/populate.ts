#! /usr/bin/env deno

import dotenv from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { Client } from "pg";

dotenv.config();

async function populateDB(sqlScript: string) {
  console.log("populating PostgreSQL database...");
  const connectionString = process.env.DATABASE_URL;
  const client = new Client({ connectionString });
  await client.connect();
  await client.query(sqlScript);
  await client.end();
  console.log("done.");
};

try {
  const sqlFilePath = path.join(__dirname, "./populate.sql");
  const SQL = fs.readFileSync(sqlFilePath, "utf-8");
  populateDB(SQL);
} catch (error) {
  console.log(error);
};
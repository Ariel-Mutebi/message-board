import dotenv from "dotenv";
import pg from "pg";
import process from "node:process";

dotenv.config();

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export default pool;
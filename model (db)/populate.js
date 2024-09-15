#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const pg_1 = require("pg");
dotenv_1.default.config();
function populateDB(sqlScript) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("populating PostgreSQL database...");
        const connectionString = process.env.DATABASE_URL;
        const client = new pg_1.Client({ connectionString });
        yield client.connect();
        yield client.query(sqlScript);
        yield client.end();
        console.log("done.");
    });
}
try {
    const sqlFilePath = node_path_1.default.join(__dirname, "./populate.sql");
    const SQL = node_fs_1.default.readFileSync(sqlFilePath, "utf-8");
    populateDB(SQL);
}
catch (error) {
    console.log(error);
}

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const router_1 = __importDefault(require("./routes/router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
app.set("views", node_path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express_1.default.static("public"));
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/", router_1.default);
// run
app.listen(PORT, () => console.log("app running on port: " + String(PORT)));

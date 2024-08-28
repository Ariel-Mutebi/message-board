"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const express_1 = __importDefault(require("express"));
const date_fns_1 = require("date-fns");
const messages_1 = require("./models/messages");
const app = (0, express_1.default)();
const PORT = 8080;
// set up view engine
app.set("views", node_path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
// middlewares
app.use(express_1.default.static("public"));
app.use(express_1.default.urlencoded({ extended: true }));
// routes
app.get("/", (_, res) => res.render("index", { messages: (0, messages_1.getMessages)(), dateFormatter: date_fns_1.format }));
app.get("/new", (_, res) => res.render("newMessage"));
app.post("/new", (req, res) => {
    (0, messages_1.addMessage)({
        text: String(req.body.text),
        user: String(req.body.user),
        added: new Date()
    });
    res.redirect("/");
});
app.get("/:messageId", (req, res) => {
    const message = (0, messages_1.getMessage)(req.params.messageId);
    if (message) {
        res.render("singleMessage", { message: message, dateFormatter: date_fns_1.format });
    }
    else {
        res.render("404");
    }
});
// run
app.listen(PORT, () => {
    console.log("running on http://localhost:" + String(PORT));
});

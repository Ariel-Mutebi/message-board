"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMessage = void 0;
const messages_1 = require("../models/messages");
const postMessage = (req, res) => {
    (0, messages_1.addMessage)({
        text: String(req.body.text),
        user: String(req.body.user),
        added: new Date(),
    });
    res.redirect("/");
};
exports.postMessage = postMessage;

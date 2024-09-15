"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMessage = void 0;
const query_1 = require("../model (db)/query");
const postMessage = (req, res) => {
    (0, query_1.addMessage)({
        message: String(req.body.message),
        user: String(req.body.user),
        added: new Date(),
    });
    res.redirect("/");
};
exports.postMessage = postMessage;

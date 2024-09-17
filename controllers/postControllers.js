"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMessage = void 0;
const query_1 = require("../model (db)/query");
const postMessage = (req, res) => {
    (0, query_1.addMessage)(req.body);
    res.redirect("/");
};
exports.postMessage = postMessage;

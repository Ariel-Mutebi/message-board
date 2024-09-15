"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleMessageOr404 = exports.newMessage = exports.index = void 0;
const date_fns_1 = require("date-fns");
const query_1 = require("../model (db)/query");
const index = (req, res) => {
    const messages = (0, query_1.getMessages)();
    const options = { messages, dateFormatter: date_fns_1.format };
    res.render("index", options);
};
exports.index = index;
const newMessage = (req, res) => {
    res.render("newMessage");
};
exports.newMessage = newMessage;
const singleMessageOr404 = (req, res) => {
    const message = (0, query_1.getMessage)(Number(req.params.id));
    if (message) {
        const options = { message, dateFormatter: date_fns_1.format };
        res.render("singleMessage", options);
    }
    else {
        res.render("404");
    }
};
exports.singleMessageOr404 = singleMessageOr404;

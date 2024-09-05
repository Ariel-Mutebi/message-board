"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleMessageOr404 = exports.newMessage = exports.index = void 0;
const date_fns_1 = require("date-fns");
const messages_1 = require("../models/messages");
const index = (req, res) => {
    const options = {
        messages: (0, messages_1.getMessages)(),
        dateFormatter: date_fns_1.format,
    };
    res.render("index", options);
};
exports.index = index;
const newMessage = (req, res) => {
    res.render("newMessage");
};
exports.newMessage = newMessage;
const singleMessageOr404 = (req, res) => {
    const message = (0, messages_1.getMessage)(req.params.id);
    if (message) {
        const options = { message, dateFormatter: date_fns_1.format };
        res.render("singleMessage", options);
    }
    else {
        res.render("404");
    }
};
exports.singleMessageOr404 = singleMessageOr404;

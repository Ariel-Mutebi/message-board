"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMessage = void 0;
const express_validator_1 = require("express-validator");
const query_1 = require("../model (db)/query");
const validators_1 = require("../middlewares/validators");
const postMessage = [
    ...validators_1.postMessageValidator,
    (req, res) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            res.status(400);
            const options = {
                errors: errors.array(),
                rejectedUsername: req.body.username,
                rejectedMessage: req.body.message
            };
            res.render("newMessage", options);
            return;
        }
        (0, query_1.addMessage)(req.body);
        res.redirect("/");
    }
];
exports.postMessage = postMessage;

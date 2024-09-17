"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMessageValidator = void 0;
const express_validator_1 = require("express-validator");
const obscenity_1 = require("obscenity");
const profanityPolice = new obscenity_1.RegExpMatcher(Object.assign(Object.assign({}, obscenity_1.englishDataset.build()), obscenity_1.englishRecommendedTransformers));
const postMessageValidator = [
    (0, express_validator_1.body)("username").trim()
        .isAlphanumeric().withMessage("Username must only contain letters and numbers (no spaces).")
        .isLength({ min: 1, max: 255 }).withMessage("Username must be between 1 and 255 characters long."),
    (0, express_validator_1.body)("message").custom(message => !profanityPolice.hasMatch(message)).withMessage("No profanity, please.")
];
exports.postMessageValidator = postMessageValidator;

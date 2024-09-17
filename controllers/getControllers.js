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
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleMessageOr404 = exports.newMessage = exports.index = void 0;
const date_fns_1 = require("date-fns");
const query_1 = require("../model (db)/query");
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const messages = yield (0, query_1.getMessages)();
    const options = { messages, dateFormatter: date_fns_1.format };
    res.render("index", options);
});
exports.index = index;
const newMessage = (req, res) => {
    res.render("newMessage");
};
exports.newMessage = newMessage;
const singleMessageOr404 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const message = yield (0, query_1.getMessage)(Number(req.params.id));
    if (message) {
        const options = { message, dateFormatter: date_fns_1.format };
        res.render("singleMessage", options);
    }
    else {
        res.render("404");
    }
});
exports.singleMessageOr404 = singleMessageOr404;

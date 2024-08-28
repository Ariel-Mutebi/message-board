"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessages = void 0;
exports.getMessage = getMessage;
exports.addMessage = addMessage;
const uuid = require("uuid");
const initialMessages = require("../constants/initialMessages");
let messages = [];
const getMessages = () => messages;
exports.getMessages = getMessages;
function getMessage(messageId) {
    const matchingMessage = messages.filter(message => message.id == messageId);
    if (matchingMessage.length > 1)
        console.warn("duplicate message ids detected!", matchingMessage);
    return matchingMessage[0];
}
function addMessage(newMessage) {
    const message = newMessage;
    message.id = uuid.v1();
    messages.push(message);
    return message;
}
initialMessages.forEach(addMessage);

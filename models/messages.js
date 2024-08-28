const uuid = require("uuid")
const initialMessages = require("../constants/initialMessages")

let messages = []

const getMessages = () => messages

function getMessage(messageId) {
  const matchingMessage = messages.filter(message => message.id == messageId)
  if(matchingMessage.length > 1) console.warn("duplicate message ids detected!", matchingMessage)
  return matchingMessage[0]
}

function addMessage(message) {
  message.id = uuid.v1()
  messages.push(message)
  return message
}

initialMessages.forEach(addMessage)

module.exports = { getMessages, getMessage, addMessage }
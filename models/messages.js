const uuid = require("uuid")
const { initialMessages } = require("../constants/initialMessages")

const messages = []

const getMessages = () => messages

const getMessage = (messageId) => messages.filter(message => message.id = messageId)[0]

function addMessage(message) {
  const { text, user, added } = message
  messages.push({text, user, added, id: uuid.v1()})
}

function removeMessage(idOfDeletedMessage) {
  messages.filter(message => message.id !== idOfDeletedMessage)
}

initialMessages.forEach(addMessage)

module.exports = { getMessages, getMessage, addMessage, removeMessage }
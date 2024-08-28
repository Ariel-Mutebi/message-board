const uuid = require("uuid")
const initialMessages = require("../constants/initialMessages")

type uuidV1 = `${string}-${string}-1${string}-${string}-${string}`

interface Message {
  text: string,
  user: string,
  added: Date,
}

interface IDedMessage extends Message {
  id: uuidV1,
}

let messages: IDedMessage[] = []

const getMessages = () => messages

function getMessage(messageId: uuidV1) {
  const matchingMessage = messages.filter(message => message.id == messageId)
  if(matchingMessage.length > 1) console.warn("duplicate message ids detected!", matchingMessage)
  return matchingMessage[0]
}

function addMessage(newMessage: Message) {
  const message = newMessage as IDedMessage
  message.id = uuid.v1()
  messages.push(message)
  return message
}

initialMessages.forEach(addMessage)

export { getMessages, getMessage, addMessage, uuidV1 }
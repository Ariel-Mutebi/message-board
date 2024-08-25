const { getMessages, getMessage, addMessage, removeMessage } = require("./messages")
const initialMessages = require("../constants/initialMessages")

describe("set-up, basic read", () => {
  test("The messages database is populated with initialMessages, and getMessages shows that.", () => {
    const messagesDB = getMessages()

    // because js compares objects based on reference in memory, I can't use Array.prototype.includes
    // I have to stich together this solution which ultimately compares the stringified objects
    const initialMessagesIncluded = initialMessages.every(im => {
      return messagesDB.some(dbm => {
        return JSON.stringify(dbm) === JSON.stringify(im)
      })
    })
    
    expect(initialMessagesIncluded).toBe(true)
  })
})

describe("CRUD", () => {
  const text = "Hello, world!"
  const user = "Jest"
  const date = new Date()
  const message = addMessage({ text, user, date })

  test("addMessage returns created message object (with assigned id).", () => {
    expect(message.text).toBe(text)
    expect(message.user).toBe(user)
    expect(message.date).toBe(date)
    expect(message.id).toBeTruthy()
  })

  test("addMessage adds message object to database, and getMessage returns message of a given id.", () => {
    expect(getMessage(message.id)).toStrictEqual(message)
  })

  test("removeMessage removes message object from database", () => {
    removeMessage(message.id)
    expect(getMessage(message.id)).toBeFalsy()
  })
})
import { RequestHandler } from "express"
import { format as dateFormatter } from "date-fns"
import { getMessages, getMessage } from "../model (db)/query"

const index: RequestHandler = (req, res) => {
  const messages = getMessages()
  const options = { messages, dateFormatter }
  res.render("index", options)
}

const newMessage: RequestHandler = (req, res) => {
  res.render("newMessage")
}

const singleMessageOr404: RequestHandler = (req, res) => {
  const message = getMessage(Number(req.params.id))
  if (message) {
    const options = { message, dateFormatter }
    res.render("singleMessage", options)
  } else {
    res.render("404")
  }
}

export { index, newMessage, singleMessageOr404 }
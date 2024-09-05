import { RequestHandler } from "express"
import { format } from "date-fns"
import { getMessages, getMessage, uuidV1 } from "../models/messages"

const index: RequestHandler = (req, res) => {
  const options = {
    messages: getMessages(),
    dateFormatter: format,
  }
  res.render("index", options)
}

const newMessage: RequestHandler = (req, res) => {
  res.render("newMessage")
}

const singleMessageOr404: RequestHandler = (req, res) => {
  const message = getMessage(req.params.id as uuidV1)
  if (message) {
    const options = { message, dateFormatter: format }
    res.render("singleMessage", options)
  } else {
    res.render("404")
  }
}

export { index, newMessage, singleMessageOr404 }
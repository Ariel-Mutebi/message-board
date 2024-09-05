import { RequestHandler } from "express"
import { addMessage } from "../models/messages"

const postMessage: RequestHandler = (req, res) => {
  addMessage({
    text: String(req.body.text),
    user: String(req.body.user),
    added: new Date(),
  })
  res.redirect("/")
}

export { postMessage }
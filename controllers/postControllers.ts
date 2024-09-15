import { RequestHandler } from "express"
import { addMessage } from "../model (db)/query"

const postMessage: RequestHandler = (req, res) => {
  const { message, username } = req.body
  addMessage({ message, username })
  res.redirect("/")
}

export { postMessage }
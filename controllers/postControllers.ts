import { RequestHandler } from "express"
import { addMessage } from "../model (db)/query"

const postMessage: RequestHandler = (req, res) => {
  addMessage(req.body)
  res.redirect("/")
}

export { postMessage }
import path from "node:path"
import express from "express"
import { format } from "date-fns"
import { getMessages, addMessage, getMessage, uuidV1 } from "./models/messages"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const PORT = process.env.PORT

// set up view engine
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

// middlewares
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))

// routes
app.get("/", (_, res) => res.render("index", { messages: getMessages(), dateFormatter: format }))
app.get("/new", (_, res) => res.render("newMessage"))
app.post("/new", (req, res) => {
  addMessage({
    text: String(req.body.text),
    user: String(req.body.user),
    added: new Date()
  })

  res.redirect("/")
})
app.get("/:messageId", (req, res) => {
  const message = getMessage(req.params.messageId as uuidV1)
  if (message) {
    res.render("singleMessage", { message: message, dateFormatter: format })
  } else {
    res.render("404")
  }
})

// run
app.listen(PORT, () => {
  if(process.env.NODE_ENV = "DEV") console.log("running on http://localhost:" + String(PORT))
})
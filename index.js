const path = require("node:path")
const express = require("express")
const dateFNS = require("date-fns")
const { getMessages, addMessage, getMessage } = require("./models/messages")

const app = express()
const PORT = 8080

// set up view engine
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

// middlewares
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (_, res) => res.render("index", { messages: getMessages(), dateFormatter: dateFNS.format }))
app.get("/new", (_, res) => res.render("newMessage"))
app.post("/new", (req, res) => {
  addMessage({
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  })

  res.redirect("/")
})
app.get("/:messageId", (req, res) => {
  const message = getMessage(req.params.messageId)
  if (message) {
    res.render("singleMessage", { message: message, dateFormatter: dateFNS.format })
  } else {
    res.render("404")
  }
})

// run
app.listen(PORT, () => {
  console.log("running on port: " + String(PORT))
})
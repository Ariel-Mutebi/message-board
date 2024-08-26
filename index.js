const path = require("node:path")
const express = require("express")
const { getMessages, addMessage } = require("./models/messages")

const app = express()
const PORT = 8080

// set up view engine
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

// middlewares
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (_, res) => res.render("index", { messages: getMessages() }))
app.get("/new", (_, res) => res.render("newMessagePage"))
app.post("/new", (req, res) => {
  addMessage(
    {
      text: req.body.text,
      user: req.body.user,
      added: new Date()
    }
  )

  res.redirect("/")
})

// run
app.listen(PORT, () => {
  console.log("running on port: " + String(PORT))
})
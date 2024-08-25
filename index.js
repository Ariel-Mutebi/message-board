const path = require("node:path")
const express = require("express")
const { getMessages } = require("./models/messages")

const app = express()
const PORT = 8080

// set up view engine
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

// routes
app.use(express.static("public"))
app.get("/", (_, res) => res.render("index", { messages: getMessages() }))

// run
app.listen(PORT, () => {
  console.log("running on port: " + String(PORT))
})
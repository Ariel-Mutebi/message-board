import path from "node:path";
import express from "express";
import dotenv from "dotenv";
import router from "./routes/router.ts";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

// run
app.listen(PORT, () => console.log(`app running on port: ${PORT}`));
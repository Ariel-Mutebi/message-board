import { RequestHandler } from "express";
import { format as dateFormatter } from "date-fns";
import { getMessages, getMessage } from "../model (db)/query.ts";

const index: RequestHandler = async(req, res) => {
  const messages = await getMessages();
  const options = { messages, dateFormatter };
  res.render("index", options);
};

const newMessage: RequestHandler = (req, res) => {
  res.render("newMessage");
};

const singleMessageOr404: RequestHandler = async(req, res) => {
  const message = await getMessage(Number(req.params.id));
  if (message) {
    const options = { message, dateFormatter };
    res.render("singleMessage", options);
  } else {
    res.render("404");
  };
};

export { index, newMessage, singleMessageOr404 };
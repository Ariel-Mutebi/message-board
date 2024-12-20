import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import { addMessage } from "../database/query.ts";
import { postMessageValidator } from "../middlewares/validators.ts";

const postMessage: RequestHandler[] = [
  ...postMessageValidator,
  (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
      res.status(400);

      const options = {
        errors: errors.array(),
        rejectedUsername: req.body.username,
        rejectedMessage: req.body.message
      };

      res.render("newMessage", options);
      return;
    };

    addMessage(req.body);
    res.redirect("/");
  }
];

export { postMessage };
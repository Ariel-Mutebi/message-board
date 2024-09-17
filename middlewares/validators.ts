import { body } from "express-validator"
import { RegExpMatcher, englishDataset, englishRecommendedTransformers } from "obscenity"

const profanityPolice = new RegExpMatcher({ ...englishDataset.build(), ...englishRecommendedTransformers })

const postMessageValidator = [
  body("username").trim()
    .isAlphanumeric().withMessage("Username must only contain letters and numbers (no spaces).")
    .isLength({ min: 1, max: 255 }).withMessage("Username must be between 1 and 255 characters long."),
  body("message").custom(message => !profanityPolice.hasMatch(message)).withMessage("No profanity, please.")
]

export { postMessageValidator }
import { Router } from "express";
import { index, newMessage, singleMessageOr404 } from "../controllers/getControllers.ts";
import { postMessage } from "../controllers/postControllers.ts";

const router = Router();

router.get("/", index);
router.get("/new", newMessage);
router.post("/new", postMessage);
router.get("/:id", singleMessageOr404);

export default router;
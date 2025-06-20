import express from "express";
import {
  getAllQuestions,
  getRandomQuestion,
  getQuestionsByCategory,
  getRandomQuestionByCategory,
} from "../controllers/questionController.js";

const router = express.Router();

router.get("/", getAllQuestions);
router.get("/random", getRandomQuestion);
router.get("/:category/random", getRandomQuestionByCategory);
router.get("/:category", getQuestionsByCategory);

export default router;

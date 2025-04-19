import { Router } from "express";
import { getQuestions,addQuestion,deleteQuestion } from "../controllers/question.controller.ts";
import { addAnswer,verifyAnswer,deleteAnswer } from "../controllers/answer.controller.ts";
import { decryptMiddleware } from "../middlewares/decrypt.middlware.ts";
import { protectRoute } from "../middlewares/jwt.middleware.ts";

const router = Router();


//questions
router.get("/questions",protectRoute,decryptMiddleware, getQuestions);
router.post("/addquestion",protectRoute,decryptMiddleware, addQuestion);
router.post("/deletequestion",protectRoute,decryptMiddleware, deleteQuestion);

//answers
router.post("/verifyanswer",protectRoute,decryptMiddleware, verifyAnswer);
router.post("/addanswer",protectRoute,decryptMiddleware, addAnswer);
router.post("/deleteanswer",protectRoute,decryptMiddleware, deleteAnswer);
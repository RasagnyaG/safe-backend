import { decryptMiddleware } from "../middlewares/decrypt.middlware.js";
import { Router } from "express";
import {registerUser,loginUser} from "../controllers/auth.controller.js";
const router = Router();

router.post('/auth/register',decryptMiddleware,registerUser);
router.post('/auth/login',decryptMiddleware,loginUser);
// router.post('/auth/questions',getQuestions);
// router.post('/auth/verifyanswer',verifyAnswer);
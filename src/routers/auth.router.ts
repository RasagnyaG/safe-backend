import { decryptMiddleware } from "../middlewares/decrypt.middlware.js";
import { Router } from "express";
import { registerUser, loginUser, resetPassword } from "../controllers/auth.controller.js";
const router = Router();

router.post("/register", decryptMiddleware, registerUser);
router.post("/login", decryptMiddleware, loginUser);
router.post("/resetpassword", decryptMiddleware, resetPassword);
// router.post('/auth/questions',getQuestions);
// router.post('/auth/verifyanswer',verifyAnswer);

export default router;

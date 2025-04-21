import { decryptMiddleware } from "../middlewares/decrypt.middlware.ts";
import { sendOtp, verifyOtp } from "../controllers/otp.controller.ts";
import { Router } from "express";

const router = Router();

router.post("/send-otp", decryptMiddleware, sendOtp);
router.post("/verify-otp", decryptMiddleware, verifyOtp);

export default router;

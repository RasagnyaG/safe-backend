import { NextFunction, Request, Response } from "express";
import * as crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();
const key = Buffer.from(process.env.ENCRYPTION_KEY as string, "base64");
console.log("key: ", key);

export const decryptMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body.data;
    console.log("data: ", data);
    if (req.method !== "POST") {
      next();
      return;
    }    
    if ( typeof data !== "string") {
      res.status(400).json({ message: "Invalid data provided" });
      return;
    }
    console.log("data: ", data);
    const tempData = data.split(":");
    if (tempData.length !== 3) {
      res.status(400).json({ message: "Invalid data format" });
      return;
    }
    const [content, iv, tag] = tempData;
    const decipher = crypto.createDecipheriv(
      "aes-256-gcm",
      key,
      Buffer.from(iv, "base64")
    );
    decipher.setAuthTag(Buffer.from(tag, "base64"));

    let decrypted = decipher.update(content, "base64", "utf-8");
    decrypted += decipher.final("utf-8");

    req.body = JSON.parse(decrypted);
    console.log("req.body:",req.body);
    next();
    return;
  }  catch (error: any) {
    if (
      error.message === "Unsupported state or unable to authenticate data"
    ) {
      console.warn("Tampered or invalid encrypted data detected");
      res.status(400).json({ message: "Invalid or tampered data" });
      return;
    }

    console.error("Internal error during decryption:", error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

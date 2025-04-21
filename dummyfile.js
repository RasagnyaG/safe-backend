import crypto from "crypto";

const key = crypto.randomBytes(32); // 256-bit key
console.log("Key (base64):", key.toString("base64"));
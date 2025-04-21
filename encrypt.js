import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const key = process.env.ENCRYPTION_KEY;

const input = {
  username : "testuser3",
  password : "testpassword3",
  email    : "testmail3@gmail.com",
  
};

if (!key) {
  console.error("ENCRYPTION_KEY not set in .env");
  process.exit(1);
}

function encrypt(dataObj) {
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", Buffer.from(key, "base64"), iv);

  let encrypted = cipher.update(JSON.stringify(dataObj), "utf8", "base64");
  encrypted += cipher.final("base64");
  const authTag = cipher.getAuthTag();

  return `${encrypted}:${iv.toString("base64")}:${authTag.toString("base64")}`;
}

try {
  const result = encrypt(input);
  console.log("Encrypted string:\n");
  console.log(JSON.stringify({ data: result }, null, 2)); // pretty output
} catch (err) {
  console.error("Encryption failed", err);
  process.exit(1);
}

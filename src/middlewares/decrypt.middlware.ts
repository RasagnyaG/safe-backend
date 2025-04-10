import { NextFunction, Request, Response } from 'express';
import * as crypto from 'crypto';


const key = process.env.ENCRYPTION_KEY as string;

export const decryptMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = req.body.data;
        if (!data || typeof data !== 'string') {
            res.status(400).json({ message: "Invalid data provided" });
            return;
        }
        const tempData = data.split(':');
        if(tempData.length !== 3) {
            res.status(400).json({ message: "Invalid data format" });
            return;
        }
        const [content, iv, tag] = tempData;
        const decipher = crypto.createDecipheriv('aes-256-gcm', key, Buffer.from(iv, 'base64'));
        decipher.setAuthTag(Buffer.from(tag, 'base64'));

        let decrypted = decipher.update(content, 'base64', 'utf-8');
        decrypted += decipher.final('utf-8');

        req.body = JSON.parse(decrypted);
        next();
    } catch (error) {
        console.error("Error in decrypting data", error);
        res.status(500).json({ message: "Internal server error" });
        return;
    }
}
import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

const JWT_TOKEN = process.env.JWT_TOKEN as string;

export const jwtMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            res.status(401).json({ message: "Unauthorised request" });
            return;
        }
        const decodedData = jwt.verify(token, JWT_TOKEN) as string;
        req.body = decodedData;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: "Invalid token" });
        return;
    }
}
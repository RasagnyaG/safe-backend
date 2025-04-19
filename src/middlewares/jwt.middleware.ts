import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import prisma from "../prisma.client.ts";

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

export const protectRoute = async(req : Request,res : Response,next : NextFunction) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }
    if(!token) {
        res.status(401).json({ message: "Unauthorised request" });
        return;
    }
    try {
        const decodedData = jwt.verify(token, process.env.JWT_TOKEN_SECRET as string) as { id: string };
        const user = await prisma.user.findUnique({ where: { id: decodedData.id } });   
        if (!user) {
            res.status(401).json({ message: "Unauthorised request" });
            return;
        }
        req.body.user = user;       
        next();
        
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: "Invalid token" });
        return;
        
    }
}
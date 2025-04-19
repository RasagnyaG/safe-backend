import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import prisma from "../prisma.client.ts";


const { JsonWebTokenError, TokenExpiredError } = jwt;


const JWT_TOKEN = process.env.JWT_TOKEN_SECRET as string;

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

export const protectRoute = async (req: Request, res: Response, next: NextFunction) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
        res.status(401).json({ message: "Unauthorised request" });
        return;
    }
    console.log("token: ", token);
    console.log(process.env.JWT_TOKEN_SECRET);
    try {
        let decodedData;
        try {
            decodedData = jwt.verify(token, process.env.JWT_TOKEN_SECRET as string) as { id: string };
        } catch (err) {
            decodedData = jwt.verify(token, process.env.JWT_REFRESH_TOKEN_SECRET as string) as { id: string };
        }
        console.log("decodedData: ", decodedData);
        const user = await prisma.user.findUnique({ where: { id: decodedData.id } });
        if (!user) {
            res.status(401).json({ message: "Unauthorised request" });
            return;
        }
        req.body.user = user;
        console.log("protectRoute succesful")
        next();
        return;

    } catch (error: any) {
        if (error instanceof TokenExpiredError) {
            console.warn("JWT expired");
            res.status(401).json({ message: "Token expired" });
            return;
        }

        if (error instanceof JsonWebTokenError) {
            console.error("Invalid JWT token:", error.message);
            res.status(401).json({ message: "Invalid token" });
            return;
        }

        console.error("Unknown error in protectRoute:", error);
        res.status(500).json({ message: "Internal server error" });
        return;
    }

}
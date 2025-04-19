import prisma from "../prisma.client.ts";
import { Response, Request } from "express";


export const getQuestions = async (req: Request, res: Response) => {
    try {
        const questions = await prisma.securityQuestion.findMany();
        if (!questions) {
            res.status(404).json({ message: "No questions found" });
            return;
        }
        res.status(200).json({ questions });
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
        return;
    }
}

export const addQuestion = async (req: Request, res: Response) => {
    try {
        const { question } = req.body;
        console.log("question: ", question);
        if (!question) {
            res.status(400).json({ message: "Question is required" });
            return;
        }
        const newQuestion = await prisma.securityQuestion.create({
            data: {
                question,
            },
        });
        res.status(200).json({ message: "Question added successfully", newQuestion });
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
        return;
    }
}

export const deleteQuestion = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;
        if (!id) {
            res.status(400).json({ message: "Question ID is required" });
            return;
        }
        const question = await prisma.securityQuestion.findUnique({ where: { id } });
        if (!question) {
            res.status(404).json({ message: "Question not found" });
            return;
        }
        const deletedquestion = await prisma.securityQuestion.delete({ where: { id } });    
        res.status(200).json({ message: "Question deleted successfully", deletedquestion });
        return;    
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
        return;
    }
}
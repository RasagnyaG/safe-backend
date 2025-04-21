import bcrypt from "bcryptjs";
import prisma from "../prisma.client.ts";

export const addAnswer = async (req: any, res: any) => {
    try {
        const { questionId, answer,userId } = req.body;
        if (!questionId || !answer || !userId) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }
        const findanswer = await prisma.userSecurityAnswer.findFirst({
            where: {
                questionId,
                userId,
            },
        })
        if(findanswer) {
            res.status(400).json({ message: "Answer already exists" });
            return;
        }
        const answerHash = await bcrypt.hash(answer, 10); 
        const addedanswer = await prisma.userSecurityAnswer.create({
            data: {
                questionId,
                answerHash,
                userId,
            },
        });
        res.status(200).json({ message: "Answer added successfully", addedanswer });
        return;

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
        return;
    }
}

export const verifyAnswer = async (req: any, res: any) => {
    try {
        const { questionId, answer, username,phoneno } = req.body;
        if (!questionId || !answer || !username || !phoneno) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }
        const user = await prisma.user.findFirst({
            where: {
                AND: [
                    { name: username },
                    { phoneNumber: phoneno },
                ]
            }
        })
        if (!user) {
            res.status(400).json({ message: "User not found" });
            return;
        }
        const findanswer = await prisma.userSecurityAnswer.findFirst({
            where: {
                questionId,
                userId : user.id,
            },
        });
        if (!findanswer) {
            res.status(400).json({ message: "Answer not found" });
            return;
        }
        const isMatch = await bcrypt.compare(answer, findanswer.answerHash);
        if (!isMatch) {
            res.status(400).json({ message: "Answer does not match" });
            return;
        }
        res.status(200).json({ message: "Answer verified successfully" });  
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
        return;
    }
}

export const deleteAnswer = async (req: any, res: any) => {
    try {
        const { questionId, userId } = req.body;
        if (!questionId || !userId) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }
        const findanswer = await prisma.userSecurityAnswer.findFirst({
            where: {
                questionId,
                userId,
            },
        });
        if (!findanswer) {
            res.status(400).json({ message: "Answer not found" });
            return;
        }
        const deletedanswer = await prisma.userSecurityAnswer.delete({
            where: {
                id: findanswer.id,
            },
        });
        res.status(200).json({ message: "Answer deleted successfully", deletedanswer });
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
        return;
    }
}

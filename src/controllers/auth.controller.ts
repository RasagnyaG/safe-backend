import Prisma from "../prisma.client.js";
import { Response, Request } from "express";
import bcrypt from "bcryptjs";
import { getSignedToken,getRefreshToken } from "../utils/tokengeneration.js";

const sendResponse = async(res : Response, statusCode : number, userID : string,message : string) => {
    const accessToken = await getSignedToken(userID);
    console.log("accessToken: ", accessToken);
    const refreshToken = await getRefreshToken(userID);
    console.log("refreshToken: ", refreshToken);
    res.status(statusCode).json({message, accessToken, refreshToken});
    return;
}

export async function registerUser(req: Request, res: Response) {
    try {
        const { username, passcode, email, phonenumber,alternate_phoneno, alternate_email } = req.body;

        if (!username || ! !passcode || !email || !phonenumber  || !alternate_phoneno) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }

        const deviceId = "device id";
        //IBM API logic


        // const temp = await Prisma.user.findUnique({
        //     where: {
        //         accountNumber : accountnumber,
        //         phoneNumber : phonenumber,
        //         email,
        //     }
        // })
        const temp = await Prisma.user.findFirst({
            where: {
                OR: [
                    { phoneNumber: phonenumber },
                    { email },
                ],
            },
        });

        if (temp) {
            res.status(400).json({ message: "User already exists,plz login" });
            return 
        }

        const salt = await bcrypt.genSalt(18);
        const hashedPasscode = await bcrypt.hash(passcode, salt);

        const user = await Prisma.user.create({
            data: {
                name: username,
                passcode : hashedPasscode,
                email,
                phoneNumber: phonenumber,
                alternatePhoneNumber : alternate_phoneno,
                ...(alternate_email && { alternateEmail: alternate_email }),
            }
        })

        const device = await Prisma.device.create({
            data: {
                deviceId,
                userId: user.id,
                // FCMToken: "", // Provide a default or valid FCMToken value
            }
        })

        console.log("User created successfully");
        const message = "User created successfully";
        sendResponse(res,200,user.id,message);
        // res.status(200).json({ message: "User registered successfully" });
        return;

    } catch (error) {
        console.error(error);
        return;
    }
}

export async function loginUser(req: Request, res: Response) {
    try {
        const { username, passcode } = req.body;
        const deviceId = "DeviceID";
        //IBM logic 

        if (!deviceId) {
            res.status(400).json({ message: "Try again, device not recognised" });
            return;
        }

        if (!username || !passcode ) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }

        const device = await Prisma.device.findUnique({
            where : {
                deviceId,
            }
        })

        if (!device) {
            res.status(400).json({ message: "Device not registered" });
            return;
        }

        const user = await Prisma.user.findUnique({
            where: {
                name: username,
                id : device.userId,
            }
        })

        if (!user) {
            res.status(400).json({ message: "User Not Found" });
            return;
        }

        const isPasscodeValid = await bcrypt.compare(passcode, user.passcode);
        if (!isPasscodeValid) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }

        const message = "Login successful";
        sendResponse(res,200,user.id,message);

        // res.status(200).json({ message: "Login successful" });
        return;
    } catch (error) {
        console.error(error);
        return;
    }

}


export const resetPassword = async (req: Request, res: Response) => {
    try {
        const { username, passcode, newPasscode,phoneno } = req.body;

        if (!username || !passcode || !newPasscode || !phoneno) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }

        const user = await Prisma.user.findFirst({
            where: {
                AND: [
                    { name: username },
                    { phoneNumber: phoneno },
                ]
            }
        })

        if (!user) {
            res.status(400).json({ message: "User Not Found" });
            return;
        }

        const isPasscodeValid = await bcrypt.compare(passcode, user.passcode);
        if (!isPasscodeValid) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }

        const salt = await bcrypt.genSalt(18);
        const hashedNewPasscode = await bcrypt.hash(newPasscode, salt);

        await Prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                passcode : hashedNewPasscode,
            }
        })

        res.status(200).json({ message: "Password reset successfully" });
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
        return;
    }
}
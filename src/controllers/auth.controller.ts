import Prisma from "../prisma.client.js";
import { Response, Request } from "express";
import bcrypt from "bcryptjs";

export async function registerUser(req: Request, res: Response) {
    try {
        const { username, accountnumber, passcode, email, phonenumber, deviceId } = req.body;

        if (!username || !accountnumber || !passcode || !email || !phonenumber || !deviceId) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }

        const temp = await Prisma.user.findUnique({
            where: {
                accountNumber : accountnumber,
                phoneNumber : phonenumber,
                email,
            }
        })

        if (temp) {
            res.status(400).json({ message: "User already exists,plz login" });
            return 
        }

        const salt = await bcrypt.genSalt(18);
        const hashedPasscode = await bcrypt.hash(passcode, salt);

        const user = await Prisma.user.create({
            data: {
                name: username,
                accountNumber: accountnumber,
                passcode : hashedPasscode,
                email,
                phoneNumber: phonenumber,
            }
        })

        const device = await Prisma.device.create({
            data: {
                deviceId,
                userId: user.id,
            }
        })

        console.log("User created successfully");
        res.status(200).json({ message: "User registered successfully" });
        return;

    } catch (error) {
        console.error(error);
    }
}

export async function loginUser(req: Request, res: Response) {
    try {
        const { username, passcode,deviceId } = req.body;

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

        res.status(200).json({ message: "Login successful" });
        return;
    } catch (error) {
        console.error(error);
    }

}
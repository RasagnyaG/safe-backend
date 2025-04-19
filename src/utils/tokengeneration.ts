import jwt from "jsonwebtoken";


export const getSignedToken = async (userId: string) => {
    const JWT_TOKEN = process.env.JWT_TOKEN_SECRET as string;
    const token = jwt.sign({ id: userId }, JWT_TOKEN, { expiresIn: parseInt(process.env.JWT_TOKEN_EXPIRES_IN as string, 10) });
    return token;
}

export const getRefreshToken = async (userId :string)=>{
    const JWT_TOKEN = process.env.JWT_REFRESH_TOKEN_SECRET as string;
    const refreshToken = jwt.sign({ id: userId }, JWT_TOKEN, { expiresIn: parseInt(process.env.JWT_REFRESH_TOKEN_EXPIRES_IN as string, 10) });
    return refreshToken;
}


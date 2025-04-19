import jwt from "jsonwebtoken";


export const getSignedToken = async (userId: string) => {
    const JWT_TOKEN = process.env.JWT_TOKEN_SECRET as string;
    // const expiresIn = parseInt(process.env.JWT_TOKEN_EXPIRES_IN as string, 10);
    const token = await jwt.sign(
        { id: userId },
        JWT_TOKEN,
        {
            expiresIn: '15m',
            algorithm: 'HS512', 
        }
    );
    return token;
}

export const getRefreshToken = async (userId :string)=>{
    const JWT_TOKEN = process.env.JWT_REFRESH_TOKEN_SECRET as string;
    const expiresIn = parseInt(process.env.JWT_REFRESH_TOKEN_EXPIRES_IN as string, 10);
    const refreshToken = await jwt.sign({ id: userId }, JWT_TOKEN, { expiresIn : '1hr',algorithm: 'HS512' });
    return refreshToken;
}


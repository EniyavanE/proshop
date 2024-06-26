import jwt from "jsonwebtoken"

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })
    res.cookie('jwt', token, {
        secure: process.env.NODE_ENV !== 'development',
        withCredentials: true,
        httpOnly: false,
    });
}

export default generateToken;
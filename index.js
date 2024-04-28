import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import productRouter from "./Routes/productRoutes.js";
import userRouter from "./Routes/userRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();
connectDb();
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })

);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const port = process.env.PORT;


app.get('/', (req, res) => {
    console.log(`api lisenting`)
    res.send("Welcome")
})
app.use('/products', productRouter)
app.use('/users', userRouter)
app.use('/orders', orderRouter)
app.listen(port, () => console.log(`listening on ${port}`));
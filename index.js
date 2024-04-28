import express from "express";
import connectDb from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import productRouter from "./Routes/productRoutes.js";
import userRouter from "./Routes/userRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";
import cookieParser from "cookie-parser";
import fetch from 'node-fetch';
dotenv.config();
const app = express();
connectDb();
app.use(
    cors({
        origin: ["https://main--superlative-cocada-0b1301.netlify.app"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const port = process.env.PORT;

app.get('/proxy', async (req, res) => {
    try {
        // Fetch data from the desired endpoint
        const response = await fetch('https://proshop-jag6.onrender.com/products');

        // Check if response is successful
        if (response.ok) {
            // Parse the JSON response and send it back to the client
            const data = await response.json();
            res.json(data);
        } else {
            // If response is not successful, send an error status
            res.status(response.status).send('Failed to fetch data from the server');
        }
    } catch (error) {
        // If an error occurs during the fetch, send an error status
        console.error('Error fetching data:', error);
        res.status(500).send('Internal server error');
    }
});
app.get('/', (req, res) => {
    console.log(`api lisenting`)
    res.send("Welcome")
})
app.use('/products', productRouter)
app.use('/users', userRouter)
app.use('/orders', orderRouter)
app.listen(port, () => console.log(`listening on ${port}`));
import mongoose from "mongoose";
const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`mongodb connect ${conn.connection.host}`)
    } catch (err) {
        console.log("mongodb connection error");
        process.exit(1);
    }
}

export default connectDb;
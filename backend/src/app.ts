import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import categoryRoutes from "./routes/categoryRoutes";
import productRoutes from "./routes/productRoutes";
import paymentRoutes from "./routes/paymentRoutes";

// Load environment variables
dotenv.config();

// Initialize database connection
connectDB();

// Initialize Express app
const app = express();

// Middleware for JSON body parsing
app.use(express.json());

// Middleware for CORS
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

// Routes
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/payment", paymentRoutes);

export default app;

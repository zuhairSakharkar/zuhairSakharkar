import express from "express";
import color from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import products from "./data/products.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddlewares.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.json()); // body parsing

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`)
);

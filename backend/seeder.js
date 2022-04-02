import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

import products from "./data/products.js";

import Product from "./models/productModel.js";

import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany();

    const sampleProducts = products.map((product) => {
      return { ...product };
    });

    await Product.insertMany(sampleProducts);

    console.log("Data Imported".green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();

    console.log("Data destroyed".red.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}

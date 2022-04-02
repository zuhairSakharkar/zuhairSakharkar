import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    logoUpload: {
      type: String,
      required: true,
    },
    companyDescription: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: Number,
      required: true,
    },
    contactEmail: {
      type: String,
      required: true,
    },
    stateC: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;

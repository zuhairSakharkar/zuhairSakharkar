import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  private/admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Create a product
// @route   POST /api/products/
// @access  private/admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    companyName: "Sample Company",
    contactNumber: 0,
    logoUpload: "/images/sample.jpg",
    stateC: "Edit",
    city: "Edit",
    page: 1,
    contactEmail: "co@gmail.com",
    companyDescription: "Sample Description",
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  private/admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    companyName,
    contactNumber,
    companyDescription,
    logoUpload,
    contactEmail,
    stateC,
    city,
    page,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.companyName = companyName;
    product.contactNumber = contactNumber;
    product.companyDescription = companyDescription;
    product.logoUpload = logoUpload;
    product.contactEmail = contactEmail;
    product.stateC = stateC;
    product.city = city;
    product.page = page;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export {
  getProductById,
  getProducts,
  deleteProduct,
  createProduct,
  updateProduct,
};

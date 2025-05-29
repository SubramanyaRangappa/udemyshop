import mongoose from "mongoose";
import products from "./data.js";
import Product from '../models/products.js'

const seedProducts = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/udemyshop");
        await Product.deleteMany();
        console.log("products deleted");
        await Product.insertMany(products);
        console.log("products added");
        process.exit();
    } catch(error) {
        console.log("error is",error);
        process.exit();        
    }
}

seedProducts()
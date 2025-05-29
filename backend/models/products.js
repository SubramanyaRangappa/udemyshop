import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
    type: String,
    required: [true, 'Please enter Product Name'],
    maxLength: [200, 'Product name cannot exceed 200 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please enter Product Price'],
        maxLength: [200, 'Product name cannot exceed 5 digits']
    },
    description: {
        type: String,
        required: [true, 'Please enter Product description'],
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type:String,
            required: true
        },
    }],
    category: {
        type: String,
        required: [true, "please enter the product category"],
        enum:{
            values: ['Laptops', 'Electronics', 'Cameras', 'Accessories', 'Headphones', 'Food', 'books', 'sports', 'outdoor', 'home'],
            message: 'please select correct category'
        }
    },
    seller: {
        type: String,
        required: [true, 'Please enter Product seller'],
    },
    stock: {
        type: Number,
        required: [true, 'please enter product stock']
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: Number,
                ref: 'User',
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user:{
        type: Number,
        ref: 'User',
        required: false
    },
    
},{ timestamps: true })

export default mongoose.model("Product", productSchema)
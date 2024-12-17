import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    description: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    productImage: {
        type: String
    }
}, {timestamps: true})

export const Product = mongoose.model("Product", productSchema)
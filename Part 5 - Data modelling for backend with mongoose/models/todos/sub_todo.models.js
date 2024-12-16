import mongoose, { modelNames, mongo } from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    }
})

export const User = mongoose.model("User", userSchema)
import mongoose from 'mongoose'

// const userSchema = new mongoose.Schema({
//     username: String,
//     email: String,
//     isActive: Boolean,
// })

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required."]
    },
    isActive: {
        type: Boolean,
        required: true
    },
}, {timestamps: true})

export const User = mongoose.model("User", userSchema)
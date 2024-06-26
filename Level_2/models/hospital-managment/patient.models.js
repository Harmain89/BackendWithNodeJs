import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    diagnose: {
        type: String,
        required: true
    },
    diagnoseWith: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["M", "F", "O"],
        required: true
    },
    admitedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    },

}, {timestamps: true})


export const Patient = mongoose.model("Patient", patientSchema)
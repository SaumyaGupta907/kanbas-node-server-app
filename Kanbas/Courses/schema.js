import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    _id: { type: String },
    name: { type: String, required: true, unique: true },
    number: { type: String, required: true },
    startDate: Date,
    endDate: Date,
    department: String,
    credits: Number,
    image: String,
    description: String
    },{ collection: "courses" }
);
export default courseSchema;
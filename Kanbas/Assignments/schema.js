import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({
                                           _id: { type: String },
                                           title: { type: String, unique: true },
                                           course: { type: String },
                                           availableDate: Date,
                                           dueDate: Date,
                                           points: Number
                                       },
                                       { collection: "assignments" }
);
export default assignmentSchema;
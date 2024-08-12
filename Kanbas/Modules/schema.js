
import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  _id: { type: String},
  name: { type: String},
  description: { type: String},
  module: { type: String},
});

// Define the Module schema, which includes the lessons array
const moduleSchema = new mongoose.Schema(
  {
    _id: { type: String },
    name: { type: String, unique: true },
    description: { type: String },
    course: { type: String},
    lessons: [lessonSchema], // Embed the lessonSchema in the lessons array
  },
  { collection: "modules" }
);

export default moduleSchema;
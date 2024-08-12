
import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  module: { type: String, required: true },
});

// Define the Module schema, which includes the lessons array
const moduleSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    course: { type: String, required: true },
    lessons: [lessonSchema], // Embed the lessonSchema in the lessons array
  },
  { collection: "modules" }
);

export default moduleSchema;
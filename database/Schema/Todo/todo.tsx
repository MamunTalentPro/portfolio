import mongoose, { Document } from "mongoose"

export interface Todo extends Document {
  title: string
  type: string
  date: Date
  topics:string[]
  status:string

}

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  date: { type: Date, required: true },
  topics: {
    type: [String],
    default: [],

  },
  status: {
    type: String,
    enum: ["Pending", "Learning", "Done"],
    default: "Pending",
  },
})

export default mongoose.models.Todo || mongoose.model<Todo>("Todo", TodoSchema)

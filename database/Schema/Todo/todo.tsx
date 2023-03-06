import mongoose, { Document } from "mongoose"
import moment from 'moment';

export interface Todo extends Document {
  title: string
  type: string
  date: {type:Date}
  topics:string[]
  status:string

}

const TodoSchema = new mongoose.Schema({
  title: { type: String, default: "" },
  type: { type: String, default: "" },
  date: {
    type: Date,
    default: () => new Date().toLocaleDateString(),
  },

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

import mongoose, { Document } from "mongoose"

export interface User extends Document {
  name: string
  email: string
}

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
})

export default mongoose.models.User || mongoose.model<User>("User", UserSchema)

import mongoose from "mongoose"
import { NextApiRequest, NextApiResponse } from "next"

const connectDb = (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res)
  }
  const db_uri = process.env.MONGODB_URI
console.log(db_uri)
  await mongoose.connect(db_uri)
  return handler(req, res)
}

export default connectDb

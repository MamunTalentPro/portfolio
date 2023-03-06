import { NextApiRequest, NextApiResponse } from "next"
import connectDb from "database/connection"
import User from "database/Schema/user/user"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { name, email } = req.body
      console.log(name,email)
      const user = await User.create({ name, email })
      res.status(201).json(user)
    } catch (error) {
      res.status(400).json({ message: error })
    }
  } else if (req.method === "GET") {
    try {
      const users = await User.find({})
      res.status(200).json(users)
    } catch (error) {
      res.status(400).json({ message: error })
    }
  } else {
    res.status(405).json({ message: "Method not allowed" })
  }
}

export default connectDb(handler)

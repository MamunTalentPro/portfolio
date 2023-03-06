import { NextApiRequest, NextApiResponse } from "next"
import connectDb from "database/connection"
import Todo from "database/Schema/Todo/todo"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const currentDate = new Date().toJSON().slice(0, 10)
      console.log(currentDate)
      const currentDateRegex = new RegExp(currentDate, "i")
      const todo = await Todo.find({ createDate: { $regex: currentDateRegex } })
      console.log(todo)
      res.status(200).json(todo)
    } catch (error) {
      res.status(400).json({ message: error })
    }
  } else {
    res.status(405).json({ message: "Method not allowed" })
  }
}

export default connectDb(handler)

import { NextApiRequest, NextApiResponse } from "next"
import connectDb from "database/connection"
import Todo from "database/Schema/Todo/todo"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
     // const { title, } = req.body
      // console.log(name, email)
      const todo = await Todo.create(req.body)
      res.status(201).json(todo)
    } catch (error) {
      res.status(400).json({ message: error })
    }
  } else if (req.method === "GET") {
    try {
      const todos = await Todo.find({})
      res.status(200).json(todos)
    } catch (error) {
      res.status(400).json({ message: error })
    }
  } else {
    res.status(405).json({ message: "Method not allowed" })
  }
}

export default connectDb(handler)

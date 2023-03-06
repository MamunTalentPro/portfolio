import { NextApiRequest, NextApiResponse } from "next"
import connectDb from "database/connection"
import Todo from "database/Schema/Todo/todo"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {

     const { title,type ,topics,status} = req.body as { title:string,type:string,date:string,topics:string[],status:string}
      // console.log(name, email)


    const date = new Date().toJSON().slice(0, 10)
      const todo = await Todo.create({ title, type, date, topics ,status})

      res.status(201).json(todo)
    } catch (error) {
      res.status(400).json({ message: error })
    }
  } else if (req.method === "GET") {
    try {
      const todos = await Todo.find().sort({ date: -1 })
      res.status(200).json(todos)
    } catch (error) {
      res.status(400).json({ message: error })
    }
  } else {
    res.status(405).json({ message: "Method not allowed" })
  }
}

export default connectDb(handler)

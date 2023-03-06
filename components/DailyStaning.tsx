import { CodeIcon } from "@heroicons/react/solid"
import { todo } from "dummy"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { Todo } from "services/todo.service"
import { TodoDataType } from "Type/type"

export default function DailyStanding() {
  const [todoData, setTodoData] = useState<TodoDataType[]>([
    {
      title: "",
      type: "",
      createDate:"",
      date: new Date(),
      topics: [],
      status: "",
    },
  ])
    const [todayData, setTodayData] = useState<TodoDataType>({
      title: "Undefined",
      type: "Undefined",
      createDate: "Undefined",
      date: new Date(),
      topics: ["comming soon"],
      status: "Undefined",
    })
  const fetchTodoList = async () => {
    const data = await Todo.getTodoList()
    const todayData=await Todo.getTodoOneFromList()
    setTodayData(todayData)

    setTodoData(data)
    console.log(data)
  }
  useEffect(() => {
    fetchTodoList()
  }, [])
  return (
    <section id="daily-standing" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <Image className="mx-auto inline-block w-16 mb-4 " src="/Todo.png" alt="todo icon" width={100} height={100} />
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">Daily Stand Up</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">This section is a list of my everyday tasks.</p>
        </div>
        <div className="flex   gap-4">
          <div className="sm:w-1/2 w-100 p-4 shadow-xs shadow-green-500 animate-spin  rotate-[.5deg] transition-transform  duration-10000000 delay-10000000 origin-center ">
            <h1 className="text-center">Today Task</h1>
            <div className="flex relative ">
              <div className="px-8 py-10 relative z-10 w-full  border-gray-800 bg-gray-900 opacity-100">
                <h1 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  {todayData.title}
                </h1>
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  {todayData.createDate}
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3 underline cursor-pointer">
                  {todayData.type}
                </h1>

                <ol className="list-decimal">
                  {todayData?.topics?.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                  ))}
                </ol>
                <p className="leading-relaxed font-bold text-xl text-red-700">Status : {todayData.status}</p>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 w-100 p-4 shadow-xs overflow-y-auto  h-100  shadow-green-500 animate-spin rotate-[.5deg] transition-transform  duration-10000000 delay-10000000 origin-center">
            <h1 className="text-center">Previous Task</h1>
            {todoData.map((todo: TodoDataType, indx) => (
              <div key={indx}>
                <div className="flex relative border-b-4 hover:opacity-90  border-b-white">
                  <div className="px-8 py-10 relative z-10 w-full  border-gray-800 bg-gray-900 opacity-100">
                    <h1 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">{todo.title}</h1>
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {todo.createDate}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3 underline cursor-pointer">
                      {todo.type}
                    </h1>

                    <ol className="list-decimal">
                      {todo.topics.map((topic, idx) => (
                        <li key={idx}>{topic}</li>
                      ))}
                    </ol>
                    <p className="leading-relaxed font-bold text-xl text-red-700">Status : {todo.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

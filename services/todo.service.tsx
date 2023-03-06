const TODO_ENDPOINT = "api/v1/todo"

export class Todo {
  static getTodoList = async () => {
    try {
      const response = await fetch(TODO_ENDPOINT , {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      return await response.json()
    } catch (error) {
      console.log(error)
    }
  }
}

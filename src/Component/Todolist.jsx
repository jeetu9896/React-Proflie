import { TodoListItem } from "./TodoListItem"

export const Todolist = () => {
    let data = [
        { id: 1, title: "Wake up", status: true },
        { id: 2, title: "drink tea", status: false },
        { id: 3, title: "eat maggi", status: true },
        { id: 4, title: "sleep", status: false }
      ]
    return <>
    <div className="todo">
        
    <h1>Todo List</h1>
    <TodoListItem data={data} />    
    </div>
    </>
}
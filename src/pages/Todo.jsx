import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import Card from '@mui/material/Card';
import './Todo.css';

export default function Todo () {

  let [todos, setTodos] = useState([{ id: uuidv4(), text: "sample task"  , isDone : false}]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTasks = () => {
    if (newTodo.trim() === "") return; 
    setTodos((prevTodos) =>{
      return([...prevTodos, { id: Date.now(), text: newTodo , isDone:false }])
    });
    setNewTodo(""); 
  };
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };


let deleteTodo = (id) =>{
setTodos(() => todos.filter((prevTodos) => prevTodos.id !=id));
}

let markAsAllDone = () => {
setTodos( (prevTodos) =>
  prevTodos.map((todo)=> {
   return{
      ...todo,
      isDone:true,
    };
  })
)
}

let markAsDone = (id) => {
  setTodos( (prevTodos) =>
    prevTodos.map((todo)=> {
      if (todo.id == id){
       return{
          ...todo,
          isDone:true,
        };
      }else {
        return todo;
      }
      })
    )
}

  return (
    <div className="todo-container">
        <h1>To-Do List </h1>
      <input placeholder="Enter the task" value={newTodo} onChange={updateTodoValue} />
      <br />
      <button onClick={addNewTasks}>Add Task</button>
      <br /> <br /> <br /> <br />
      <hr />
      <Card sx={{ maxWidth: 300 } } className='todo-card'>
      {/* <h4>Tasks Todo</h4> */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone?{textDecorationLine: "line-through"}:{}}>{todo.text}</span>
            &nbsp;&nbsp;
            &nbsp;&nbsp;
           <button onClick={() => deleteTodo(todo.id)}>delete</button>
      <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>

            </li>
           ))}
      </ul>
      <button onClick={markAsAllDone}>Mark As All Done</button>
      </Card>
    </div>
  );
}


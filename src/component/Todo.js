import React from 'react';

const Todo = ({todo, completeTodo, editTodo}) => {

  return (
 <div key={todo.id} className={todo.complete ? " todo-list strike" : "todo-list"}>{todo.task}
     <div className="iconsContainer">
        <button onClick={()=>{editTodo(todo.id)}}>Edit</button>
       { !todo.complete && <button  onClick = {()=>{completeTodo(todo.id)}}>Complete</button>}
    </div>
 </div>
  )
}

export default Todo
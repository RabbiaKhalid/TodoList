import React from 'react';
import Todo from './Todo';

const TodoList = ({todoList,completeTodo, filterhandler, editTodo}) => {
  return (
    <div>
      <button className='todo-clear-complete' onClick={filterhandler}>Clear Completed</button>

      <h1 className= 'todo-header'> Todo List</h1>
    
    {todoList.map((todo, index)=>{
        return(
       <Todo  key ={index} todo = {todo} completeTodo = {completeTodo} editTodo = {editTodo}/>
        )
    })}
   </div>
  )
}

export default TodoList












import React from 'react'

const TodoForm = ({addtask, toggleSubmit, userinput, setUserInput}) => {
    //handlers
    const handleSubmit = (e) =>{
          e.preventDefault();
          addtask(userinput);
          setUserInput("");

    }
    const handleChange = (e)=>{
       setUserInput(e.currentTarget.value);
    }
  return (
   <form className='todo-form' onSubmit={handleSubmit}>
      <input className='todo-input' value={userinput} type = "text" onChange={handleChange} placeholder = "Enter Task..."></input>
     {toggleSubmit ? <button className='todo-button'>Submit</button> :  <button className='todo-button'>Edit</button>}
   </form>
  )
}

export default TodoForm
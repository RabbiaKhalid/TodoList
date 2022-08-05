import { useState } from 'react';
import './App.css';

//components
import Header from './component/Header';
import TodoList from './component/TodoList';
import TodoForm from './component/TodoForm';


//Data file
import data from './data.json';

function App() {
  //main dataList
  const[todoList , setTodoList] = useState(data);
  //toggleButton

  const[toggleSubmit, setToggleSubmit] = useState(true);

  //input field
  const[userinput, setUserInput] = useState('');

   //edit Item
   const[isEditItem, setEditItem] = useState(null);
  //handlers
  const completeTodo = (id) => {
    let checkState =  todoList.map((todo) =>{
      console.log("todo", todo);
      return todo.id === Number(id) ? {...todo , complete : !todo.complete} : { ...todo};
    });
    setTodoList(checkState);
  }

  const filterhandler = () =>{
    let filtertodo = todoList.filter((todo)=>{
      return !todo.complete;
    });
    setTodoList(filtertodo);
  }
 // Add Todo
  const AddTask = (userInput) =>{
    if(!userInput){
      alert("Please Add Todo");
    }
    else if(userInput && !toggleSubmit){
        setTodoList(
          todoList.map((elem) =>{
            if(elem.id === isEditItem){
              return {...elem, task : userInput}
            }
            return elem;
          })
         
        )
        setToggleSubmit(true);
        setUserInput('');
        setEditItem(null);
    }
    else{
    let newTask = [...todoList];
    newTask = [...todoList,{ id :todoList.length + 1, task: userInput, complete: false}]
    setTodoList(newTask);
    }
  }

  //Edit Todo
  const EditTodo = (id) =>{
    let updateTodo = todoList.find((elem)=>{
       return  elem.id === id;
    })
    setToggleSubmit(false);
    setUserInput(updateTodo.task);
    //reference ID
    setEditItem(id);

  }

  return (
    <div className="App">
      <Header/>
      <TodoForm toggleSubmit = {toggleSubmit} addtask = {AddTask} userinput ={userinput} setUserInput = {setUserInput}/>
      <TodoList  todoList = {todoList} completeTodo = {completeTodo} filterhandler = {filterhandler} editTodo = {EditTodo} />
    </div>

    
  );
}

export default App;

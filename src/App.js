import React, {useState} from 'react';
import Todos from './Todos';
import Todoform from './Todoform';
import './App.css';

/*function Todo ({todo, index,completetodo,removetodo}) {

  return (
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : null}}>{todo.text}
    <button onClick={() => completetodo(index)} > Completed</button>
    <button onClick={() => removetodo(index)} > x</button>
    </div>
  )
  }*/

  /*function Todoform ({addTodo}) {
    const [value, setValue] = useState('');

    const handleSubmit = e  => {
       e.preventDefault();
       if(!value) return;
       addTodo(value);
       setValue('');
      
    }
    return(
      <form onSubmit={handleSubmit}>
         <input type="text" value ={value} onChange={e =>setValue(e.target.value)} placeholder=" add" />
      </form>
    )
  }*/

function App() {
  const [todos, setTodos] = useState([
    {
      text : 'learn about react',
      isCompleted : false
    }, 
    {
      text : 'Meet ffriend for lunch',
      isCompleted : false
    },
    {
      text : 'learn about react',
      isCompleted : false
    }

  ])

  const addTodovalue = text => {
    const newTodos = [...todos, {text}]
    setTodos(newTodos);
  }

  const updateTodo = (text,index) => {
    //console.log('text');
    const newTodos = [...todos]
    newTodos.map(newTodo =>{
      if(newTodo.index ===index){
        newTodo.text=index;
      }
    })
  //newTodos[index].text = e.target.value;
    setTodos(newTodos);
  }
  const completetodo1 = index => {
    const newtodos =[...todos];
    //newtodos [index].isCompleted = true;
    newtodos [index].isCompleted =! newtodos [index].isCompleted;
    setTodos(newtodos);
  }

  const removetodo1 = index => {
    const newtodos =[...todos];
    newtodos.splice(index, 1);
    setTodos(newtodos);
  }
  const alltodo = index => {
   /* const filteredalltodo = todos.filter(({ index }) => {
      setTodos(filteredalltodo);
    })*/
    const newtodos =[...todos];

  }
  return(
    <div className ="container">
        <h1 className="header">Todos</h1>
       
        <Todoform addTodo = {addTodovalue} />
      {
        todos.map ((todo,index) => (
          < Todos key ={index} index ={index} todo={todo} completetodo ={completetodo1} removetodo ={removetodo1} updateTodo ={updateTodo}/>
        ))
      }
     
    </div>
  )
}


export default App
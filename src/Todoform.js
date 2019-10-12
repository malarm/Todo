import React, {useState} from 'react';

function Todoform ({addTodo,updateTodo}) {
   const [value, setValue] = useState('');

   const handleSubmit = e  => {
      e.preventDefault();
      if(!value) return;
      addTodo(value);
      setValue('');
     
   }
   return(
     <form onSubmit={handleSubmit}>
        <input className="text" type="text" value ={value} onChange={e =>setValue(e.target.value)}  placeholder=" Type your task here" />
     </form>
   )
 }

  export default Todoform